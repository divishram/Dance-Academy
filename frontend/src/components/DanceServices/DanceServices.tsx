import React from "react";
import styles from "./DanceServices.module.css";

const DanceServices: React.FC = () => {
  return (
    <section className={styles["services"]}>
      <h2>Our Services</h2>
      <div className={styles["service-cards"]}>
        <div className={styles["service-card"]}>
          <img
            className={styles.image}
            src="images/bollywood-dance.webp"
            alt="2 Indian women in cultural dance clothing"
            loading="lazy"
          />
          <h3>Bollywood Dance</h3>
          <p>
            Learn the energetic form of Bollywood dance, combining classical
            Indian dance with contemporary moves.
          </p>
        </div>
        <div className={styles["service-card"]}>
          <img
            src="images/persian-dance.webp"
            alt="Persians dancing with traditional clothing. Iranian flag on the right side"
            loading="lazy"
          />
          <h3>Persian Dance</h3>
          <p>Experience the graceful choreography of Persian dance.</p>
        </div>
        <div className={styles["service-card"]}>
          <img
            src="images/kurdish-dance.webp"
            alt="Kurdish woman wearing red clothing with hand on her hip"
            loading="lazy"
          />
          <h3>Kurdish Dance</h3>
          <p>
            Try the unique rhythms of Kurdish dance, a blend of ancient
            traditions and joyful choreography.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DanceServices;
