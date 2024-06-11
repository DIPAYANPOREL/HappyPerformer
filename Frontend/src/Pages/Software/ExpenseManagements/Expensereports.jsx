import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

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
    <Container>
      <WhiteContainer>
        <Heading>Full Expense Reports</Heading>
        <ExpenseChartContainer>
          <Bar data={data} options={options} />
        </ExpenseChartContainer>
      </WhiteContainer>
    </Container>
  );
};

export default ExpenseReports;
