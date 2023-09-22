import React from "react";
import styles from "./Nav.module.css";

function Nav({ children }) {
  return (
    <>
      <section>
        <div className={styles.section_img}>
          <div className={styles.section_inner}>
            <img
              src="../../../public/images/h-logo.svg"
              alt=""
              className={styles.header_logo}
            />
            <div className={styles.header_partner_text}>
              <h1 className={styles.header_title}>PARTNER WITH KONSTUCT</h1>
              <p className={styles.header_text}>
                An award-winning construction management firm
              </p>
            </div>
            <p className={styles.header_text_down}>SCROLL DOWN</p>
          </div>
        </div>
        <div className={styles.section_nav}>
          <div className={styles.nav_logo}>
            <a href="#">
              <img src="../../../public/images/projeco-logo-black.svg" alt="" />
            </a>
          </div>
          <div className={styles.nav_links}>
            <ul className={styles.nav_list}>{children}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nav;
