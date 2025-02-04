import { number, string } from "joi";
import mongoose, { Document, Schema } from "mongoose";

export interface IContact {
    email: string;
    subject: string;
    comment: string;
}

export interface IContactModel extends IContact, Document {}

const ContactSchema: Schema = new Schema(
    {
        email: { type: String, required: true },
        subject: { type: String, required: true },
        comment: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IContactModel>("Contact", ContactSchema);
