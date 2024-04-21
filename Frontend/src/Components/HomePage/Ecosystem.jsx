import React from "react";
import styled from "styled-components";
import Card from "./Card";
import cardData from "./cardData";

const Container = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Heading = styled.h1`
  margin: 20px 50px 2% 50px;
  text-align: center;
`;

const Ecosystem = () => {
  return (
    <>
      <Heading>How HappyPerformer Works?</Heading>
      <Container>
        <Card cardData={cardData} />
      </Container>
    </>
  );
};

export default Ecosystem;
