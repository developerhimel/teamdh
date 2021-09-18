import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";
import SliderComp from "./SliderComp";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

export default function HeaderSection() {
  return (
    <Swiper
      speed={1000}
      grabCursor={true}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      effect={"fade"}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-screen h-auto">
          <SliderComp sliderNo='first' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-auto">
          <SliderComp sliderNo='second' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-screen h-auto">
          <SliderComp sliderNo='third' />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
