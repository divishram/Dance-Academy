import React from "react";
import styles from "./DanceServices.module.css";
import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}


interface ServicesSectionProps {
  services: Service[];
}

const DanceServices: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className={styles['services']}>
      <h2>Our Services</h2>
      <div className={styles['service-cards']}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default DanceServices;
