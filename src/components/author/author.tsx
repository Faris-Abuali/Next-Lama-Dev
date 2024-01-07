import { getUser } from "@/lib/data";
import styles from "./author.module.css";
import Image from "next/image";

interface Props {
  userId: string;
}

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const Author = async ({ userId }: Props) => {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  if (!user) {
    return <div>User not found</div>;
  }
  
  const imgSrc = user.img ? user.img : "/images/noavatar.png";

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={imgSrc}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default Author;