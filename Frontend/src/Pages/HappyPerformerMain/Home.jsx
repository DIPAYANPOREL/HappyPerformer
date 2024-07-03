import React from "react";
import styled from "styled-components";
import Cakewalk from "../../Components/HappyPerformerM/Cakewalk";
import GetInTouch from "../../Components/HappyPerformerM/GetInTouch";
import GrowthGen from "../../Components/HappyPerformerM/GrowthGen";
import SideInfo from "../../Components/HappyPerformerM/SideInfo";
import Navbar from "../../Components/HappyPerformerM/Navbar";
import Footer from "../../Components/HappyPerformerM/Footer";

const Container = styled.div`
  background-color: white;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <GrowthGen />
      {/* Section 2 */}
      {/* Section 3 */}
      <Cakewalk />
      <SideInfo />
      <GetInTouch />
      <Footer />
      {/* Footer and info section */}
    </Container>
  );
};

export default Home;
