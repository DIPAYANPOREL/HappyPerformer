import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import Header from "../../Components/Software Components/Dashboard/Header";
import Layout from "../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 100vh;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 100vh;
  }
`;

const TaskInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  }
`;
const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  border-radius: 5px;
  }
`;
const Task = styled.li`
  padding: 15px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 5px;
  }
`;
const TaskDetails = styled.div`
  display: flex;
  align-items: center;  
  }
`;
const TaskText = styled.span`
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 5px;
  }
`;
const ImportantIndicator = styled.span`
  color: #ffc107;
  margin-right: 10px;
  font-size: 13px;
  text-transform: uppercase;
`;
const TaskDate = styled.span`
  color: #999;
  font-size: 12px;
  margin-left: 10px;
`;
const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 15px;
  text-align: center;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
const DiscardButton = styled(Button)`
  background-color: red;
  margin-left: 10px;

  &:hover {
    background-color: darkred;
  }
`;
const FoldersContainer = styled.div`
  width: 300px;
  background-color: #f5f5f5;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 100vh;
`;
const FolderList = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const Folder = styled.li`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;
const FolderName = styled.span`
  margin-left: 10px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 5px;
  }
`;
const TaskCount = styled.span`
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 10px;
  font-weight: bold;
  border: 1px solid #007bff;
`;
const TrashIcon = styled(FaTrash)`
  color: #dc3545;
  margin-left: 10px;
  cursor: pointer;
`;
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-left: 10px;
  cursor: pointer;
`;
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFolder, setCurrentFolder] = useState("All Tasks");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          text: newTask.trim(),
          isImportant: false,
          isCompleted: false,
          date: new Date(),
        },
      ]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleFolderClick = (folderName) => {
    setCurrentFolder(folderName);
  };

  const handleTaskStatusChange = (index, isImportant, isCompleted) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], isImportant, isCompleted };
    setTasks(updatedTasks);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const filteredTasks = tasks.filter((task) => {
    const { text, isImportant, isCompleted } = task;
    const taskMatches = text.toLowerCase().includes(searchTerm.toLowerCase());

    if (currentFolder === "All Tasks") {
      return taskMatches;
    } else if (currentFolder === "Important Tasks") {
      return taskMatches && isImportant;
    } else if (currentFolder === "Completed Tasks") {
      return taskMatches && isCompleted;
    }

    return false;
  });

  const getTaskCount = (folderName) => {
    if (folderName === "All Tasks") {
      return tasks.length;
    } else if (folderName === "Important Tasks") {
      return tasks.filter((task) => task.isImportant).length;
    } else if (folderName === "Completed Tasks") {
      return tasks.filter((task) => task.isCompleted).length;
    }
    return 0;
  };

  return (
    <>
      <Layout>
        <Header title="To-Do-List" />
        <Container>
          <FoldersContainer>
            <FolderList>
              <Folder onClick={() => handleFolderClick("All Tasks")}>
                <FolderName>All Tasks</FolderName>
                <TaskCount>{getTaskCount("All Tasks")}</TaskCount>
              </Folder>
              <Folder onClick={() => handleFolderClick("Important Tasks")}>
                <FolderName>Important</FolderName>
                <TaskCount>{getTaskCount("Important Tasks")}</TaskCount>
              </Folder>
              <Folder onClick={() => handleFolderClick("Completed Tasks")}>
                <FolderName>Complete</FolderName>
                <TaskCount>{getTaskCount("Completed Tasks")}</TaskCount>
              </Folder>
            </FolderList>
          </FoldersContainer>
          <ContentContainer>
            <Header>To-Do-Listings</Header>
            <TaskInput
              type="text"
              placeholder="Add New Task"
              value={newTask}
              onChange={handleInputChange}
            />
            <div>
              <Button onClick={handleAddTask}>Add Task</Button>
              <DiscardButton>Discard</DiscardButton>
            </div>
            <SearchInput
              type="text"
              placeholder="Search Tasks Here"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <TaskList>
              {filteredTasks.map((task, index) => (
                <Task key={index}>
                  <TaskDetails>
                    {task.isImportant && (
                      <ImportantIndicator>⭐</ImportantIndicator>
                    )}
                    <TaskText>{task.text}</TaskText>
                    <TaskDate>{formatDate(task.date)}</TaskDate>
                  </TaskDetails>
                  <div>
                    <Button
                      onClick={() =>
                        handleTaskStatusChange(index, true, task.isCompleted)
                      }
                      style={{
                        backgroundColor: task.isImportant
                          ? "#f44336"
                          : "#4CAF50",
                      }}
                    >
                      {task.isImportant ? "Important" : "Mark Important"}
                    </Button>
                    <TrashIcon onClick={() => handleDeleteTask(index)} />
                    <Checkbox
                      checked={task.isCompleted}
                      onChange={() =>
                        handleTaskStatusChange(
                          index,
                          task.isImportant,
                          !task.isCompleted
                        )
                      }
                    />
                  </div>
                </Task>
              ))}
            </TaskList>
          </ContentContainer>
        </Container>
      </Layout>
    </>
  );
};

export default ToDoList;
