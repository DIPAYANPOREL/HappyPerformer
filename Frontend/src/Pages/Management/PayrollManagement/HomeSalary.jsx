import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";
import AddSalary from "../../../Components/Software Components/PayRoll/AddSalary";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;

const HomeSalary = () => {
  return (
    <Wrapper>
      <Nav />
      <Header title="Home Salary" />
      <Container>
        <Top>
          <Title>Salary</Title>
        </Top>
        <Bottom>
          <HAddSalary />
        </Bottom>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HomeSalary;
