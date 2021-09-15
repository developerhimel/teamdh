import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper";
import SliderComp from "./SliderComp";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectCreative]);

export default function HeaderSection() {
  return (
    <Swiper
      speed={500}
      grabCursor={true}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      }}
      className="mySwiper2"
    >
      <SwiperSlide>
        <SliderComp />
      </SwiperSlide>
      <SwiperSlide>
        <SliderComp />
      </SwiperSlide>
      <SwiperSlide>
        <SliderComp />
      </SwiperSlide>
    </Swiper>
  );
}
