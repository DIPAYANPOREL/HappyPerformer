import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Software Components/Dashboard/Header";
import Layout from "../../Components/Software Components/Dashboard/Layout";

// Styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  table-layout: fixed; /* Ensure fixed table layout */
`;

const Th = styled.th`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Display ellipsis for overflow text */
`;

const Button = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  background-color: ${(props) => (props.primary ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  border: 1px solid ${(props) => (props.primary ? "#007bff" : "#ccc")};
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#e9ecef")};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AllQuiz = () => {
  // Sample data for quizzes (replace with actual data fetched from backend)
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      name: "Quiz 1",
      course: "JavaScript",
      total_questions: 10,
      marks: 100,
      passing_marks: 70,
      time_limit: 30,
      status: "Enabled",
    },
    {
      id: 2,
      name: "Quiz 2",
      course: "Python",
      total_questions: 15,
      marks: 150,
      passing_marks: 100,
      time_limit: 45,
      status: "Enabled",
    },
    {
      id: 3,
      name: "Quiz 3",
      course: "React.js",
      total_questions: 12,
      marks: 120,
      passing_marks: 80,
      time_limit: 40,
      status: "Disabled",
    },
  ]);

  // State to manage editing mode and edited quiz data
  const [editingQuizId, setEditingQuizId] = useState(null);
  const [editedQuiz, setEditedQuiz] = useState({});

  // Function to handle editing quiz details
  const handleEdit = (quiz) => {
    setEditingQuizId(quiz.id);
    setEditedQuiz({ ...quiz });
  };

  // Function to cancel editing
  const cancelEdit = () => {
    setEditingQuizId(null);
    setEditedQuiz({});
  };

  // Function to update quiz details after editing
  const updateQuiz = () => {
    // Update the quiz in quizzes state with editedQuiz data
    const updatedQuizzes = quizzes.map((quiz) =>
      quiz.id === editedQuiz.id ? { ...quiz, ...editedQuiz } : quiz
    );
    setQuizzes(updatedQuizzes);
    setEditingQuizId(null);
    setEditedQuiz({});
  };

  // Function to toggle quiz status (enable/disable)
  const toggleStatus = (quizId) => {
    const updatedQuizzes = quizzes.map((quiz) =>
      quiz.id === quizId
        ? {
            ...quiz,
            status: quiz.status === "Enabled" ? "Disabled" : "Enabled",
          }
        : quiz
    );
    setQuizzes(updatedQuizzes);
  };

  return (
    <Layout>
      <Header title="All Quiz" />
      <div>
        <Table>
          <thead>
            <tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Course</Th>
              <Th>Total Questions</Th>
              <Th>Marks</Th>
              <Th>Passing Marks</Th>
              <Th>Time Limit (min)</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz, index) => (
              <tr key={quiz.id}>
                <Td>{index + 1}</Td>
                <Td>
                  {editingQuizId === quiz.id ? (
                    <InputWrapper>
                      <input
                        type="text"
                        value={editedQuiz.name}
                        onChange={(e) =>
                          setEditedQuiz({ ...editedQuiz, name: e.target.value })
                        }
                        style={{ width: "100%" }} // Adjust input width
                      />
                    </InputWrapper>
                  ) : (
                    quiz.name
                  )}
                </Td>
                <Td>
                  {editingQuizId === quiz.id ? (
                    <InputWrapper>
                      <input
                        type="text"
                        value={editedQuiz.course}
                        onChange={(e) =>
                          setEditedQuiz({
                            ...editedQuiz,
                            course: e.target.value,
                          })
                        }
                        style={{ width: "100%" }} // Adjust input width
                      />
                    </InputWrapper>
                  ) : (
                    quiz.course
                  )}
                </Td>
                <Td>
                  {editingQuizId === quiz.id ? (
                    <InputWrapper>
                      <input
                        type="number"
                        value={editedQuiz.total_questions}
                        onChange={(e) =>
                          setEditedQuiz({
                            ...editedQuiz,
                            total_questions: parseInt(e.target.value),
                          })
                        }
                        style={{ width: "100%" }} // Adjust input width
                      />
                    </InputWrapper>
                  ) : (
                    quiz.total_questions
                  )}
                </Td>
                <Td>
                  {editingQuizId === quiz.id ? (
                    <InputWrapper>
                      <input
                        type="number"
                        value={editedQuiz.marks}
                        onChange={(e) =>
                          setEditedQuiz({
                            ...editedQuiz,
                            marks: parseInt(e.target.value),
                          })
                        }
                        style={{ width: "100%" }} // Adjust input width
                      />
                    </InputWrapper>
                  ) : (
                    quiz.marks
                  )}
                </Td>
                <Td>
                  {editingQuizId === quiz.id ? (
                    <InputWrapper>
                      <input
                        type="number"
                        value={editedQuiz.passing_marks}
                        onChange={(e) =>
                          setEditedQuiz({
                            ...editedQuiz,
                            passing_marks: parseInt(e.target.value),
                          })
                        }
                        style={{ width: "100%" }} // Adjust input width
                      />
                    </InputWrapper>
                  ) : (
                    quiz.passing_marks
                  )}
                </Td>
                <Td>
                  {editingQuizId === quiz.id ? (
                    <InputWrapper>
                      <input
                        type="number"
                        value={editedQuiz.time_limit}
                        onChange={(e) =>
                          setEditedQuiz({
                            ...editedQuiz,
                            time_limit: parseInt(e.target.value),
                          })
                        }
                        style={{ width: "100%" }} // Adjust input width
                      />
                    </InputWrapper>
                  ) : (
                    quiz.time_limit
                  )}
                </Td>
                <Td>
                  <Button onClick={() => toggleStatus(quiz.id)}>
                    {quiz.status === "Enabled" ? "Disable" : "Enable"}
                  </Button>
                </Td>
                <Td>
                  {editingQuizId === quiz.id ? (
                    <React.Fragment>
                      <Button primary onClick={updateQuiz}>
                        Save
                      </Button>
                      <Button onClick={cancelEdit}>Cancel</Button>
                    </React.Fragment>
                  ) : (
                    <Button onClick={() => handleEdit(quiz)}>Edit</Button>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default AllQuiz;
