import mongo from "./../database";
import { Document } from "mongoose";

const schema = new mongo.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    photo: String,
});

export interface IUserModel extends Document {
    name: string;
    email: string;
    password: string;
    photo: string;
}

export default mongo.model<IUserModel>("User", schema);
