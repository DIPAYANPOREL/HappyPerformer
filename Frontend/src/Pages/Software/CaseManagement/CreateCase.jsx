import React from "react";
import styled from "styled-components";
import CreateCaseForm from "../../../Components/Software Components/CaseManagement/CreateCaseForm";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";

const Container = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  padding: 20px;
`;
const CreateCase = () => {
  return (
    <>
      <Nav />
      <Container>
        <Title>Case Management and stuf</Title>
        <CreateCaseForm />
      </Container>
      <Footer />
    </>
  );
};

export default CreateCase;
