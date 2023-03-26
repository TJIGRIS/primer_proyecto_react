import React from "react";
import { Header } from "../components/navbar/Header";
import { Nav } from "../components/navbar/Nav";

export const Navbar = () => {
  return (
    <header className="fondo1">
      <section className="container min-h-screen ">
        <Nav />
        <Header />
      </section>
    </header>
  );
};
