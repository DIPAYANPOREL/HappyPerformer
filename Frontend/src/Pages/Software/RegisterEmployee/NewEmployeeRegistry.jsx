import React from "react";
import styled from "styled-components";
import EmployeeAddForm from "../../../Components/Software Components/RegisterEmployess/EmployeeAddForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  width: 100%;
`;
const NewEmployeeRegistry = () => {
  return (
    <Container>
      <h1>New Employee Registry</h1>
      <EmployeeAddForm />
    </Container>
  );
};

export default NewEmployeeRegistry;
