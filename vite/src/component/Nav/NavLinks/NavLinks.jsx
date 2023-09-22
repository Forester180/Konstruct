import React from "react";
import styles from "./NavLinks.module.css";

function NavLinks({ href, text }) {
  return (
    <>
      <li className={styles.nav_item}>
        <a href={href} className={styles.nav_link}>
          {text}
        </a>
        {/* <a href={href} className={cn({[styles.nav_link], [styles.nav_link-active]})}>
        {text}
    </a> */}
      </li>
    </>
  );
}

export default NavLinks;

// const activeClass = document.querySelector('.nav_link');

// activeClass.forEach(function(element) {
//   element.addEventListener('click', foo)
// })

// function foo(evt) {
//   const target = evt.currentTarget;

//   activeClass.forEach(function(item) {
//     item.classList.remove('active')
//   })

//   target.classList.add('active')
// }
