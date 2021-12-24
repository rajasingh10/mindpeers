import React from "react";
import "../styles/ScheduleLeft.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ScheduleLeftCard from "./ScheduleLeftCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CreateIcon from "@mui/icons-material/Create";
import allActions from "../../redux/actions";
import { useDispatch } from "react-redux";

const ScheduleLeft = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="schedule_left"
      onClick={() => dispatch(allActions.sidebarActions.setSidebarFalse())}
    >
      <div className="heading">
        <h2>Schedule</h2>
        <p>
          <span>Aug 5,2021</span>
          <ArrowDropDownIcon />
        </p>
      </div>
      <div className="navbar">
        <p className="active_nav">Recent Added</p>
        <p>In Progress</p>
        <p>In Review</p>
        <p>Completed</p>
      </div>
      <ScheduleLeftCard
        logo="../../images/template_logo.png"
        name="Illustration Templates"
        timing="9:00 AM - 4:00 PM"
        peoples={[1, 2, 3]}
        bg={1}
      />
      <ScheduleLeftCard
        logo="../../images/ui_logo.png"
        name="UI Design"
        timing="4:00 PM - 5:00 PM"
        peoples={[1, 2]}
        bg={0}
      />
      <ScheduleLeftCard
        logo="../../images/ux_logo.png"
        name="UX Design"
        timing="5:00 PM - 6:00 PM"
        peoples={[1, 2, 3]}
        bg={0}
      />
      <div className="bottom">
        <div className="bottom_heading">
          <h3>Project Progress</h3>
          <MoreHorizIcon />
        </div>
        <div className="overview">
          <div className="overview_heading">
            <h4>Illustration Template</h4>
            <div className="overview_heading_left">
              <ArrowCircleDownIcon />
              <CreateIcon />
            </div>
          </div>
          <div className="overview_content">
            <img src="../../images/progress.png" alt="" />
            <div className="overview_content_items">
              <div className="items">
                <span className="items_color1"></span>
                <div className="item">
                  <h4>Cartoon Illustration</h4>
                  <p>Modern StoryTelling</p>
                </div>
              </div>
              <div className="items">
                <span className="items_color2"></span>
                <div className="item">
                  <h4>Cartoon Illustration</h4>
                  <p>Modern StoryTelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleLeft;
