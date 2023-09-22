import React from "react";
import styles from "./Layout.module.css";
import Nav from "../Nav/Nav";
import NavLinks from "../Nav/NavLinks/NavLinks";
import Footer from "../Footer/Footer";
import FooterLinks from '../Footer/FooterLinks/FooterLinks'

function Layout({ children }) {
  return (
    <>
      <Nav>
        <NavLinks href="/" text="HOME" />
        <NavLinks href="/about" text="ABOUT" />
        <NavLinks href="/services" text="SERVICES" />
        <NavLinks href="/work" text="WORK" />
        <NavLinks href="/contact" text="CONTACT" />
      </Nav>
      <div className={styles.main_container}>{children}</div>
      <Footer>
        <div className={styles.wrapper_links}>
          <div className={styles.links_one}>
            <FooterLinks href="/" text="HOME" />
            <FooterLinks href="/about" text="ABOUT" />
            <FooterLinks href="/services" text="SERVICES" />
            <FooterLinks href="/work" text="WORK" />
            <FooterLinks href="/contact" text="CONTACT" />
          </div>

          <div className={styles.links_two}>
            <FooterLinks href="/faq" text="FAQ" />
            <FooterLinks href="/terms" text="TERMS" />
            <FooterLinks href="/careers" text="CAREERS" />
          </div>

          <div className={styles.links_three}>
            <FooterLinks href="/blog" text="BLOG" />
            <FooterLinks href="/partners" text="PARTNERS" />
            <FooterLinks href="/news" text="NEWS" />
          </div>
        </div>
      </Footer>
    </>
  );
}

export default Layout;
