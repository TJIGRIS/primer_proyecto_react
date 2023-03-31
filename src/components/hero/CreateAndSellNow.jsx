import React from "react";

export const CreateAndSellNow = ({ icon, titulo, texto }) => {
  return (
    <article className="relative flex flex-col justify-center gap-3 bg-[#282b30] box-shadow2 p-6 h-[20rem] overflow-hidden">
      <div className="bg-[#8760da] w-16 h-16 rounded-xl p-2">
        <img src={icon} alt="" />
      </div>

      <h3 className="text-xl text-white">{titulo}</h3>
      <p className="text-white/40">{texto}</p>

      <div className="absolute opacity-10 bottom-0 right-0 w-[20rem] translate-x-[30%] translate-y-[30%]">
        <img className="w-full" src={icon} alt="" />
      </div>
    </article>
  );
};
