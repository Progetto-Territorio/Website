import React from "react";
import "../CSS/ListaMonumenti.scss";
import Card from "../Components/Card";
import { monumentiMariani } from "../assets/monumentiMariani.js";

export default function MonumentiMariani() {
  return (
    <div className="container">
      <h1>Culto Mariano</h1>
      <div className="card-container">
        {monumentiMariani.map((dati) => {
          return <Card key={Math.random()} data={dati} />;
        })}
      </div>
    </div>
  );
}
