import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import { https } from "../axios";
import Card from "./Card";

function Couresel() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    https
      .get(
        `/markets?vs_currency=USD&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
      )
      .then((response) => {
        setCryptos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={"hero text-white"}>
      <h1 className="text-[#87CEEB] text-[60px] font-bold text-center pt-[45px]">
        CRYPTOFOLIO WATCH LIST
      </h1>
      <p className="text-[#A9A9A9] font-medium text-[14px] text-center">
        Get all the Info regarding your favorite Crypto Currency
      </p>
      <div className="mx-auto pt-[50px] ml-[60px] flex ">
        <Swiper
          slidesPerView={4}
          spaceBetween={-100}
          freeMode={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {cryptos.length > 0 &&
            cryptos.map((crypto, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card crypto={crypto}></Card>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default Couresel;
