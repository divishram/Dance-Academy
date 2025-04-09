import React from "react";
import styles from "./Instructor.module.css";

const Instructor: React.FC = () => {
  return (
    <section className={styles["instructors"]}>
      <h2>Meet our Instructor</h2>
      <div className={styles["instructor-cards"]}>
        <div className={styles["instructor-card"]}>
          <img
            src="images/divish_ram.webp"
            alt="Car selfie of Divish Ram in blue sherwani"
          />
          <h3>Divish Ram</h3>
          <p>Divish is a dancer with over 3 years of experience in various dance styles.</p>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
