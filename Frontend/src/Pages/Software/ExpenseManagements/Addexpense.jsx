import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const InnerContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      amount,
      date,
      item,
    };

    axios
      .post("/api/add-expense", payload)
      .then((response) => {
        console.log("Expense added successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error adding the expense!", error);
      });
  };

  return (
    <Layout>
      <OuterContainer>
        <InnerContainer>
          <Heading>Add Expense</Heading>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="amount">Enter Amount (Rs)</Label>
            <Input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Label htmlFor="item">Item</Label>
            <Input
              type="text"
              id="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <Button type="submit">Add Expense</Button>
          </Form>
        </InnerContainer>
      </OuterContainer>
    </Layout>
  );
};

export default AddExpense;
