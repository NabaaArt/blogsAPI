
"use client";
import { Container } from "../container/container";
import styles from "./footer.module.css"
import { FaSquareFacebook } from "react-icons/fa6"
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillTwitterSquare } from "react-icons/ai";

export const Footer=()=>{

  return(

<footer className={styles.footer}>
  
     <Container> 
     
        <div class={styles.content}>
          <h3>All Rights Reserved - Aon2023</h3>
     <ul>
     <li>
        <a href={"/"}><FaSquareFacebook /></a>
      </li> 
 <a href={"/"}> <TiSocialInstagram /></a> 
  <a href={"/"}> <AiFillTwitterSquare /></a> 
     </ul>

        </div>
       
        </Container>
    </footer>
  )
}
 