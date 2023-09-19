import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/HomeComponents/Hero";
import Serve from "../components/HomeComponents/Serve";
import Menu from "../components/HomeComponents/Menu";
import Review from "../components/HomeComponents/Review";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="lg: flex flex-col ">
      <div className="bg-[#fecaca]">
      <NavBar />
      <Hero/>
      </div>
      <Serve/>
      <Menu/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default Home;
