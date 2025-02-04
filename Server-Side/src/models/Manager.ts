import { number, string } from "joi";
import mongoose, { Document, Schema } from "mongoose";

export interface IManager {
    fname: string;
    lname: string;
    password: string;
    email: string;
    mobilenumber: string
    role: string;
}

export interface IManagerModel extends IManager, Document {}

const ManagerSchema: Schema = new Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        mobilenum: { type: String },
        role: { type: String }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IManagerModel>("Manager", ManagerSchema);
