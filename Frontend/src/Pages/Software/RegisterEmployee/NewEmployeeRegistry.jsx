import React from "react";
import styled from "styled-components";
import EmployeeAddForm from "../../../Components/Software Components/RegisterEmployess/EmployeeAddForm";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import Header from "../../../Components/Software Components/Dashboard/Header";

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NewEmployeeRegistry = () => {
  return (
    <Layout>
      <Header title="Add New Employee" />
      <EmployeeContainer>
        <EmployeeAddForm />
      </EmployeeContainer>
    </Layout>
  );
};

export default NewEmployeeRegistry;
