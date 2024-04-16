import React from "react";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import GeniueSection from "../../Components/HomePage/GeniueSection";
import TodoAgenda from "../../Components/HomePage/TodoAgenda";
import Ecosystem from "../../Components/HomePage/Ecosystem";
import GetInTouch from "../../Components/HomePage/GetInTouch";
import FooterHome from "../../Components/HomePage/FooterHome";

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
