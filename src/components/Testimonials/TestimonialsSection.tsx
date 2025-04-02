import React from "react";
import Testimonial from "./Testimonial";
import styles from "./Testimonials.module.css";


interface TestimonialData {
  imageSrc: string;
  altText: string;
  quote: string;
  name: string;
  imageWidth: number;
  id        : number;
}

const TestimonailsSection: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      imageSrc: "images/person1.webp",
      altText: "Person 1",
      quote:"This dance class is amazing! I've learned so much and had a great time.",
      name: "Sahar",
      imageWidth: 90,
      id: 1
    },
    {
      imageSrc: "images/person2.webp",
      altText: "Person 2",
      quote:"The instructors are very professional and friendly. Highly recommend!",
      name: "Jane Smith",
      imageWidth: 50,
      id: 2
    },
    {
      imageSrc: "images/person3.webp",
      altText: "Person 3",
      quote:"I've improved my dancing skills significantly since joining these classes.",
      name: "Alice Johnson",
      imageWidth: 90,
      id: 3
    },
  ];

  return (
    <section className={styles['testimonials']}>
        <h2 className={styles['testimonials-text']}>Testimonials</h2>
        {testimonials.map((testimonial, id) => (
            <Testimonial
                key={id}
                imageSrc={testimonial.imageSrc}
                altText={testimonial.altText}
                quote={testimonial.quote}
                name={testimonial.name}
                imageWidth={testimonial.imageWidth}
            / >
        ))}

    </section>
  )
};

export default TestimonailsSection
