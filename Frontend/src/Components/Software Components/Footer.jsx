import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  background-color: #8576ff;
  color: white;
`;
const Footer = () => {
  return (
    <Container>© All rights reserved. Made by Salahkaar Consultants.</Container>
  );
};

export default Footer;
