import Image from "next/image";
import styles from "./single-post.module.css";
import Author from "@/components/author";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { ParamsObject } from "@/types"
import getFormattedDate from "@/lib/getFormattedDate"
import { PostDocument } from "@/db/types";

// FETCH DATA WITH AN API
const getData = async (slug: string): Promise<PostDocument> => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

export const generateMetadata = async ({ params }: ParamsObject<"slug">) => {
    const { slug } = params;

    const post = await getPost(slug);

    return {
        title: post?.title ?? "Post not found",
        description: post?.desc ?? "Post not found",
    };
};

const SinglePostPage = async ({ params }: ParamsObject<"slug">) => {
    const { slug } = params;

    // FETCH DATA WITH AN API
    const post = await getData(slug);

    // FETCH DATA WITHOUT AN API
    // const post = await getPost(slug);

    if (!post) {
        return <div>Post not found</div>;
    }
    
    const imgSrc = post.img ? post.img : "/images/placeholder.png";

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={imgSrc} alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Author userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
                            {getFormattedDate(post.createdAt)}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    );
};

export default SinglePostPage;