import PostCard from "@/components/post-card";
import styles from "./blog.module.css";
import { PostDocument } from "@/db/types";

// FETCH DATA WITH AN API
const getData = async (): Promise<PostDocument[]> => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  console.log(posts)
  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;