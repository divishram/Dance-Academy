import React from "react";
import styles from "./HomeIntro.module.css"

const HomeIntro: React.FC = () => {
  return (
    <main className={styles['home-Intro']}>
      <div className={styles['home-Intro_Inner']}>
        <h1 className={styles['title']}>Learn How To Dance</h1>
        <button type="button" className={styles['cta-button']}>
          Book Class Today
        </button>
      </div>
    </main>
  );
};

export default HomeIntro;