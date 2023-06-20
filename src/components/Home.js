import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../assets/banneryeni.jpg";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${MainPage})` }}>
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
