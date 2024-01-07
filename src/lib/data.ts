import { Post, User } from "../db/models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
import handleMongooseError from "./error"
import mongoose from "mongoose";
import { PostDocument } from "@/db/types";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];
//   { id: 2, title: "Post 2", body: "......", userId: 1 },

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find<PostDocument>();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    handleMongooseError(err as mongoose.Error);
  }
};

export const getUser = async (id: string) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    handleMongooseError(err as mongoose.Error);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    handleMongooseError(err as mongoose.Error);
  }
};