import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import { Link } from "react-router-dom";
import axios from "axios"; // Importing axios

const OuterContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  margin: 4px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const StartButton = styled(Link)`
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #d11a2a;
  }

  &::after {
    content: "";
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 0;
    left: -75%;
    width: 200%;
    height: 100%;
    transform: skewX(-20deg);
    transition: left 0.5s;
  }

  &:hover::after {
    left: 100%;
  }
`;

const Instructions = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
`;

const Quiz = () => {
  const [showHistoryTable, setShowHistoryTable] = useState(false);
  const [showEmptyTable, setShowEmptyTable] = useState(false);
  const [historyData, setHistoryData] = useState([]);

  const handleHistoryClick = () => {
    setShowHistoryTable((prevShowTable) => !prevShowTable);
    setShowEmptyTable(false);

    // Fetch history data
    if (!showHistoryTable) {
      axios
        .get("/api/quiz-history")
        .then((response) => {
          setHistoryData(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the history data!", error);
        });
    }
  };

  const handleHomeClick = () => {
    setShowEmptyTable((prevShowTable) => !prevShowTable);
    setShowHistoryTable(false);
  };

  return (
    <Layout>
      <OuterContainer>
        <Container>
          <Header>
            <Button onClick={handleHomeClick}>Home</Button>
            <Button onClick={handleHistoryClick}>My History</Button>
          </Header>
          {showHistoryTable && (
            <Table>
              <thead>
                <tr>
                  <Th>S.N.</Th>
                  <Th>Name</Th>
                  <Th>Total Question</Th>
                  <Th>Correct Answer</Th>
                  <Th>Wrong Answer</Th>
                  <Th>Total Marks</Th>
                  <Th>Passing Marks</Th>
                  <Th>Time Limit</Th>
                  <Th>Action</Th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((data, index) => (
                  <tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{data.name}</Td>
                    <Td>{data.totalQuestion}</Td>
                    <Td>{data.correctAnswer}</Td>
                    <Td>{data.wrongAnswer}</Td>
                    <Td>{data.totalMarks}</Td>
                    <Td>{data.passingMarks}</Td>
                    <Td>{data.timeLimit}</Td>
                    <Td>
                      <StartButton to="/AssignQuiz">Start</StartButton>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {showEmptyTable && (
            <Table>
              <thead>
                <tr>
                  <Th>S.N.</Th>
                  <Th>Name</Th>
                  <Th>Total Question</Th>
                  <Th>Correct Answer</Th>
                  <Th>Wrong Answer</Th>
                  <Th>Total Marks</Th>
                  <Th>Passing Marks</Th>
                  <Th>Time Limit</Th>
                  <Th>Action</Th>
                </tr>
              </thead>
              <tbody>{/* Empty table body */}</tbody>
            </Table>
          )}
          <Instructions>
            :: General Instructions :: <br />
            instructions for quiz will be written here
          </Instructions>
        </Container>
      </OuterContainer>
    </Layout>
  );
};

export default Quiz;
