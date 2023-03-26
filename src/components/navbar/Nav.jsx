import React from "react";
import { Logo, row } from "../../assets/index";

export const Nav = () => {
  return (
    <nav className="text-white">
      <div className="">
        {/* left  */}
        <div className="flex flex-row gap-4">
          <img className="w-16" src={Logo} alt="" />
          <h1>Johan</h1>
          <input type="text" />
        </div>

        {/* right  */}
        <div className="">
          <ul>
            <li>
              <a href="#"><img src={row} alt="" /></a>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className=""></div>
    </nav>
  );
};
