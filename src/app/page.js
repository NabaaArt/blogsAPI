"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Container } from "../components/container/container";
import { Card } from "../components/card/card";
import { useEffect, useState } from "react";
import { SkeletonCard } from "@/components/skeleton/skeleton";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ScrollComponent from "@/hooks/useInfiniteScroll";

export default function Home() {
  const [list, setList] = useState([]);
  const [loding, setLoding] = useState(true);
  const rootElement = document.getElementById("root");

  //////////////////////////

  const getBlogs = () => {
    setLoding(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((res) => res.json())
      .then((data) => {
        setList(data.blogs);
        setLoding(false);
      });
  };

  ////////////////////////////

  // useEffect(() => {
  //   getBlogs();
  // }, []);

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
        ReactDOM.render(
        <StrictMode>
          <ScrollComponent />
        </StrictMode>
       );
        {/* <div className={styles.grid}>
          {loding &&
            [0, 1, 2, 3, 4, 5, 6].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          {!loding &&
            list.map((blog, index) => <Card key={index} blog={blog} />)}
        </div> */}
      </Container>
      <Footer />
    </main>
  );
}
