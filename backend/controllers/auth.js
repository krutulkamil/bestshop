import User from "../models/user";
import {hashPassword, comparePassword} from "../helpers/auth";

export const register = async (req, res) => {
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
        const exist = await User.findOne({ email: email });
        if (exist) {
            return res.json({
                error: "Email is taken"
            })
        }
        // hash password
        const hashedPassword = await hashPassword(password);

        try {
            const user = await new User({
                name,
                email,
                password: hashedPassword
            }).save();

            const {password, ...rest} = user._doc;
            return res.json({
                user: rest
            })
        } catch (err) {
            console.log(err);
        }

    } catch (err) {
        console.log(err);
    }
};

