import mongoose, { Schema } from "mongoose";
import { PostDocument, PostModel, UserDocument, UserModel } from "./types";

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
      default: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new Schema<PostDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User: UserModel = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post: PostModel = mongoose.models?.Post || mongoose.model("Post", postSchema);