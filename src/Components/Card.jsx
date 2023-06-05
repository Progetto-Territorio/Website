import React from "react";
import "../CSS/Card.scss";
import monumentImg from "../assets/mapsLogo.png";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Link to={{ pathname: `/culto_mariano/${data.title}` }} state={{ data }}>
      <div className="card">
        <img src={data.backgroundImage} className="clip-polygon" />
        <div className="content">
          <div className="date">
            <span className="numeric">{new Date().getDate()}</span>
            <span className="month">{monthNames[new Date().getMonth()]}</span>
          </div>
          <div className="info">
            <div className="trip-name">{data.title}</div>
            <span className="trip-contains">
              <span className="trip-address">{data.address}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
