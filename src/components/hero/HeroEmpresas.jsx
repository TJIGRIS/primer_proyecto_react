import React from "react";
export const HeroEmpresas = ({ img, title, alt }) => {
  return (
    <article className="bg-[#282b30] grid place-items-center p-6 rounded-3xl h-[12rem] box-shadow2">
      <div>
        <img src={img} alt={alt} />
      </div>
      <p className="text-white text-center">{title}</p>
    </article>
  );
};
