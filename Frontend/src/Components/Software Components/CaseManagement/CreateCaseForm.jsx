import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 40%;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: #6c63ff;
    outline: none;
  }
`;

const CaseSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: #6c63ff;
    outline: none;
  }
`;

const Option = styled.option``;

const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #463aff;
  }
`;

const CreateCaseForm = () => {
  return (
    <Container>
      <Heading>Create Case</Heading>
      <Form>
        <Label>Create For</Label>
        <Input />
        <Label>Case Title</Label>
        <Input />
        <Label>Case Type</Label>
        <CaseSelect>
          <Option>Benefits</Option>
          <Option>Travel And Expense</Option>
          <Option>Compensation and Payroll</Option>
        </CaseSelect>
        <Label>Detailed Description</Label>
        <Input />
        <Button>Create Case</Button>
      </Form>
    </Container>
  );
};

export default CreateCaseForm;
