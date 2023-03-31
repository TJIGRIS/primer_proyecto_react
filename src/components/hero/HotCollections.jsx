import React from "react";

export const HotCollections = ({ foto, icon, title, texto }) => {
  return (
    <article>
      <div className="relative h-[12rem]">
        <img className="w-full h-full object-cover" src={foto} alt="" />
        <div className="bg-[#212429] w-16 h-16 absolute z-20 border-[.3rem] rounded-full overflow-hidden top-[65%] left-[50%] translate-x-[-50%] translate-y-[50%]">
          <img src={icon} alt="" />
        </div>
      </div>

      <div className="flex flex-col h-[8rem] items-center justify-center">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-white/40">{texto}</p>
      </div>
    </article>
  );
};
