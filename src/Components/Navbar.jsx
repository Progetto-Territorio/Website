import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import "../CSS/Navbar.scss";
import logo from "../assets/webLogo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isDropVisible, setIsDropVisible] = useState(false);
  let isMobile = false;
  const [mobileOpen, setMobileOpen] = useState(false);

  if (window.screen.width >= 600) {
    isMobile = false;
  } else {
    isMobile = true;
  }

  function dropVisible() {
    setIsDropVisible(!isDropVisible);
  }

  return (
    <>
      {isMobile ? (
        <>
          <div id="webapp_cover">
            <div id="menu_button">
              <input
                type="checkbox"
                id="menu_checkbox"
                onClick={() => setMobileOpen(!mobileOpen)}
                checked={mobileOpen}
              />
              <label htmlFor="menu_checkbox" id="menu_label">
                <div id="menu_text_bar"></div>
              </label>
            </div>
          </div>

          <div className={mobileOpen ? "mobile-nav-open" : "mobile-nav-closed"}>
            <div className="mobileitems">
              <ul>
                <Link to="/" onClick={() => setMobileOpen(!mobileOpen)}>
                  <li>Home</li>
                </Link>

                <Link
                  to="/culto_mariano"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <li>Culto Mariano</li>
                </Link>

                <Link
                  to="/monumenti_prato"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <li>Monumenti Prato</li>
                </Link>

                <Link
                  to="/monumenti"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <li>Monumenti</li>
                </Link>

                <Link
                  to="/video_and_book"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <li>Libro e Video</li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="navbar">
          <div className="nav-logo">
            <h3>PR4TQ</h3>
          </div>
          <div className="nav-items">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>

              <li onMouseEnter={() => setIsDropVisible(true)} id="drop">
                Monumenti
                {isDropVisible && (
                  <>
                    <div className="triangle-up " />
                    <div
                      className="dropdown-menu"
                      onMouseLeave={() => dropVisible()}
                    >
                      <ul className="drop-list">
                        <li className="drop-item">
                          <Link to="/culto_mariano">Culto mariano</Link>
                        </li>

                        <li className="drop-item">
                          <Link to="/monumenti_prato">Monumenti Prato</Link>
                        </li>
                        <li className="drop-item">
                          <Link to="/monumenti">Monumenti</Link>
                        </li>
                        <li className="drop-item">
                          {" "}
                          <Link to="/video_and_book">Libro e Video</Link>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
