import React from "react";
import Event from "./Event";
import styles from "./Events.module.css";

interface EventData {
    event:       string;
    date:        string;
    description: string;
    id:          number;
}

const EventSection: React.FC = () => {
    const events: EventData[] = [
        {
            event: 'Dance Workshop',
            date:   'Nov 1st 2025',
            description: "Join us for an intensive dance workshop with renowned choreographers.",
            id: 1
        },
        {
            event: 'Dance Showcase',
            date:   'Dec 1st 2025',
            description: "Come and watch our students showcase their skills in a spectacular performance.",
            id: 2
        },
        {
            event: 'Christmas Dance Party',
            date:   'Dec 23rd 2025',
            description: "Celebrate Christmas with a fun and festive dance party for all ages!",
            id: 3
        },
    ];

    return (
        <section className={styles['events']}>
            <h2>Upcoming Events</h2>
            <div className={styles['event-cards']}>
                {events.map((element, id) => (
                    <Event
                    key={id}
                    eventName={element.event}
                    date={element.date}
                    description={element.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default EventSection;