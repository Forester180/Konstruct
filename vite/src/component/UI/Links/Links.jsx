import React from "react";
import styles from "./Links.module.css";

function Links({ href, children }) {
  return (
    <>
      <div className={styles.wrapper_link}>
        <a href={href} className={styles.our_link}>
          {children}
        </a>
      </div>
    </>
  );
}

export default Links;
