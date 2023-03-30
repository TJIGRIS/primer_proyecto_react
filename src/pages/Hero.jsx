import React from "react";
import { HeroEmpresas } from "../components/hero/HeroEmpresas";
import { NewItems } from "../components/hero/NewItems";


export const Hero = () => {
  return (
    <section className="box-shadow">
      <div className="container mx-auto">
        {/* heroEmpresas  */}
        <div className="grid grid-cols-6 place-content-between gap-8">
          <HeroEmpresas />
        </div>

        {/* NewItems  */}
        <div className="">
          
        </div>
      </div>
    </section>
  );
};
