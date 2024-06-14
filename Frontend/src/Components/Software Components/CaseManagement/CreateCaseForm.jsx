import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 90%;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #0077b6;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  resize: vertical;
  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const CaseSelect = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const Option = styled.option``;

const Button = styled.button`
  padding: 0.75rem 2.5rem;
  background-color: #0077b6;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #005f8d;
  }
`;

const CreateCaseForm = () => {
  const [formData, setFormData] = useState({
    createFor: "",
    caseTitle: "",
    caseType: "",
    detailedDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/CreateCase",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("Case created successfully:", response.data);

      setFormData({
        createFor: "",
        caseTitle: "",
        caseType: "",
        detailedDescription: "",
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized request. Please log in.");
        alert("Unauthorized request. Please log in.");
      } else {
        console.error("Error creating case:", error);
        alert("Error creating case. Please try again.");
      }
    }
  };

  return (
    <Container>
      <Heading>Create Case</Heading>
      <Form onSubmit={handleSubmit}>
        <Label>Create For</Label>
        <Input
          name="createFor"
          value={formData.createFor}
          onChange={handleChange}
        />

        <Label>Case Title</Label>
        <Input
          name="caseTitle"
          value={formData.caseTitle}
          onChange={handleChange}
        />

        <Label>Case Type</Label>
        <CaseSelect
          name="caseType"
          value={formData.caseType}
          onChange={handleChange}
        >
          <Option value="">Select a case type</Option>
          <Option value="Benefits">Benefits</Option>
          <Option value="Travel And Expense">Travel And Expense</Option>
          <Option value="Compensation and Payroll">
            Compensation and Payroll
          </Option>
        </CaseSelect>

        <Label>Detailed Description</Label>
        <TextArea
          name="detailedDescription"
          rows="4"
          value={formData.detailedDescription}
          onChange={handleChange}
        />

        <Button type="submit">Create Case</Button>
      </Form>
    </Container>
  );
};

export default CreateCaseForm;
