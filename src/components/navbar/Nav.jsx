import React from "react";
import { Logo, row } from "../../assets/index";

export const Nav = () => {
  return (
    <nav className="text-white fixed top-0 container">
      <div className="flex h-[100px] flex-row justify-between items-center gap-2">
        {/* left  */}
        <div className="flex flex-row items-center justify-center w-max">
          <div className="w-10 h-10">
            <img className="w-full h-full" src={Logo} alt="" />
          </div>
          <p className="text-2xl">TJIGRIS</p>
        </div>

        <input
          className="px-3 py-1 rounded-full bg-white/10 outline-none w-full"
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
                <div className="w-[1.2rem]">
                  <img className="h-full w-full" src={row} alt="" />
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Explore
                <div className="w-[1.2rem]">
                  <img className="h-full w-full" src={row} alt="" />
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Pages
                <div className="w-[1.2rem]">
                  <img className="h-full w-full" src={row} alt="" />
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Activity
                <div className="w-[1.2rem]">
                  <img className="h-full w-full" src={row} alt="" />
                </div>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row justify-center items-center gap-1"
              >
                Elements
                <div className="w-[1.2rem]">
                  <img className="h-full w-full" src={row} alt="" />
                </div>
              </a>
            </li>
          </ul>

          <button className="bg-[#8162de] px-3 py-1 rounded-full w-max">
            Connect Wallet
          </button>
        </div>
      </div>

      <div className=""></div>
    </nav>
  );
};
