import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import HeroSection from "./HomePage/HeroSection";
import AboutMe from "./HomePage/AboutMe";
import Features from "./HomePage/Features";
import Skills from "./HomePage/Skills";
import Contact from "../parts/Contact";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";

export default function HomePages(props) {
  useScrollAnchor();

  return (
    <>
      <div className="bg-white">
        <Header />
        <HeroSection />
        <AboutMe />
        <Features />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
