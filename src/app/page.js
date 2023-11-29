"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Container } from "../components/container/container";
import { Card } from "../components/card/card";
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);

  // const getBlogs = () => {
  //   fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.blogs);
  //     });
  // };
  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://api.slingacademy.com/v1/sample-data/blog-posts"
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className={styles.grid}>
          {list.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}
