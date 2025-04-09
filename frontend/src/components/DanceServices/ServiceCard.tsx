import React from "react";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className={styles['service-card']}>
      <img
        className={styles.image}
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceCard;
