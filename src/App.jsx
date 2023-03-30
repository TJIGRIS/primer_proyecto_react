import React from "react";
import { useState } from "react";
import { Footer } from "./pages/footer";
import { Hero } from "./pages/Hero";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App bg-[#212429]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
