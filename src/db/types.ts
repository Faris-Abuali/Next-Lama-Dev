import { Model } from "mongoose";

// Define interfaces for documents
export interface UserDocument extends Document {
    id: string;
    username: string;
    email: string;
    password?: string;
    img?: string;
    isAdmin: boolean;
    createdAt: string;
}

export interface PostDocument extends Document {
    _id: string;
    title: string;
    desc: string;
    img?: string;
    userId: string;
    slug: string;
    createdAt: string;
}

// Define interfaces for models
export interface UserModel extends Model<UserDocument> { }
export interface PostModel extends Model<PostDocument> { }

