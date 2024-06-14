import axios from "axios";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
  box-sizing: border-box;
`;

const WhiteContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const ExpenseChartContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const ExpenseReports = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Expense by Month (Whole Year)",
        data: [],
        backgroundColor: "rgba(0, 123, 255, 0.7)",
        expenseItems: [],
        expenseIds: [],
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchExpenseData();
  }, []);

  const fetchExpenseData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/ExpenseReport");
      const expenses = response.data.expenses;

      const labels = expenses.map((expense) => expense.date);
      const data = expenses.map((expense) => expense.amount);
      const expenseItems = expenses.map((expense) => expense.expense_item);
      const expenseIds = expenses.map((expense) => expense.expense_id);

      setChartData({
        labels,
        datasets: [
          {
            label: "Expense by Month (Whole Year)",
            data,
            backgroundColor: "rgba(0, 123, 255, 0.7)",
            expenseItems,
            expenseIds,
          },
        ],
      });

      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the expense data:", error);
      setError("There was an error fetching the expense data.");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <Container>
          <WhiteContainer>
            <Heading>Loading...</Heading>
          </WhiteContainer>
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container>
          <WhiteContainer>
            <Heading>{error}</Heading>
          </WhiteContainer>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title="Expense Report" />
      <Container>
        <WhiteContainer>
          <Heading>Full Expense Reports</Heading>
          <ExpenseChartContainer>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: Math.max(...chartData.datasets[0].data) + 10, // Dynamic max value
                    stepSize: 10,
                  },
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const index = context.dataIndex;
                        const amount = context.dataset.data[index];
                        const item = context.dataset.expenseItems[index];
                        const id = context.dataset.expenseIds[index];
                        return `Amount: ${amount}, Item: ${item}, ID: ${id}`;
                      },
                    },
                  },
                },
              }}
              height={400}
            />
          </ExpenseChartContainer>
        </WhiteContainer>
      </Container>
    </Layout>
  );
};

export default ExpenseReports;
