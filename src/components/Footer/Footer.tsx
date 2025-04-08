import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className={styles["footer-content"]}>
        <h3>About Us</h3>
        <p>
          We offer professional dance classes to help you improve your dance
          skills
        </p>
      </div>

      <div className={`${styles['footer-section']} ${styles['links']}`}>
        <h3>Quick Links</h3>
        <ul>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blog</a></li>
        </ul>
      </div>

      <div className={`${styles['footer-section']} ${styles['contact']}`}>
        <h3>Contact Us</h3>
        <p>Email: divish@dance.com</p>
        <p>Phone: +123 456 7890</p>
        <div className={styles['socials']}>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>

        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>&copy; 2025 Divish Ram Dance.</p>
      </div>
    </footer>
  );
};

export default Footer;
