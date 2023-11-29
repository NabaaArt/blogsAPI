import styles from './card.module.css'
import Link  from 'next/link'
export const Card=({blog})=>{
 
    return(
        <div className={styles.card}>
        <div className={styles.img}></div>
        <h4 className={styles.title}>{blog.title}</h4>
        <p className={styles.subtitle}>{blog.catogery}</p>
        <div className={styles.footer}>
     <Link href={"./"}>READ ARTICAL</Link> 
          <span>{blog.created-at}</span>
        </div>
        </div>
    )
}