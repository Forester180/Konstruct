import React from "react";
import styles from "./FooterLinks.module.css";

function FooterLinks({ href, text }) {
  return (
    <li className={styles.footer_item}>
      <a href={href} className={styles.footer_link}>
        {text}
      </a>
    </li>
  );
}

export default FooterLinks;
