import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const OuterContainer = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px;
  width: 100%;
  max-width: 1200px;
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
  const [isEditing, setIsEditing] = useState(false);
  const [editExpenseId, setEditExpenseId] = useState(null);
  const [editExpenseData, setEditExpenseData] = useState({
    date: "",
    amount: "",
    expense_item: "",
  });

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    axios
      .get("http://127.0.0.1:8000/manage-expenses")
      .then((response) => {
        setExpenses(response.data.expenses);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });
  };

  const handleEditExpense = (expense) => {
    setIsEditing(true);
    setEditExpenseId(expense.expense_id);
    setEditExpenseData({
      date: expense.date,
      amount: expense.amount,
      expense_item: expense.expense_item,
    });
  };

  const handleDeleteExpense = (expenseId) => {
    axios
      .delete(`http://127.0.0.1:8000/manage-expenses?expense_id=${expenseId}`)
      .then((response) => {
        console.log("Expense deleted successfully:", response.data);
        fetchExpenses();
      })
      .catch((error) => {
        console.error("Error deleting expense:", error);
      });
  };

  const handleSaveEdit = () => {
    axios
      .post(
        `http://127.0.0.1:8000/manage-expenses?expense_id=${editExpenseId}`,
        editExpenseData
      )
      .then((response) => {
        console.log("Expense updated successfully:", response.data);
        setIsEditing(false);
        setEditExpenseId(null);
        setEditExpenseData({ date: "", amount: "", expense_item: "" });
        fetchExpenses();
      })
      .catch((error) => {
        console.error("Error updating expense:", error);
      });
  };

  const handlePrint = () => {
    const doc = new jsPDF();
    const tableColumn = ["Date", "Amount", "Expense Item"];
    const tableRows = [];

    expenses.forEach((expense) => {
      const expenseData = [expense.date, expense.amount, expense.expense_item];
      tableRows.push(expenseData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Expense Report", 14, 15);
    doc.save(`expense_report_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  return (
    <Layout>
      <Header title="Manage Expense" />
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
                <tr key={expense.expense_id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    {isEditing && editExpenseId === expense.expense_id ? (
                      <input
                        type="date"
                        value={editExpenseData.date}
                        onChange={(e) =>
                          setEditExpenseData({
                            ...editExpenseData,
                            date: e.target.value,
                          })
                        }
                      />
                    ) : (
                      expense.date
                    )}
                  </Td>
                  <Td>
                    {isEditing && editExpenseId === expense.expense_id ? (
                      <input
                        type="number"
                        value={editExpenseData.amount}
                        onChange={(e) =>
                          setEditExpenseData({
                            ...editExpenseData,
                            amount: e.target.value,
                          })
                        }
                      />
                    ) : (
                      expense.amount
                    )}
                  </Td>
                  <Td>
                    {isEditing && editExpenseId === expense.expense_id ? (
                      <input
                        type="text"
                        value={editExpenseData.expense_item}
                        onChange={(e) =>
                          setEditExpenseData({
                            ...editExpenseData,
                            expense_item: e.target.value,
                          })
                        }
                      />
                    ) : (
                      expense.expense_item
                    )}
                  </Td>
                  <Td>
                    {isEditing && editExpenseId === expense.expense_id ? (
                      <ActionButton onClick={handleSaveEdit}>Save</ActionButton>
                    ) : (
                      <ActionButton onClick={() => handleEditExpense(expense)}>
                        Edit
                      </ActionButton>
                    )}
                    <ActionButton
                      onClick={() => handleDeleteExpense(expense.expense_id)}
                    >
                      Delete
                    </ActionButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <PrintButton onClick={handlePrint}>Download Report</PrintButton>
        </InnerContainer>
      </OuterContainer>
    </Layout>
  );
};

export default ManageExpenses;
