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
      speed={1000}
      grabCursor={true}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      }}
      className="mySwiper6"
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