import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import styled from "styled-components";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
    font-size: 0.9em;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 18px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
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

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
`;

const BTDetails = () => {
  const { month } = useParams();
  const [valueDate, setValueDate] = useState(new Date());
  const [narration, setNarration] = useState("");
  const [debitAccountNumber, setDebitAccountNumber] = useState("");
  const [fileNameStart, setFileNameStart] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("month", month);
    formData.append("valuedate", valueDate.toISOString().split("T")[0]);
    formData.append("narration", narration);
    formData.append("debitac", debitAccountNumber);
    formData.append("filename", fileNameStart);

    axios
      .post(`http://127.0.0.1:8000/BankTransferUpdate/?month=${month}`, formData)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Value Date:</Label>
          <DatePicker
            selected={valueDate}
            onChange={setValueDate}
            dateFormat="yyyy-MM-dd"
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

export default BTDetails;
