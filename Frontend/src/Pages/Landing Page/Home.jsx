import React from "react";

import Ecosystem from "../../Components/HomePage/Ecosystem";
import FooterHome from "../../Components/HomePage/FooterHome";
import GeniueSection from "../../Components/HomePage/GeniueSection";
import GetInTouch from "../../Components/HomePage/GetInTouch";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import TodoAgenda from "../../Components/HomePage/TodoAgenda";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <GeniueSection />
      <TodoAgenda />
      <Ecosystem />
      <GetInTouch />
      <FooterHome />
    </>
  );
};

export default Home;
