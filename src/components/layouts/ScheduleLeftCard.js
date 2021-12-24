import React from "react";
import "../styles/ScheduleLeftCard.css";
import { AvatarGroup } from "@mui/material";
import { Avatar } from "@mui/material";

const ScheduleLeftCard = ({ logo, name, timing, peoples, bg }) => {
  return (
    <div className={`schedule_left_card ${bg && "bgblack"} `}>
      <div className="card_left">
        <img src={logo} alt="" />
        <div className="title">
          <h4>{name}</h4>
          <p>{timing}</p>
        </div>
      </div>

      <AvatarGroup max={peoples.length} className="card_right">
        {peoples.map(({ item, index }) => (
          <Avatar key={index} alt="Remy Sharp" src="../../images/avatar.jpg" />
        ))}
      </AvatarGroup>
    </div>
  );
};

export default ScheduleLeftCard;
