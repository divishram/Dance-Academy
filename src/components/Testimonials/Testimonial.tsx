import React from "react";
import styles from "./Testimonials.module.css";

interface TestimonialProps {
  imageSrc: string;
  altText: string;
  quote: string;
  name: string;
  imageWidth: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  imageSrc,
  altText,
  quote,
  name,
  imageWidth,
}) => {
  return (
    <div className={styles["testimonial-item"]}>
      <img
        src={imageSrc}
        alt={altText}
        className={styles["testimonial-img"]}
        width={imageWidth}
      />
      <p className={styles["testimonial-text"]}>"{quote}"</p>
      <h3 className={styles["testimonial-name"]}>{name}</h3>
    </div>
  );
};

export default Testimonial;
