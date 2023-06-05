import React from "react";
import "../CSS/ListaMonumenti.scss";
import CardPratoGenerici from "../Components/CardPratoGenerici";
import { monumentiPratoGenerici } from "../assets/monumentiPratoGenerici.js";

export default function MonumentiPratoGenerici() {
  return (
    <div className="container">
      <h1>Monumenti</h1>
      <div className="card-container">
        {monumentiPratoGenerici.map((dati) => {
          return <CardPratoGenerici key={Math.random()} data={dati} />;
        })}
      </div>
    </div>
  );
}
