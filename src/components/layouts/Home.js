import React, { useState } from "react";
import "../styles/Home.css";
import Schedule from "./Schedule";
import Sidebar from "./Sidebar";
import HeaderSlider from "./HeaderSlider";

const Home = () => {
  return (
    <div className="Home">
      <HeaderSlider />
      <div className="home">
        <Sidebar />
        <Schedule />
      </div>
    </div>
  );
};

export default Home;
