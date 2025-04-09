import React from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.Nav_Wrapper}>
      <a href="#">divish dance</a>

      {/* Hamburger mobile menu (top right) */}
      <input
        type="checkbox"
        className={styles['side-menu']}
        id="side-menu"
        aria-label="Open Menu"
      />
      <label htmlFor="side-menu" className={styles.hamb}>
          <span className={styles['hamb-line']}></span>
          <span className={styles['hamb-line']}></span>
          <span className={styles['hamb-line']}></span>
      </label>

      <div className={styles.nav}>
        <label className={styles.close} htmlFor="side-menu">
            X
        </label>
        <ul className={styles.menu}>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default NavBar;
