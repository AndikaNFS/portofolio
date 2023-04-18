import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import HeroSection from "./HomePage/HeroSection";
import HeaderSection from "./HomePage/HeaderSection";
import Features from "./HomePage/Features";
import Skills from "./HomePage/Skills";
import Contact from "../parts/Contact";

export default function HomePages() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <HeroSection />
        <HeaderSection />
        <Features />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
