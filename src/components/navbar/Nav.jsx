import React from "react";
import { Logo, row } from "../../assets/index";

export const Nav = () => {
  return (
    <nav className="text-white">
      <div className="flex h-[100px] flex-row justify-between items-center font-bold">
        {/* left  */}
        <div className="flex flex-row gap-2 items-center justify-center">
          <img className="w-10 h-10" src={Logo} alt="" />
          <p className="text-2xl">Alvarez</p>
        </div>

        <input
          className="px-3 py-1 rounded-full bg-white/10 outline-none"
          placeholder="search item here"
          type="text"
        />

        {/* right  */}
        <div className="flex flex-row justify-between items-center">
          <ul className="flex flex-row items-center justify-center gap-2">
            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Home
                <img className="w-[22px]" src={row} alt="" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Explore
                <img className="w-[22px]" src={row} alt="" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Pages
                <img className="w-[22px]" src={row} alt="" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Activity
                <img className="w-[22px]" src={row} alt="" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Elements
                <img className="w-[22px]" src={row} alt="" />
              </a>
            </li>
          </ul>

          <button className="bg-[#8162de] px-3 py-1 rounded-full">
            Connect Wallet
          </button>
        </div>
      </div>

      <div className=""></div>
    </nav>
  );
};
