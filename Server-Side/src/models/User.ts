import mongoose, { Document, Schema } from 'mongoose';
import { number, string } from "joi";


export interface IUser {
        fname: string;
        lname: string;
        username: string;
        email: string;
        password: string;
        mobileNumber: number;
        role: string;
        comparePassword(candidatePassword: string): Promise<boolean>;
    
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        fname: { type: String },
        lname: { type: String },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        mobileNumber: { type: Number },
        role: { type: String }        
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUserModel>('User', UserSchema);
