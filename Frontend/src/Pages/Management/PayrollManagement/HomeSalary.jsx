import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";
import AddSalary from "../../../Components/Software Components/PayRoll/AddSalary";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  flex: 1;
  padding: 20px;
`;

const Bottom = styled.div`
  overflow: auto;
`;

const HomeSalary = () => {
  return (
    <Wrapper>
      <Nav />
      <Header title="Home Salary" />
      <Container>
        <Bottom>
          <HAddSalary />
        </Bottom>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HomeSalary;
