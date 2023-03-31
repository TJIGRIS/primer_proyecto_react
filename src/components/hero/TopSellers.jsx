import React from "react";

export const TopSellers = ({ id, img, nombre, seguidores }) => {
  return (
    <article className="flex flex-row items-start gap-2">
      <div className="text-white/40">{id}.</div>
      <div className="h-[4rem]">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <div className="flex flex-col gap-1 justify-center h-[4rem]">
        <h3 className="text-white">{nombre}</h3>
        <p className="text-white/40">{seguidores}</p>
      </div>
    </article>
  );
};
