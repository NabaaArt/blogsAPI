
"use client";
import styles from "./header.module.css"
import { Container } from "../container/container";

export const Header=()=>{

    return(
<header>

      <div className={styles.header}>
        <Container> 
        <div class={styles.content}>
          <h1>Aon 2023</h1>
          <p>Home About Help</p>
        </div>
        </Container>
      </div>
    </header>
    )
}
 