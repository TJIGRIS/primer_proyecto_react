import React from "react";
import {bgwomen} from '../../assets/index';

export const Header = () => {
  return (
    <section className="grid grid-cols-2">
      {/* left */}
      <div className="">
        <div className="">
          <p className="">GIGALAND MARKET</p>
          <h1>Create, sell or collect digital items</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            similique eligendi earum minus temporibus perspiciatis hic
            voluptatum sunt molestiae laboriosam.
          </p>
          <button>Explore</button>
        </div>

        <div className="">
          <article className="">
            <p>94217</p>
            <p>Collectsfs</p>
          </article>

          <article className="">
            <p>27K</p>
            <p>Atucessfs</p>
          </article>

          <article className="">
            <p>4k</p>
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
