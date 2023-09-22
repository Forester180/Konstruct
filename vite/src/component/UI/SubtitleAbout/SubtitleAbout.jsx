import React from "react";
import styles from './SubtitleAbout.module.css'

function SubtitleAbout({subtitle}) {
  return (
    <>
      <p className={styles.subtitle_about}>{subtitle}</p>
    </>
  );
}

export default SubtitleAbout;
