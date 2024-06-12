import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const WhiteContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 1200px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ExpenseChartContainer = styled.div`
  width: 100%;
`;

const data = {
  labels: ["2024-06-10"],
  datasets: [
    {
      label: "Expense by Month (Whole Year)",
      data: [6.0],
      backgroundColor: "blue",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 7,
      min: 5,
      stepSize: 0.2,
    },
  },
};

const ExpenseReports = () => {
  return (
    <Layout>
      <Header title="Expense Report" />
      <Container>
        <WhiteContainer>
          <Heading>Full Expense Reports</Heading>
          <ExpenseChartContainer>
            <Bar data={data} options={options} />
          </ExpenseChartContainer>
        </WhiteContainer>
      </Container>
    </Layout>
  );
};

export default ExpenseReports;
