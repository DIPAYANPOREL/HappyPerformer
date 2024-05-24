import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const SelectEmployee = styled.select`
  padding: 0.5rem;
  margin-top: 10rem;
  margin-bottom: 1rem;

`;

const TableContainer = styled.div`
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:10%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: rgba(52, 152, 219, 0.6);
    font-weight: bold;
  }
`;

const ViewEncashment = () => {
  const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeSelect = (event) => {
    setSelectedEmployee(event.target.value);
  };

  const selectedEmployeeData = selectedEmployee
    ? employees.find((employee) => employee.id === parseInt(selectedEmployee))
    : null;

  return (
    <>
    <Nav/>
      <label htmlFor="employeeSelect" style={{marginLeft:'40%'}}>Select Employee: </label>
      <SelectEmployee id="employeeSelect" value={selectedEmployee || ''} onChange={handleEmployeeSelect}>
        <option value="">Select an employee</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </SelectEmployee>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Leaves</th>
              <th>Number of Leaves Taken</th>
              <th>Cash Leave Encashment</th>
            </tr>
          </thead>
          <tbody>
            {selectedEmployeeData ? (
              <tr>
                <td>{selectedEmployeeData.name}</td>
                <td>10</td>
                <td>2</td>
                <td>$200</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="4">Select an employee to view details</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  );
};

export default ViewEncashment;