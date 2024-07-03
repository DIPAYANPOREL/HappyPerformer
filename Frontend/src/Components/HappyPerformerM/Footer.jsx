import React from "react";
import styled from "styled-components";
import Happy from "../../assets/logo2.png";

const Container = styled.div`
    padding: 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111729;.
    height: 40%;

`;

const LogoContainer = styled.div``;

const Logo = styled.img`
  width: 170px;
  margin-bottom: 6rem;
`;

const Column = styled.ul`
  list-style: none;
  padding: 0;
`;

const Row = styled.li`
  padding: 0.5rem;
  color: white;
  font-size: 1rem;
`;

const RowHeading = styled.h4`
  padding: 0.5rem;
  color: white;
  font-size: 1.1rem;
`;

const Cakewalk = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={Happy} alt="logo" />
      </LogoContainer>
      <Column>
        <RowHeading>Our Company</RowHeading>
        <Row>About Us</Row>
        <Row>Contact Us</Row>
        <Row>Meet the team</Row>
      </Column>
      <Column>
        <RowHeading>For All Demos</RowHeading>
        <Row>Hand-on demo</Row>
        <Row>For all video references</Row>
      </Column>
      <Column>
        <RowHeading>Support System</RowHeading>
        <Row>FAQs</Row>
        <Row>Privacy Policy</Row>
        <Row>Terms & Conditions</Row>
      </Column>
      <Column>
        <RowHeading>Write to Us</RowHeading>
        <Row>Facebook</Row>
        <Row>Gmail</Row>
        <Row>Twitter</Row>
        <Row>LinkedIn</Row>
      </Column>
    </Container>
  );
};

export default Cakewalk;
