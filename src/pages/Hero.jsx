import React from "react";
import { HeroEmpresas } from "../components/hero/HeroEmpresas";
import { NewItems } from "../components/hero/NewItems";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import '../styles.css'

// import required modules
import { Navigation } from "swiper";

export const Hero = () => {
  return (
    <section className="box-shadow">
      <div className="container mx-auto">
        {/* heroEmpresas  */}
        <div className="grid grid-cols-6 place-content-between gap-8">
          <HeroEmpresas />
        </div>

        {/* NewItems  */}
        <div className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            
              <SwiperSlide>1</SwiperSlide>
            
              <SwiperSlide>1</SwiperSlide>
            
              <SwiperSlide>1</SwiperSlide>
            
              <SwiperSlide>1</SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};
