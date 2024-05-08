import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const QuizFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const QuizFormStyled = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 70%;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 6px;
  color: #333;
  font-size: 16px;
`;

const FormInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 20px;
`;

const CreateQuizButton = styled.button`
  padding: 12px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 45%;
  text-align: center;
`;

const AllQuizzesButton = styled(Link)`
  padding: 12px 20px;
  background-color: #17a2b8;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 45%;
  text-align: center;
  text-decoration: none;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  width: 200px;
  text-align: center;
`;

const AssignQuiz = () => {
  const [quizData, setQuizData] = useState({
    quizTitle: '',
    course: '',
    totalQuestions: '',
    marksForCorrectAnswer: '',
    marksForWrongAnswer: '',
    passingMarks: '',
    timeLimit: '',
  });

  const handleChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(quizData);
  };

  return (
    <QuizFormContainer>
      <QuizFormStyled onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Enter Quiz Details</h2>
        <FormGroup>
          <Label htmlFor="quizTitle">Enter Quiz title</Label>
          <FormInput
            type="text"
            id="quizTitle"
            name="quizTitle"
            value={quizData.quizTitle}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="course">Select course to which this quiz belongs</Label>
          <FormInput
            type="text"
            id="course"
            name="course"
            value={quizData.course}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="totalQuestions">Enter total number of questions</Label>
          <FormInput
            type="number"
            id="totalQuestions"
            name="totalQuestions"
            value={quizData.totalQuestions}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="marksForCorrectAnswer">Enter marks on right answer</Label>
          <FormInput
            type="number"
            id="marksForCorrectAnswer"
            name="marksForCorrectAnswer"
            value={quizData.marksForCorrectAnswer}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="marksForWrongAnswer">Enter minus marks on wrong answer without sign</Label>
          <FormInput
            type="number"
            id="marksForWrongAnswer"
            name="marksForWrongAnswer"
            value={quizData.marksForWrongAnswer}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passingMarks">Enter passing marks</Label>
          <FormInput
            type="number"
            id="passingMarks"
            name="passingMarks"
            value={quizData.passingMarks}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="timeLimit">Enter time limit for test (in minute)</Label>
          <FormInput
            type="number"
            id="timeLimit"
            name="timeLimit"
            value={quizData.timeLimit}
            onChange={handleChange}
          />
        </FormGroup>
        <ButtonContainer>
          <CreateQuizButton onClick={() => console.log("Create Quiz clicked")}>
            Create Quiz
          </CreateQuizButton>
          <AllQuizzesButton to="/../AllQuizzes">
            All Quizzes
          </AllQuizzesButton>
        </ButtonContainer>
        <SubmitButton type="submit">
          Submit
        </SubmitButton>
      </QuizFormStyled>
    </QuizFormContainer>
  );
};

export default AssignQuiz;
