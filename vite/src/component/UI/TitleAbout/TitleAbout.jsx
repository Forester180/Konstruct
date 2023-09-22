import React from "react";
import styles from './TitleAbout.module.css'

function TitleAbout({ title }) {
  return (
    <>
      <h4 className={styles.title_about}>{title}</h4>
    </>
  );
}

export default TitleAbout;
