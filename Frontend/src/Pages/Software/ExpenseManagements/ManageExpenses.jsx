import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const OuterContainer = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px;
  width: 100%;
  max-width: 1200px; /* Adjust max-width as per your design */
  margin: 20px auto;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ActionButton = styled(Button)`
  margin-right: 5px;
`;

const PrintButton = styled(Button)`
  display: block;
  margin: 20px auto;
`;

const ManageExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios
      .get("/api/expenses")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  };

  const handleEditExpense = (expenseId) => {
    // Implement edit functionality
  };

  const handleDeleteExpense = (expenseId) => {
    // Implement delete functionality
  };

  return (
    <Layout>
      <OuterContainer>
        <InnerContainer>
          <Heading>Manage Expenses</Heading>
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Expense Item</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={expense.id}>
                  <Td>{index + 1}</Td>
                  <Td>{expense.date}</Td>
                  <Td>{expense.amount}</Td>
                  <Td>{expense.item}</Td>
                  <Td>
                    <ActionButton onClick={() => handleEditExpense(expense.id)}>
                      Edit
                    </ActionButton>
                    <ActionButton
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      Delete
                    </ActionButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PrintButton>Print</PrintButton>
        </InnerContainer>
      </OuterContainer>
    </Layout>
  );
};

export default ManageExpenses;
