import React, { useState } from "react";
import { HeroEmpresas } from "../components/hero/HeroEmpresas";
import { NewItems } from "../components/hero/NewItems";
import { TopSellers } from "../components/hero/TopSellers";
import { HotCollections } from "../components/hero/HotCollections";
import { CreateAndSellNow } from "../components/hero/CreateAndSellNow";

import {
  Image,
  Newitems,
  TopSellerss,
  HotCollectionss,
  CreateAndSellNoww,
} from "../api/Apis";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const Hero = () => {
  const [image, setImage] = useState(Image);
  const [newItems, setnewItems] = useState(Newitems);
  const [topSellers, setTopSelers] = useState(TopSellerss);
  const [hotCollections, setCollections] = useState(HotCollectionss);
  const [createAndSellNow, setcreateAndSellNow] = useState(CreateAndSellNoww);

  return (
    <section className="box-shadow">
      <div className="container mx-auto flex flex-col gap-y-[10rem] sm:p-0 p-4">
        {/* heroEmpresas  */}
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-content-between gap-8">
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
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@0.80": {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              "@1.30": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
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

        {/* NewSellerss */}
        <div className="">
          <h2 className="text-white text-3xl mb-8">Top Sellers</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:place-items-start ">
            {topSellers.map((item) => (
              <TopSellers
                key={item.id}
                id={item.id}
                img={item.img}
                nombre={item.nombre}
                seguidores={item.seguidores}
              />
            ))}
          </div>
        </div>

        {/* HotCollectionss */}
        <div className="">
          <h2 className="text-white text-3xl mb-8">Hot Collections</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="p-5"
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              "@0.80": {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              "@1.30": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {hotCollections.map((item) => (
              <SwiperSlide className="bg-[#282b30] rounded-3xl h-[20rem] box-shadow2 overflow-hidden">
                <HotCollections
                  key={item.id}
                  icon={item.icon}
                  foto={item.foto}
                  title={item.title}
                  texto={item.texto}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Create and Sell Now */}
        <div className="">
          <h2 className="text-white text-3xl mb-8">Hot Collections</h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {createAndSellNow.map((item) => (
              <CreateAndSellNow
                key={item.id}
                icon={item.icon}
                titulo={item.titulo}
                texto={item.texto}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
