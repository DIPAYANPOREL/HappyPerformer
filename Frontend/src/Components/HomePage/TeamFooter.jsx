import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  height: 100%;
  padding: 50px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
`;

const TeamFooter = () => {
  return <Container>&copy; Salahkaar Consultants</Container>;
};

export default TeamFooter;
