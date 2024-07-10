import React, { useState } from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

const CreateQuizForm = ({ onCreateQuiz }) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [course, setCourse] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [marksOnRightAnswer, setMarksOnRightAnswer] = useState("");
  const [minusMarksOnWrongAnswer, setMinusMarksOnWrongAnswer] = useState("");
  const [passingMarks, setPassingMarks] = useState("");
  const [timeLimit, setTimeLimit] = useState("");

  const handleTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quizDetails = {
      quizTitle,
      course,
      totalQuestions,
      marksOnRightAnswer,
      minusMarksOnWrongAnswer,
      passingMarks,
      timeLimit,
    };
    onCreateQuiz(quizDetails);
    // Optionally, clear input fields after submission
    setQuizTitle("");
    setCourse("");
    setTotalQuestions("");
    setMarksOnRightAnswer("");
    setMinusMarksOnWrongAnswer("");
    setPassingMarks("");
    setTimeLimit("");
  };

  return (
    <CenteredContainer>
      <FormContainer>
        <h2>Enter Quiz Details</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              placeholder="Enter Quiz Title"
              value={quizTitle}
              onChange={handleTitleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Select value={course} onChange={handleCourseChange} required>
              <option value="">Select Course</option>
              <option value="demo">Demo</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="django">Django</option>
              <option value="react">React.js</option>
              <option value="bootstrap">Bootstrap</option>
              <option value="nodejs">Node.js</option>
              <option value="express">Express.js</option>
              <option value="mongodb">MongoDB</option>
              <option value="postgresql">PostgreSQL</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              placeholder="Total Number of Questions"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              placeholder="Marks on Right Answer"
              value={marksOnRightAnswer}
              onChange={(e) => setMarksOnRightAnswer(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              placeholder="Minus Marks on Wrong Answers (without sign)"
              value={minusMarksOnWrongAnswer}
              onChange={(e) => setMinusMarksOnWrongAnswer(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              placeholder="Passing Marks"
              value={passingMarks}
              onChange={(e) => setPassingMarks(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              placeholder="Time Limit for the Test (in minutes)"
              value={timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    </CenteredContainer>
  );
};

export default CreateQuizForm;
