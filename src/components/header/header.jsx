
"use client";
import styles from "./header.module.css"
import { Container } from "../container/container";

export const Header = () => {

  return (

    <div className={styles.header}>
      <Container>
        <div class={styles.content}>
          <h1>Aon 2023</h1>
          <ul>
            <li>
              <a href="/" > HOME </a>
            </li>
            <li>
              <a href="/" > HELP </a>
            </li>
            <li>
              <a href="/" > ABOUT </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>

  )
}
