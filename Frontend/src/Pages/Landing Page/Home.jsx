import axios from "axios";
import React from "react";
import Ecosystem from "../../Components/HomePage/Ecosystem";
import FooterHome from "../../Components/HomePage/FooterHome";
import GeniueSection from "../../Components/HomePage/GeniueSection";
import GetInTouch from "../../Components/HomePage/GetInTouch";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import TodoAgenda from "../../Components/HomePage/TodoAgenda";
import Footer from "../../Components/Software Components/Footer";

const Home = () => {
  axios
    .post("http://127.0.0.1:8000/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <NavbarHome />
      <GeniueSection />
      <TodoAgenda />
      <Ecosystem />
      <GetInTouch />
      <FooterHome />
      <Footer />
    </>
  );
};

export default Home;
