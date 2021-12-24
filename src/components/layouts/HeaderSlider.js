import React from "react";
import "../styles/HeaderSlider.css";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Avatar } from "@mui/material";
import allActions from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const HeaderSlider = () => {
  const dispatch = useDispatch();
  return (
    <div className="headerSlider">
      <MenuTwoToneIcon
        onClick={() => dispatch(allActions.sidebarActions.setSidebarTrue())}
        className="burg"
      />
      <div className="headerSliderRight">
        <SearchTwoToneIcon className="searchIcon" />
        <Avatar alt="Remy Sharp" src="../../images/avatar.jpg" />
      </div>
    </div>
  );
};

export default HeaderSlider;
