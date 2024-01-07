import { Post } from "@/db/models";
import { connectToDb } from "@/lib/utils";
import { ParamsObject } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: ParamsObject<'slug'>) => {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (request: NextRequest, { params }: ParamsObject<'slug'>) => {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};