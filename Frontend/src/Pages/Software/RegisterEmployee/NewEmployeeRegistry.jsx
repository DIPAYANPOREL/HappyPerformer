import React from "react";
import styled from "styled-components";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";
import EmployeeAddForm from "../../../Components/Software Components/RegisterEmployess/EmployeeAddForm";

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  width: 100%;
`;

const Container = styled.div``;
const NewEmployeeRegistry = () => {
  return (
    <Container>
      <Nav />
      <EmployeeContainer>
        <h1>New Employee Registry</h1>
        <EmployeeAddForm />
      </EmployeeContainer>
      <Footer />
    </Container>
  );
};

export default NewEmployeeRegistry;
