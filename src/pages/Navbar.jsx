import React from "react";
import { Header } from "../components/navbar/Header";
import { Nav } from "../components/navbar/Nav";

export const Navbar = () => {
  return (
    <header className="fondo1">
      <section className="container mx-auto min-h-screen h-[100vh] relative flex flex-col justify-center items-center">
        <Nav />
        <Header />
      </section>
    </header>
  );
};
