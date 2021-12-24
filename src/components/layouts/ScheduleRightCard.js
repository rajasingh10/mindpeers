import React from "react";
import "../styles/ScheduleRightCard.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const ScheduleRightCard = ({ logo, name, timing, size }) => {
  return (
    <div className="schedule_right_card">
      <div className="c_left">
        <img src={logo} alt="" />
        <div className="title">
          <h4>{name}</h4>
          <p>{timing}</p>
        </div>
      </div>
      <div className="c_right">
        <p>{size}</p>
        <ArrowCircleDownIcon />
      </div>
    </div>
  );
};

export default ScheduleRightCard;
