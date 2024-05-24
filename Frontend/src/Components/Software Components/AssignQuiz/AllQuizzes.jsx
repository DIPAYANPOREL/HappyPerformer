import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";

const initialQuizData = [
  { id: 1, name: '', course: '', totalQuestions: 0, marks: 0, passingMarks: 0, timeLimit: 0, status: 'Disabled' },
  { id: 2, name: 'Html ', course: 'HTML', totalQuestions: 2, marks: 4, passingMarks: 1, timeLimit: 1, status: 'Enabled' },
  { id: 3, name: 'Js ', course: 'JavaScript', totalQuestions: 2, marks: 2, passingMarks: 1, timeLimit: 1, status: 'Enabled' },
  { id: 4, name: 'React', course: 'Sing', totalQuestions: 1, marks: 1, passingMarks: 1, timeLimit: 1, status: 'Enabled' },
];

const TableContainer = styled.div`
  max-width: 800px;
  margin: 80 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${props => props.disabled ? '#ccc' : '#4CAF50'};
  color: white;
  padding: 8px 10px;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-right: 10px;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#3e8e41'};
  }
`;

const IconWrapper = styled.span`
  cursor: pointer;
  margin-right: 5px;
  color: ${props => props.disabled ? '#ccc' : 'green'};
  &:hover {
    color: ${props => props.disabled ? '#ccc' : '#3e8e41'};
  }
`;

const QuizTable = () => {
  const [quizData, setQuizData] = useState(initialQuizData);

  const toggleStatus = (id) => {
    setQuizData(prevData =>
      prevData.map(quiz =>
        quiz.id === id ? { ...quiz, status: quiz.status === 'Enabled' ? 'Disabled' : 'Enabled' } : quiz
      )
    );
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>S.N.</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Course</TableHeader>
            <TableHeader>Total Questions</TableHeader>
            <TableHeader>Marks</TableHeader>
            <TableHeader>Passing Marks</TableHeader>
            <TableHeader>Time Limit</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {quizData.map((quiz, index) => (
            <TableRow key={quiz.id}>
              <TableData>{index + 1}</TableData>
              <TableData>{quiz.name}</TableData>
              <TableData>{quiz.course}</TableData>
              <TableData>{quiz.totalQuestions}</TableData>
              <TableData>{quiz.marks}</TableData>
              <TableData>{quiz.passingMarks}</TableData>
              <TableData>{quiz.timeLimit} min</TableData>
              <TableData>{quiz.status}</TableData>
              <TableData>
                <Button disabled={quiz.status === 'Enabled'} onClick={() => toggleStatus(quiz.id)}>
                  {quiz.status === 'Enabled' ? 'Disable' : 'Enable'}
                </Button>
              </TableData>
              <TableData>
                <IconWrapper><BsPencilFill /></IconWrapper>
                <IconWrapper><BsFillTrashFill /></IconWrapper>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default QuizTable;
