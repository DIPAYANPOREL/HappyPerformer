import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";
import HomeSal from "../../../Components/Software Components/PayRoll/HomeSal";

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
          <HomeSal />
        </Bottom>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HomeSalary;
