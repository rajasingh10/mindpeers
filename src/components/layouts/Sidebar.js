import React from "react";
import "../styles/Sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatTwoToneIcon from "@mui/icons-material/ChatTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import allActions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const sidebar = useSelector((state) => state.setSidebar);
  const dispatch = useDispatch();
  return (
    <div
      className={`sidebar ${sidebar.sidebar && "true"}`}
      onClick={() => dispatch(allActions.sidebarActions.setSidebarFalse())}
    >
      <div className="sidebar_top">
        <div className="sidebar_logo">
          <img src="../../images/sidebar_logo.png" alt="" />
        </div>
        <div className="sidebar_top_items">
          <div className="sidebar_item">
            <PersonIcon />
            <p>Profile</p>
          </div>
          <div className="sidebar_item active">
            <EventNoteIcon />
            <p>Schedule</p>
          </div>
          <div className="sidebar_item">
            <BarChartIcon />
            <p>Overview</p>
          </div>
          <div className="sidebar_item">
            <ChatTwoToneIcon />
            <p>Chat</p>
          </div>
          <div className="sidebar_item">
            <SettingsIcon />
            <p>Settings</p>
          </div>
        </div>
      </div>
      <div className="sidebar_bottom">
        <div className="sidebar_item">
          <LogoutIcon />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
