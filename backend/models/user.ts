import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    },
    stripe_customer_id: String,
    subscriptions: [],
});

interface DocumentResult<T>{
    _doc: T;
}

export interface IUser extends DocumentResult<IUser> {
    name: string;
    email: string;
    password: string;
    stripe_customer_id: string;
    subscriptions: [];
}

export default mongoose.model<IUser>('User', userSchema);