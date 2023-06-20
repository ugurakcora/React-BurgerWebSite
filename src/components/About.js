import React from "react";
import BannerYeni from "../assets/banneryeni.jpg";
import "../styles/About.css";
const about = () => {
  return (
    <div className="about">
      <div
        className="about__top"
        style={{ backgroundImage: `url(${BannerYeni})` }}
      ></div>
      <div className="about__bottom">
        <h1>HAKKIMIZDA</h1>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamlorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </div>
    </div>
  );
};

export default about;
