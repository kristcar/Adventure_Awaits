import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these amazing destinations!</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/italy.jpg"
              text="Take a gondola through the beautiful canals of Venice"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="images/germany.jpg"
              text="Visit the castles of Germany"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="images/switzerland.jpg"
              text="Discover the hidden wonders of Switzerland"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/greece.jpg"
              text="Take a cruise through the Greek Islands"
              label="Luxury"
              path="/services"
            />

            <CardItem
              src="images/scotland.jpg"
              text="Explore the Scottish Highlands"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/hawaii.jpg"
              text="Relax in the beautiful Hawaiian islands"
              label="Relaxing"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
