import React from "react";
import "../CSS/Card.scss";
import monumentImg from "../assets/mapsLogo.png";

export default function Card() {
  return (
    <div className="Card">
      <div
        className="Card-img"
        style={{
          backgroundImage: `url(
            "https://castellitoscani.com/image/prato/prato03.jpg"
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="Card-info">
        <h1>Nome monumento</h1>
        <h3>Indirizzo</h3>
        <div className="Card-button">
          <img src={monumentImg} alt="" />
        </div>
      </div>
    </div>
  );
}
