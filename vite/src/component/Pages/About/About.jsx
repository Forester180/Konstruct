import React from "react";
import styles from "./About.module.css";
import Links from "../../UI/Links/Links";
import Cards from "../../Cards/Cards";
import CardAbout from "../../Cards/CardAbout/CardAbout";
import TitleAbout from "../../UI/TitleAbout/TitleAbout";
import SubtitleAbout from "../../UI/SubtitleAbout/SubtitleAbout";

function About() {
  return (
    <>
      <div className={styles.wrapper_about}>
        <section className={styles.story}>
          <h4 className={styles.story_title}>OUR STORY</h4>
          <hr className={styles.story_line} />
          <div className={styles.story_wrapper}>
            <div className={styles.story_text}>
              <p className={styles.story_paragraph}>
                Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has
                become the number one construction management firm
              </p>
              <p className={styles.story_item}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat.
              </p>
            </div>
            <div className={styles.story_cards}>
              <div className={styles.story_card_one}>
                <p>WE PLAN</p>
              </div>
              <div className={styles.story_card_two}>
                <p>WE MANAGE</p>
              </div>
              <div className={styles.story_card_three}>
                <p>WE BUILD</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.pluses}>
          <div className={styles.block_pluses_header}>
            <div className={styles.block_line}>
              <h4 className={styles.pluses_title}>OUR CAPABILITIES</h4>
              <hr className={styles.pluses_line} />
            </div>
            <p className={styles.pluses_text}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
            <div className={styles.pluses_link}>
              <Links href="/services">ALL SERVICES</Links>
            </div>
          </div>
          <Cards>
            <CardAbout img="../../../../public/images/first-icon.png">
              <TitleAbout title={`PROJECT AND CONSTRUCTION MANAGEMENT`} />
              <SubtitleAbout
                subtitle={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.`}
              />
            </CardAbout>
            <CardAbout img="../../../../public/images/second-icon.png">
              <TitleAbout title={`STRUCTURE AUDIT AND MAINTENANCE`} />
              <SubtitleAbout
                subtitle={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.`}
              />
            </CardAbout>
            <CardAbout img="../../../../public/images/third-icon.png">
              <TitleAbout title={`FACTORY CONSTRUCTION AND MODELING`} />
              <SubtitleAbout
                subtitle={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.`}
              />
            </CardAbout>
          </Cards>
        </section>
        <section className={styles.question}>
          <div className={styles.question_img}>
            <h2 className={styles.question_title}>
              Want to build something amazing?
            </h2>
          <Links href="/contact">GET IN TOUCH</Links>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
