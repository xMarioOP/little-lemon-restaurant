import React from "react";
import dishImg from "../icons_assets/Dish icon.svg"

const Card = ({ image, name, cost, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="card-image" src={image} alt={name} />
      </div>
      <div className="card-content">
        <div className="card-Header">
            <div className="card-title">{name}</div>
            <div className="card-cost">${cost}</div>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-order-button">
            <a className="card-order" href="/">Order a delivery</a>
            <img src={dishImg} className="card-button" alt="Dish"/>
        </div>
      </div>
    </div>
  );
};

export default Card;