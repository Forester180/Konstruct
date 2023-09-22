import React from "react";
import styles from "./CardAbout.module.css";

function CardAbout({ img, children }) {
  return (
    <>
      <div className={styles.card_about}>
        <img src={img} alt="" className={styles.card_img} />
        <div className={styles.card_text}>{children}</div>
      </div>
    </>
  );
}

export default CardAbout;
