import React from "react";
import mapsLogo from "../../assets/mapsLogo.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../../CSS/MonumentPage.scss";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { monumentiPrato } from "../../assets/monumentiPrato.js";

export default function MonumentPrato() {
  const { state } = useLocation();
  const dati = state.data;

  const filteredData = monumentiPrato.filter((item) => item.id === dati.id);
  const imgArr = filteredData.map((item) => item.images).flat();

  return (
    <>
      <div
        className="box1"
        style={{
          backgroundImage: `url(${dati.backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="box1-title">
          <h1> {dati.title} </h1>
          <h2> {dati.address} </h2>
        </div>
      </div>
      <div className="box2">
        <p> {dati.description} </p>
        <Link to={dati.maps_link} target="_blank">
          <motion.div
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <img className="img-size" src={mapsLogo} alt="" />
          </motion.div>
        </Link>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="swiper">
        {imgArr.map((imageUrl) => (
          <SwiperSlide key={imageUrl}>
            <img src={imageUrl} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
