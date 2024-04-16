import React from "react";
<<<<<<< HEAD

const Home = () => {
  return <></>;
=======
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
>>>>>>> 21afbc36cb4c21b8907892ea1065816fb7908183
};

export default Home;
