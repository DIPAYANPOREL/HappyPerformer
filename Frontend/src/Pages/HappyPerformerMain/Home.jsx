import React from "react";
import styled from "styled-components";
import GrowthGen from "../../Components/HappyPerformerM/GrowthGen";
import Navbar from "../../Components/HappyPerformerM/Navbar";

const Container = styled.div`
  background-color: white;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <GrowthGen />
      Mai hoon gatotkatch
    </Container>
  );
};

export default Home;
