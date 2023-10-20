import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Gallery from "./components/Gallery";
import MissionVision from "./components/MissionVision";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "../Routers/PublicRoutes";
import { Component } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter  } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Project />
      <Gallery></Gallery>
      <MissionVision></MissionVision>
      <Contact />
      <Footer /> */}
      
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<LandingPage />}></Route>
          {PublicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
