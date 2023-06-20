import React from "react";
import { Data } from "../helpers/Data";
import "../styles/Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((item) => {
          const { id, name, image, content, price } = item;
          return (
            <div className="menuItem" key={id}>
              <div
                className="menuImg"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="menuInfo">
                <div className="menuTitle">
                  <h2>{name}</h2>
                  <p>{content}</p>
                </div>
                <div className="menuPrice">
                  <p>{price} TL</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
