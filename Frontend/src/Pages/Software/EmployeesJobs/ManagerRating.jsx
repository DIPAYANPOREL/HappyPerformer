import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const WhiteContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  width: 90%;
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MainContent = styled.div`
  width: 90%;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.delete ? "#ff4d4f" : "#007bff")};
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 10px;
  margin-top: ${(props) => (props.delete ? "0" : "10px")};

  &:hover {
    background-color: ${(props) => (props.delete ? "#d9363e" : "#0056b3")};
  }

  @media (max-width: 768px) {
    padding: 3px 5px;
    font-size: 12px;
  }
`;

const RoleButton = styled.button`
  margin: 10px 0;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#f1f1f1")};
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const roles = ["KRA", "SOP", "JD", "To-Do"];

const ManagerRating = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleDelete = (index) => {
    const todoToDelete = todos[index];
    axios
      .delete(`/api/todos/${todoToDelete.id}`)
      .then((response) => {
        setTodos(todos.filter((_, i) => i !== index));
        setPopupVisible(true);
      })
      .catch((error) => {
        console.error("There was an error deleting the task!", error);
      });
  };

  const handleDescriptionChange = (index, value) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, description: value } : todo
    );
    setTodos(updatedTodos);

    const todoToUpdate = updatedTodos[index];
    axios
      .put(`/api/todos/${todoToUpdate.id}`, todoToUpdate)
      .then((response) => {
        console.log("Description updated successfully");
      })
      .catch((error) => {
        console.error("There was an error updating the description!", error);
      });
  };

  const handleRoleClick = (role) => {
    console.log(`${role} clicked`);
    // Add your navigation or role-specific logic here
  };

  return (
    <>
      <Layout>
        <WhiteContainer>
          <PageContainer>
            <Container>
              <Box>
                <h2>Role</h2>
                <div>
                  {roles.map((role, index) => (
                    <RoleButton
                      key={index}
                      active={role === "To-Do"}
                      onClick={() => handleRoleClick(role)}
                    >
                      {role}
                    </RoleButton>
                  ))}
                </div>
              </Box>
              <MainContent>
                <Table>
                  <thead>
                    <tr>
                      {[
                        "Email ID",
                        "Self Ratings",
                        "Status",
                        "Event Description",
                        "Actions",
                      ].map((header, index) => (
                        <th
                          key={index}
                          style={{
                            padding: "10px",
                            backgroundColor: "#f1f1f1",
                            border: "1px solid #ddd",
                          }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {todos.map((todo, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#f9f9f9" : "transparent",
                        }}
                      >
                        <TableCell>{todo.email}</TableCell>
                        <TableCell>{todo.rating}</TableCell>
                        <TableCell>{todo.status}</TableCell>
                        <TableCell>
                          <input
                            type="text"
                            value={todo.description}
                            onChange={(e) =>
                              handleDescriptionChange(index, e.target.value)
                            }
                            style={{
                              width: "100%",
                              padding: "8px",
                              boxSizing: "border-box",
                              border: "1px solid #ddd",
                              borderRadius: "10px",
                              "@media (max-width: 768px)": {
                                padding: "4px",
                                fontSize: "12px",
                              },
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Button delete onClick={() => handleDelete(index)}>
                            &#x1F5D1;
                          </Button>
                        </TableCell>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </MainContent>
            </Container>
            {isPopupVisible && (
              <Box
                style={{
                  position: "fixed",
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: "1000",
                }}
              >
                <h2>Selected Task has been Deleted!</h2>
                <Button onClick={() => setPopupVisible(false)}>Close</Button>
              </Box>
            )}
          </PageContainer>
        </WhiteContainer>
      </Layout>
    </>
  );
};

export default ManagerRating;
