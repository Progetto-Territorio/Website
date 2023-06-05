import React from "react";
import "../CSS/ListaMonumenti.scss";
import CardPrato from "../Components/CardPrato";
import { monumentiPrato } from "../assets/monumentiPrato.js";

export default function MonumentiPrato() {
  return (
    <div className="container">
      <h1>Monumenti Prato</h1>
      <div className="card-container">
        {monumentiPrato.map((dati) => {
          return <CardPrato key={Math.random()} data={dati} />;
        })}
      </div>
    </div>
  );
}
