// express
import {Request, Response} from "express"
// mongoDB model
import User from "../models/user";
// bcypt helper functions
import {hashPassword, comparePassword} from "../helpers/auth";
// jwt
import jwt from 'jsonwebtoken';
// stripe
import Stripe from "stripe";
// .env
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27'
});

export const register = async (req: Request, res: Response) => {
    // validation
    try {
        const {name, email, password} = req.body;

        if (!name) {
            return res.json({
                error: "Name is required"
            });
        }
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be at least 6 characters long"
            });
        }
        const exist = await User.findOne({email: email});
        if (exist) {
            return res.json({
                error: "Email is taken"
            })
        }

        // hash password
        const hashedPassword = await hashPassword(password);

        // create account in stripe
        const customer: Stripe.Customer = await stripe.customers.create({
            email,
        });

        try {
            const user = await new User({
                name,
                email,
                password: hashedPassword,
                stripe_customer_id: customer.id
            }).save();

            // create signed token
            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET!, {expiresIn: '7d'});
            const {password, ...rest} = user._doc;
            return res.json({
                user: rest,
                token
            })
        } catch (err) {
            console.log(err);
        }

    } catch (err) {
        console.log(err);
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        // check email
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.json({
                error: "No user found."
            })
        }
        // check password
        const match = await comparePassword(req.body.password, user.password);
        if (!match) {
            return res.json({
                error: "Wrong password."
            });
        }
        // create signed token
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET!, {expiresIn: '7d'});
        const {password, ...rest} = user._doc;

        res.json({
            token,
            user: rest
        });

    } catch (err) {
        console.log(err);
    }
};

