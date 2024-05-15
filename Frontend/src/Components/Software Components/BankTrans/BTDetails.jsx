import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005b84;
  }
`;

const FormCard = () => {
  const [valueDate, setValueDate] = useState(new Date());
  const [narration, setNarration] = useState("");
  const [debitAccountNumber, setDebitAccountNumber] = useState("");
  const [fileNameStart, setFileNameStart] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Value Date:</Label>
          <DatePicker
            selected={valueDate}
            onChange={setValueDate}
            dateFormat="dd/MM/yyyy"
            customInput={<Input />}
          />
        </FormGroup>
        <FormGroup>
          <Label>Narration:</Label>
          <Input
            type="text"
            value={narration}
            onChange={(e) => setNarration(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Debit Account Number:</Label>
          <Input
            type="text"
            value={debitAccountNumber}
            onChange={(e) => setDebitAccountNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>File Name Start:</Label>
          <Input
            type="text"
            value={fileNameStart}
            onChange={(e) => setFileNameStart(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default FormCard;
