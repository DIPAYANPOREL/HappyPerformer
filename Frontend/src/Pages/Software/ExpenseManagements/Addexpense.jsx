import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const InnerContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 10px;
  font-size: 16px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Heading = styled.h2`
  margin-bottom: 30px; 
  text-align: center;
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
`;

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const payload = {
      expense: amount,
      expensedate: date,
      expenseitm: item,
    };

    axios
      .post("http://127.0.0.1:8000/AddExpenses", payload)
      .then((response) => {
        console.log("Expense added successfully:", response.data);
        setAmount("");
        setDate("");
        setItem("");
        alert("Expense added successfully!");
      })
      .catch((error) => {
        console.error("There was an error adding the expense!", error);
        setError("There was an error adding the expense. Please try again.");
      });
  };

  return (
    <Layout>
      <Header title="Add Expense" />
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
              required
            />
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <Label htmlFor="item">Item</Label>
            <Input
              type="text"
              id="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Button type="submit">Add Expense</Button>
          </Form>
        </InnerContainer>
      </OuterContainer>
    </Layout>
  );
};

export default AddExpense;
