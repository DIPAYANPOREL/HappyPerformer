import React from "react";
import styled from "styled-components";
import CreateCaseForm from "../../../Components/Software Components/CaseManagement/CreateCaseForm";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CreateCase = () => {
  return (
    <Layout>
      <Header title="Create Case" />
      <Container>
        <CreateCaseForm />
      </Container>
    </Layout>
  );
};

export default CreateCase;
