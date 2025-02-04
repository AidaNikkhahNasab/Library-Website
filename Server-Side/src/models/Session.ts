import mongoose, { Document, Schema } from 'mongoose';
import { string } from "joi";

export interface ISession {
    fname: string;
    lname: string;
    username: string;
    email: string;
    password: string;
    mobileNumber: number;
    role: string;
        
}

export interface ISessionModel extends ISession, Document {}

const SessionSchema: Schema = new Schema(
    {
        fname: { type: String },
        lname: { type: String },
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        mobileNumber: { type: Number },
        role: { type: String }    
        
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ISessionModel>('Session', SessionSchema);
