import React from "react";

export const NewItems = ({
  icon,
  foto,
  title,
  precio,
  lugar,
  texto,
  iconHeart,
  numeroHeart,
}) => {
  return (
    <article className="">
      <div className="px-8 flex flex-col">
        <div className="w-14 h-14 rounded-full overflow-hidden translate-y-2 bg-[#212429] p-2">
          <img src={icon} alt="" />
        </div>

        <div className="w-full h-[16rem] rounded-xl overflow-hidden">
          <img src={foto} alt="" />
        </div>
      </div>

      <div className="pt-8 px-4 text-white flex flex-col gap-2">
        <h3 className="text-xl">{title}</h3>
        <p>
          <span className="text-white/50">{precio}</span> / {lugar}
        </p>

        <div className="flex justify-between">
          <a className="text-[#9788eb]" href="#">{texto}</a>
          <div className="flex gap-1 items-center">
            <img src={iconHeart} alt="" />
            <p>{numeroHeart}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
