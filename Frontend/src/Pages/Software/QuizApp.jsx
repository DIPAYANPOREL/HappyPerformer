import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AllQuizzes from "./AllQuizzes";
import CreateQuizForm from "./CreateQuizForm";

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

// Styled components
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuizAppContainer = styled.div`
  width: 100%;
  max-width: 1200px; // Example max-width for content
  margin: 20px; /* Adjust margins as needed */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 20px; */
`;

const ToggleButton = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  color: #007bff;
  background-color: white;
  margin: 0 5px;
  padding: 10px 20px;
  font-size: 1.17188rem;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
`;

const HRLine = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1); /* Adjust opacity for visibility */
  /* margin: 20px 0; */
`;

const QuizApp = () => {
  const [showCreateForm, setShowCreateForm] = useState(true);

  const handleToggleForm = () => {
    setShowCreateForm(true);
  };

  const handleToggleAllQuizzes = () => {
    setShowCreateForm(false);
  };

  const handleCreateQuiz = (quizTitle) => {
    // Logic to handle quiz creation, e.g., saving to state or backend
    console.log("Creating quiz with title:", quizTitle);
    // For demonstration, you could add logic to update state or perform other actions
  };

  return (
    <>
      <GlobalStyle />
      <CenteredContainer>
        <QuizAppContainer>
          <ButtonContainer>
            <ToggleButton isActive={showCreateForm} onClick={handleToggleForm}>
              Create Quiz
            </ToggleButton>
            <ToggleButton
              isActive={!showCreateForm}
              onClick={handleToggleAllQuizzes}
            >
              All Quizzes
            </ToggleButton>
          </ButtonContainer>
          <HRLine />
          <div>
            {showCreateForm ? (
              <CreateQuizForm onCreateQuiz={handleCreateQuiz} />
            ) : (
              <AllQuizzes />
            )}
          </div>
        </QuizAppContainer>
      </CenteredContainer>
    </>
  );
};

export default QuizApp;
