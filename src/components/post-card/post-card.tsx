import Image from "next/image"
import styles from "./post-card.module.css"
import Link from "next/link"
import { PostDocument } from "@/db/types"
import getFormattedDate from "@/lib/getFormattedDate"

interface Props {
    post: PostDocument;
}

const PostCard = ({ post }: Props) => {
    const { title, desc, createdAt, slug, img } = post
    const imgSrc = img ? img : "/images/placeholder.png";
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={imgSrc} alt="" fill className={styles.img} />
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.date}>{getFormattedDate(createdAt)}</span>
                <p className={styles.desc}>{desc}</p>
                <Link className={styles.link} href={`/blog/${slug}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard
