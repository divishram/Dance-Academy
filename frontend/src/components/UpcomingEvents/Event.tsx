import React from "react";
import styles from './Events.module.css';

interface EventProps {
    eventName:   string;
    date:        string;
    description: string;
}

const Event: React.FC<EventProps> = ({
    eventName,
    date,
    description
}) => {
    return (
        <div className={styles['event-card']}>
            <h3>{eventName}</h3>
            <p>Date: {date}</p>
            <p>{description}</p>
        </div>
    )
}

export default Event;