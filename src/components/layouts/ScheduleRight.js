import React from "react";
import "../styles/ScheduleRight.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import ScheduleRightCard from "./ScheduleRightCard";
import allActions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const ScheduleRight = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="schedule_right"
      onClick={() => dispatch(allActions.sidebarActions.setSidebarFalse())}
    >
      <div className="schedule_right_header">
        <div className="schedule_right_search">
          <SearchOutlinedIcon />
          <input placeholder="Search" />
        </div>
        <Avatar alt="Remy Sharp" src="../../images/avatar.jpg" />
      </div>
      <div className="meeting">
        <div className="meeting_header">
          <h2>Meeting</h2>
          <p>
            <span>Aug 3,2021-Aug 7,2021</span>
            <ArrowDropDownIcon />
          </p>
        </div>
        <div className="meeting_calendar">
          <div className="calendar">
            <div className="calendar_date">
              <h4>Mon</h4>
              <h3>3</h3>
            </div>
            <p>9:00 AM</p>
            <p>9:00 AM</p>
            <p>9:00 AM</p>
          </div>
          <div className="calendar">
            <div className="calendar_date">
              <h4>Tue</h4>
              <h3>4</h3>
            </div>
            <p>10:30 AM</p>
            <p>9:00 AM</p>
            <p>___</p>
          </div>
          <div className="calendar">
            <div className="calendar_date">
              <h4>Wed</h4>
              <h3>5</h3>
            </div>
            <p>9:00 AM</p>
            <p>9:00 AM</p>
            <p>9:00 AM</p>
          </div>
          <div className="calendar active_calendar">
            <div className="calendar_date active_date">
              <h4>Thu</h4>
              <h3>6</h3>
            </div>
            <p className="active_time">9:00 AM</p>
            <p className="active_time">___</p>
            <p className="active_time">9:00 AM</p>
          </div>
          <div className="calendar">
            <div className="calendar_date">
              <h4>Fri</h4>
              <h3>7</h3>
            </div>
            <p>9:00 AM</p>
            <p>9:00 AM</p>
            <p>9:00 AM</p>
          </div>
        </div>
      </div>
      <div className="files">
        <div className="meeting_header">
          <h2>Files</h2>
          <p>
            <span>View all</span>
            <ArrowForwardTwoToneIcon />
          </p>
        </div>
        <ScheduleRightCard
          logo="../../images/ui_logo.png"
          name="User flow.fig"
          timing="Aug 5,2021 at 9:50 AM"
          size="0,6 KB"
        />
        <ScheduleRightCard
          logo="../../images/ui_logo.png"
          name="User flow.fig"
          timing="Aug 5,2021 at 9:50 AM"
          size="0,6 KB"
        />
        <ScheduleRightCard
          logo="../../images/ui_logo.png"
          name="User flow.fig"
          timing="Aug 5,2021 at 9:50 AM"
          size="0,6 KB"
        />
      </div>
    </div>
  );
};

export default ScheduleRight;
