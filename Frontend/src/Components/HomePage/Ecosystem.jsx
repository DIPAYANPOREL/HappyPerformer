import React from "react";
import styled from "styled-components";
import Card from "./Card";

// Styled components
const Container = styled.div`
  width: 300p;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Ecosystem = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default Ecosystem;
