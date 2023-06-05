import React from "react";
import "../CSS/Footbar.scss";
import { UilFacebookF, UilInstagram } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <span>
          Seguici su:
          <UilInstagram />
          <UilFacebookF />
        </span>
      </div>
    </>
  );
}
