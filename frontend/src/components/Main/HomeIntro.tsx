import React from "react";
import styles from "./HomeIntro.module.css"
import {useModal} from "./hooks/useModal";
import BookClassModal from "./BookClassModal";

const HomeIntro: React.FC = () => {
  const modal = useModal();

  return (
    <main className={styles['home-Intro']}>
      <div className={styles['home-Intro_Inner']}>
        <h1 className={styles['title']}>Learn How To Dance</h1>
        <button onClick={modal.open} type="button" className={styles['cta-button']}>
          Book Class Today
        </button>
      </div>
      <BookClassModal isOpen={modal.isOpen} onClose={modal.close}/>
    </main>
  );
};

export default HomeIntro;