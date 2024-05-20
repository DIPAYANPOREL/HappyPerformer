import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const Header = styled.h1`
  font-size: 18px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
`;
const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 20px;
`;
const MainContainer = styled(Container)`
height: 74vh;  
padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
const EmployeeList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
const EmployeeItem = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? '#3f51b5' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? '#3f51b5' : '#f0f0f0')};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 10px;

  &:hover {
    background-color: #2e3b55;
  }
`;


const Edit = () => {
  const [employees,] = useState([
    { id: 1, name: 'Carlos Sainz' },
    { id: 2, name: 'Yuki Tsnoda' },
    { id: 3, name: 'Shawn Pinto' },
    { id: 4, name: 'Estaban Ocon' },
    { id: 5, name: 'Alex Albon' },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };
  const handleSave = () => {
    console.log("Save function is called");
  };

  return (
    <>
        <Nav />
      <MainContainer>
        <Header>Employee Allocation</Header>
        <EmployeeList>
          {employees.map((employee) => (
            <EmployeeItem
              key={employee.id}
              selected={selectedEmployee && selectedEmployee.id === employee.id}
              onClick={() => handleEmployeeClick(employee)}
            >
              {employee.name}
            </EmployeeItem>
          ))}
        </EmployeeList>
        <ButtonContainer>
          <Button onClick={handleSave}>Save</Button>
        </ButtonContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Edit;
