import React from "react";
import Hero from "../Hero";
import About from "../About";
import Contact from "../Contact";
import Gallery from "../Gallery";
import Picture from "../Gallery/Picture";
import Hireme from "../Hireme";
import Project from "../Project";
import Profile from "../Profile";
import Skills from "../Skills";
import Services from "../Services";
import SliderComponent from "../SliderComponent";
import Experience from "../Experience";

const LandingPage = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <Hireme></Hireme>
      
      <Experience></Experience>
      <About></About>
     
      <Skills></Skills>
     
      {/* <Contact></Contact> */}
    </div>
  );
};

export default LandingPage;
