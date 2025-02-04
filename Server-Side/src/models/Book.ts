import mongoose, { Document, Schema } from "mongoose";

export interface IBook {
    title: string;
    author: string;
    year: number;
    issn: string;
    abstract: string;
    numberBook: number;
}

export interface IBookModel extends IBook, Document {}

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: Number, required: true },
        issn: { type: String },
        abstract: { type: String },
        numberBook: { type: Number}
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IBookModel>("Book", BookSchema);
