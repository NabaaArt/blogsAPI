'use client'
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Container } from "@/components/container/container";
import styles from './page.module.css'
import Image from "next/image";

async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("faild to fetch");
  }
  return res.json();
}

export default async function Artical({ params }) {
  let data = await getData(params.id);

  return (
    <main>
   <Header/>
<Container> 
   <div className={styles.head}>
<div >
<h3>First artical riltle for this design</h3>
<p>by Aon 2023</p>
</div>
   </div>
   <div className={styles.cover}>
   <Image src={data.blog.photo_url} fill={true}/>
    </div>
    <div className={styles.content} dangerouslySetInnerHTML={{__html:data.blog.content_html}}>
     
    
   </div>
   </Container>
   <Footer/>
    </main>
  );
}
