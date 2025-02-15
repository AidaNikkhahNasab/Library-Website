import mangoose, { Document, Schema } from "mongoose";

export interface IAuthor {
    name: string;
}

export interface IAuthorModel extends IAuthor, Document {}

const AuhtorSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
        },

    {
        versionKey: false
    }
);

export default mangoose.model<IAuthorModel>("Author", AuhtorSchema);
