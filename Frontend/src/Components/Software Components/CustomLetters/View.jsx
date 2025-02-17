// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Footer from '../../../Components/Software Components/Footer';
// import Nav from '../../../Components/Software Components/Dashboard/Nav';

// const Header = styled.h2`
//   margin: 20px;
//   color: #000;
//   text-align: center;
//   text-transform: uppercase;
// `;
// const Container = styled.div`
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   background-color: #fff;
//   margin-bottom: 20px;
// `;
// const MainContainer = styled(Container)`
// height: 74vh;
// padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;
// const EmployeeList = styled.div`
//   max-height: 500px;
//   overflow-y: auto;
//   width: 100%;
//   padding: 10px;
//   box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
//   background-color: #f0f0f0;
// `;
// const EmployeeItem = styled.div`
//   margin-bottom: 5px;
//   padding: 10px;
//   border-radius: 5px;
//   background-color: ${(props) => (props.selected ? '#3f51b5' : '#fff')};
//   color: ${(props) => (props.selected ? '#fff' : '#000')};
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.selected ? '#3f51b5' : '#f0f0f0')};
//   }
// `;
// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
//   margin-top: 20px;
// `;
// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #3f51b5;
//   color: #fff;
//   border: none;
//   cursor: pointer;
//   border-radius: 8px;
//   margin-right: 10px;

//   &:hover {
//     background-color: #2e3b55;
//   }
// `;

// const Edit = () => {
//   const [employees,] = useState([
//     { id: 1, name: 'Carlos Sainz' },
//     { id: 2, name: 'Yuki Tsnoda' },
//     { id: 3, name: 'Shawn Pinto' },
//     { id: 4, name: 'Estaban Ocon' },
//     { id: 5, name: 'Alex Albon' },
//   ]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const handleEmployeeClick = (employee) => {
//     setSelectedEmployee(employee);
//   };
//   const handleSave = () => {
//     console.log("Save function is called");
//   };

//   return (
//     <>
//         <Nav />
//       <MainContainer>
//         <Header>Employee Allocation</Header>
//         <EmployeeList>
//           {employees.map((employee) => (
//             <EmployeeItem
//               key={employee.id}
//               selected={selectedEmployee && selectedEmployee.id === employee.id}
//               onClick={() => handleEmployeeClick(employee)}
//             >
//               {employee.name}
//             </EmployeeItem>
//           ))}
//         </EmployeeList>
//         <ButtonContainer>
//           <Button onClick={handleSave}>Save</Button>
//         </ButtonContainer>
//       </MainContainer>
//       <Footer />
//     </>
//   );
// };

// export default Edit;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "../../../Components/Software Components/Footer";
import Nav from "../../../Components/Software Components/Dashboard/Nav";

const Header = styled.h2`
  margin: 20px;
  color: #000;
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
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const EmployeeList = styled.div`
  max-height: 500px;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background-color: #f0f0f0;
`;

const EmployeeItem = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#3f51b5" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#3f51b5" : "#f0f0f0")};
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
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("YOUR_API_ENDPOINT/employees"); // Replace with your API endpoint
      if (
        response.data &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        setEmployees(response.data);
      } else {
        setEmployees([]);
        console.log("No employees found");
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]); // Set an empty array in case of error
    }
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSave = async () => {
    if (selectedEmployee) {
      try {
        const response = await axios.post(
          "YOUR_API_ENDPOINT/saveEmployee",
          selectedEmployee
        ); // Replace with your API endpoint
        console.log("Employee saved successfully:", response.data);
      } catch (error) {
        console.error("Error saving employee:", error);
      }
    }
  };

  return (
    <>
      <Nav />
      <MainContainer>
        <Header>Employee Allocation</Header>
        <EmployeeList>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <EmployeeItem
                key={employee.id}
                selected={
                  selectedEmployee && selectedEmployee.id === employee.id
                }
                onClick={() => handleEmployeeClick(employee)}
              >
                {employee.name}
              </EmployeeItem>
            ))
          ) : (
            <p>No employees found</p>
          )}
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
