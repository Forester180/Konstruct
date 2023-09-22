import React from "react";
import styles from "./Footer.module.css";
import ButtonFooter from "../UI/ButtonFooter/ButtonFooter";

function Footer({ children }) {
  return (
    <>
      <section className={styles.signup}>
        <h4 className={styles.signup_title}>Newsletter Signup</h4>
        <form className={styles.signup_form}name="appointment-form" action="" method="post">
          <input className={styles.signup_email}
            name="appointment-email" type="email" placeholder="test@youremail.com"/>
          <ButtonFooter>SIGNUP</ButtonFooter>
        </form>
      </section>
      <section className={styles.info}>
        <div className={styles.info_wrapper}>
          <div className={styles.block_about}>
            <h5 className={styles.info_text}>COMPANY</h5>
            <img
              src="../../../public/images/h-logo.svg"
              alt=""
              className={styles.info_logo}
            />
            <p className={styles.info_item}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>
          <hr className={styles.footer_line}/>
          <div className={styles.block_links}>
            <h5 className={styles.info_text}>LINKS</h5>
            <div className={styles.wrapper_footer_list}>
              <ul className={styles.info_links}>{children}</ul>
            </div>
          </div>
          <hr className={styles.footer_line}/>
          <div className={styles.block_contact}>
            <h5 className={styles.info_text}>CONTACT US</h5>
            <p className={styles.contact_item}>
              <span>213 Baker Street</span>
              <span>Oriel City Kounty</span>
              <span>7000 KNW,</span>
              <span>Kountry Name</span>
            </p>
            <div className={styles.wrapper_link_number}>
              <a className={styles.link_number} href="tel:+239942334022">
                +23 994 233 4022
              </a>
            </div>
            <p className={styles.info_email}>info@konstruct.com</p>
          </div>
          <hr className={styles.footer_line}/>
          <div className={styles.block_social}>
            <a href="#" className={styles.social_link}>
              <img
                src="../../../public/images/facebook-logo-svgrepo-com.svg"
                alt=""
                className={styles.logo_facebook}
              />
            </a>
            <a href="#" className={styles.social_link}>
              <img
                src="../../../public/images/lt.svg"
                alt=""
                className={styles.logo_twitter}
              />
            </a>
            <a href="#" className={styles.social_link}>
              <img
                src="../../../public/images/lg.svg"
                alt=""
                className={styles.logo_google}
              />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.footer_down}>
        <p className={styles.footer_down_text}>
          © 2017 Konstruct Inc. Designed by Jane Kathryn Teo
        </p>
      </section>
    </>
  );
}

export default Footer;
