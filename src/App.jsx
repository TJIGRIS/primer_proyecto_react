import React from "react";
import { Footer } from "./pages/Footer";
import { Hero } from "./pages/Hero";
import { Navbar } from "./pages/Navbar";

function App() {
  return (
    <div className="App bg-[#212429] overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
