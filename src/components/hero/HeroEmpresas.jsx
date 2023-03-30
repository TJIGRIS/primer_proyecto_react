import React from "react";
import { fox } from "../../assets/index";

export const HeroEmpresas = () => {
  return (
    <article className="bg-[#282b30] grid place-items-center p-6 rounded-3xl h-[12rem] box-shadow2">
      <div>
        <img src={fox} alt="" />
      </div>
      <p>Merasmak</p>
    </article>
  );
};
