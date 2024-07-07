import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

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
  margin-left: 10%;
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

const MyCase = () => {
  // const employees = [
  //   { id: 1, name: 'John Doe' },
  //   { id: 2, name: 'Jane Doe' },
  //   { id: 3, name: 'Bob Smith' },
  // ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [caseData, setCaseData] = useState([]);

  const handleEmployeeSelect = (event) => {
    setSelectedEmployee(event.target.value);
  };

  useEffect(() => {
    if (selectedEmployee) {
      axios.get(`http://127.0.0.1:8000/MyCases/${selectedEmployee}`)
        .then(response => {
          if (Array.isArray(response.data)) {
            setCaseData(response.data);
          }
          else {
            setCaseData([]);
          }
        })
        .catch(error => {
          console.error('Error fetching case data:', error);
        });
    }
  }, [selectedEmployee]);

  return (
    <>
      <Nav />
      <label htmlFor="employeeSelect" style={{ marginLeft: '40%' }}>Select Employee: </label>
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
              <th>Created For</th>
              <th>Case Type</th>
              <th>Case Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {caseData.length > 0 ? (
              caseData.map((caseItem) => (
                <tr key={caseItem.id}>
                  <td>{caseItem.createdFor}</td>
                  <td>{caseItem.caseType}</td>
                  <td>{caseItem.caseTitle}</td>
                  <td>{caseItem.description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Select an employee to view details</td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default MyCase;
