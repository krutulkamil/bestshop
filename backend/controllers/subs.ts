// express
import {Request, Response} from "express";
// mongoDB model
import User from "../models/user";
// stripe
import Stripe from "stripe";
// .env
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27'
});

export const prices = async (req: Request, res: Response) => {
    const prices = await stripe.prices.list();
    res.json(prices.data.reverse());
};

interface IUserRequest extends Request {
    user?: any
}

export const createSubscription = async (req: IUserRequest, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.user._id);
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: req.body.priceId,
                    quantity: 1
                }
            ],
            customer: user!.stripe_customer_id,
            success_url: process.env.STRIPE_SUCCES_URL!,
            cancel_url: process.env.STRIPE_CANCEL_URL!
        });

        res.json(session.url);
    } catch (err) {
        console.log(err);
    }
};

export const subscriptionStatus = async (req: IUserRequest, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.user._id);
        const subscription = await stripe.subscriptions.list({
            customer: user!.stripe_customer_id,
            status: "all",
            expand: ["data.default_payment_method"],
        });

        const updated = await User.findByIdAndUpdate(user!._id, {
                subscriptions: subscription.data,
            }, { new: true }
        );
        res.json(updated);

    } catch (err) {
        console.log(err);
    }
};

export const subscriptions = async (req: IUserRequest, res: Response): Promise<void> => {
    try {

        const user = await User.findById(req.user._id);
        const subscriptions = await stripe.subscriptions.list({
            customer: user!.stripe_customer_id,
            status: "all",
            expand: ["data.default_payment_method"],
        });

        res.json(subscriptions);
    } catch (err) {
        console.log(err);
    }
};

export const customerPortal = async (req: IUserRequest, res: Response): Promise<void> => {
    try {

        const user = await User.findById(req.user._id);
        const portalSession = await stripe.billingPortal.sessions.create({
            customer: user!.stripe_customer_id,
            return_url: process.env.STRIPE_SUCCES_URL
        });

        res.json(portalSession.url);
    } catch (err) {
        console.log(err);
    }
};