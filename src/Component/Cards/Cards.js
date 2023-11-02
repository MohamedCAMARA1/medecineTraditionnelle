import React from "react";
import "./Cards.css";
import Card from "./Card/Card";
import { cards_content } from "./cards_content";

const Cards = () => {
  return (
    <div className="cards" id="cardsSection">
      {cards_content.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            source={item.url_img}
          />
        );
      })}
    </div>
  );
};

export default Cards;
