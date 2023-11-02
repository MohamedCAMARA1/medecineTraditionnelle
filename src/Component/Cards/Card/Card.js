import React from "react";
import "./Card.css";

const Card = ({ title, description, source }) => {
  return (
    <div className="card">
      <img src={source} alt={title} />

      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
