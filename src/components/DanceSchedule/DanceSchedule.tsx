import React from "react";
import styles from "./DanceSchedule.module.css";

interface ClassSchedule {
  day: string;
  time: string;
  type: string;
}

interface DanceScheduleProps {
  schedule: ClassSchedule[];
}
// todo test. What if no classes in DB or array. Check and return nothing
const DanceSchedule: React.FC<DanceScheduleProps> = ({ schedule }) => {
  return (
    <div className={styles["dance-schedule"]}>
      <h2>Dance Class Schedule</h2>
      <div className={styles["table-wrapper"]}>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((classInfo, index) => (
              <tr key={index}>
                <td>{classInfo.day}</td>
                <td>{classInfo.time}</td>
                <td>{classInfo.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DanceSchedule;
