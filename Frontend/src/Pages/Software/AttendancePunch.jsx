import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../../Components/Software Components/Dashboard/Header";
import Layout from "../../Components/Software Components/Dashboard/Layout";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  #root {
    height: 100%;
  }
`;

const AttendanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AttendanceBox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const DateTime = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 20px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  margin: 7px;
  width: 70%;
`;

const Error = styled.p`
  color: red;
  font-size: 14px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const AttendancePunch = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const loggedInUserEmail = "loggedinuser@example.com"; // Mock logged-in user's email

  // Update dateTime every second
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = (type) => {
    const emailInput = document.getElementById("employee-email");
    const emailValue = emailInput.value.trim();

    if (!emailValue) {
      alert("Enter your email ID");
      return;
    }

    if (emailValue !== loggedInUserEmail) {
      alert("You can only mark your own attendance");
      return;
    }

    console.log(
      `Employee: ${emailValue}, Type: ${type}, DateTime: ${dateTime}`
    );
    // You can add your attendance marking logic here
  };

  return (
    <>
      <Layout>
        <Header title="Attendance" />
        <GlobalStyle />
        <AttendanceContainer>
          <AttendanceBox>
            <DateTime>
              {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
            </DateTime>
            <InputGroup>
              <Label htmlFor="employee-email">Enter Employee Email:</Label>
              <br />
              <Input type="email" id="employee-email" required />
            </InputGroup>
            <div>
              <Button onClick={() => handleButtonClick("In AM")}>In AM</Button>
              <Button onClick={() => handleButtonClick("Out AM")}>
                Out AM
              </Button>
              <Button onClick={() => handleButtonClick("In PM")}>In PM</Button>
              <Button onClick={() => handleButtonClick("Out PM")}>
                Out PM
              </Button>
            </div>
          </AttendanceBox>
        </AttendanceContainer>
      </Layout>
    </>
  );
};

export default AttendancePunch;
