import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../Components/Software Components/Dashboard/Layout";
import axios from "axios";

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const FAQView = () => {
  const [answers, setAnswers] = useState({}); // State to hold answers

  const handleSubmitAnswer = (id, answer) => {
    axios
      .post("/api/submit-answer", { id, answer }) // Adjust URL and payload as needed
      .then((response) => {
        console.log("Answer submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the answer:", error);
      });
  };

  const handleInputChange = (id, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };

  return (
    <Layout>
      <MainContainer>
        <Container>
          <Title>Frequently Asked Questions</Title>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Employee</Th>
                <Th>Question</Th>
                <Th>Answer</Th>
                <Th>Mark Important</Th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.employee}</Td>
                  <Td>{item.question}</Td>
                  <Td>
                    <Input
                      type="text"
                      value={answers[item.id] || ""}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                      placeholder="Answer..."
                    />
                  </Td>
                  <Td>
                    <button
                      onClick={() =>
                        handleSubmitAnswer(item.id, answers[item.id])
                      }
                    >
                      Submit Answer
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default FAQView;
