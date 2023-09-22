import React from "react";
import styles from "./ButtonFooter.module.css";

function ButtonFooter({ children }) {
  return (
    <>
      <div className={styles.btn_wrapper}>
        <button className={styles.signup_btn} type="submit">
          {children}
        </button>
      </div>
    </>
  );
}

export default ButtonFooter;
