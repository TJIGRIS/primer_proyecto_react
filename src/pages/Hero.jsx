import React, { useState } from "react";
import { HeroEmpresas } from "../components/hero/HeroEmpresas";
import { NewItems } from "../components/hero/NewItems";
import { Image, Newitems } from "../api/Apis";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const Hero = () => {
  const [image, setImage] = useState(Image);
  const [newItems, setnewItems] = useState(Newitems);

  return (
    <section className="box-shadow">
      <div className="container mx-auto flex flex-col gap-y-[10rem]">
        {/* heroEmpresas  */}
        <div className="grid grid-cols-6 place-content-between gap-8">
          {image.map((item) => (
            <HeroEmpresas
              key={item.id}
              img={item.img}
              title={item.title}
              alt={item.alt}
            />
          ))}
        </div>

        {/* NewItems  */}
        <div className="">
          <h2 className="text-white text-3xl mb-8">New Items</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="p-5"
          >
            {newItems.map((item) => (
              <SwiperSlide className="bg-[#282b30] rounded-3xl h-[30rem] box-shadow2 overflow-hidden">
                <NewItems
                  key={item.id}
                  icon={item.icon}
                  foto={item.foto}
                  title={item.title}
                  precio={item.precio}
                  lugar={item.lugar}
                  texto={item.texto}
                  iconHeart={item.iconHeart}
                  numeroHeart={item.numeroHeart}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
