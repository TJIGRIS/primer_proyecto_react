import React from "react";
import { bgwomen } from "../../assets/index";

export const Header = () => {
  return (
    <section className="grid grid-cols-2">
      {/* left */}
      <div className="grid gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-[#5b2b6a] text-1xl font-semibold">GIGALAND MARKET</p>
          <h1 className="text-[#fff] text-5xl font-semibold leading-[3.5rem]">
            Create, sell or collect digital items
          </h1>
          <p className="text-[#cecece80]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            similique eligendi earum minus temporibus perspiciatis hic
            voluptatum sunt molestiae laboriosam.
          </p>
          <button className="bg-[#8669e1] w-max mt-6 px-12 py-2 rounded-full text-white">Explore</button>
        </div>

        <div className="text-white flex flex-row justify-between items-center">
          <article>
            <p className="text-3xl font-semibold">94217</p>
            <p>Collectsfs</p>
          </article>

          <article>
            <p className="text-3xl font-semibold">27K</p>
            <p>Atuces</p>
          </article>

          <article>
            <p className="text-3xl font-semibold">4k</p>
            <p>NTF Artist</p>
          </article>
        </div>
      </div>

      {/* right */}
      <div className="">
        <div className="relative">
          <div className="absolute">
            <img src={bgwomen} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
