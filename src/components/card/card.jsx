import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import dayjs from "dayjs" 

export const Card = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={blog.photo_url} fill={true} />
      </div>
      <h4 className={styles.title}>{blog.title}</h4>
      <p className={styles.subtitle}>{blog.catogery}</p>
      <div className={styles.footer}>
        <Link href={`/artical/${blog.id}`}>READ ARTICAL</Link>
       <span>{dayjs(blog.created_at).format("YYYY D MMM")}</span>
      </div>
    </div>
  )
}
