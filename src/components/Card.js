import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKH81ub89GqBxmucB679cdqzyqGpEgC7Tcg&s"
          alt="img"
        />
      </div>
      <div className="card-text">
        <h2>{item.name}</h2>
        <h4>{item.description}</h4>
      </div>
    </div>
  );
};

export default Card;
