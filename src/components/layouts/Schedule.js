import React from "react";
import "../styles/Schedule.css";
import ScheduleLeft from "./ScheduleLeft";
import ScheduleRight from "./ScheduleRight";

const Schedule = () => {
  return (
    <div className="schedule">
      <ScheduleLeft />
      <ScheduleRight />
    </div>
  );
};

export default Schedule;
