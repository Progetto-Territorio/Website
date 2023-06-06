import React from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../CSS/Home.scss";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PR4TQ | Home</title>
      </Helmet>
      <div className="home-container">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="swiper"
        >
          <SwiperSlide>
            <img src={"../src/assets/photos/Gruppo_carceri/bg.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../src/assets/photos/Gruppo_duomo/bg.jpg"} />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"../src/assets/photos/Gruppo_madonna_del_giglio/bg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"../src/assets/photos/Gruppo_soccorso/bg.jpg"} />
          </SwiperSlide>
        </Swiper>

        <p>Frase</p>
      </div>
    </>
  );
}
