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
    background-color: #0b2447;
    color: #f1f1f1;
    font-weight: bold;
  }
`;

const ViewEncashment = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

  // Fetch employees from the backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees'); // Adjust the URL to  API endpoint
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleEmployeeSelect = async (event) => {
    const employeeId = event.target.value;
    setSelectedEmployee(employeeId);

    if (employeeId) {
      try {
        const response = await axios.get(`/api/employees/${employeeId}/encashment`); // Adjust the URL to  API endpoint
        setSelectedEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    } else {
      setSelectedEmployeeData(null);
    }
  };

  return (
    <>
      <Nav />
      <label htmlFor="employeeSelect" style={{ marginLeft: '40%' }}>
        Select Employee:
      </label>
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
                <td>{selectedEmployeeData.totalLeaves}</td>
                <td>{selectedEmployeeData.leavesTaken}</td>
                <td>{selectedEmployeeData.encashment}</td>
              </tr>
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

export default ViewEncashment;
