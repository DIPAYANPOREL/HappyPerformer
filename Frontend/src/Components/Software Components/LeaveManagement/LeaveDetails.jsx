import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

function AppWithEmployeeDetails() {
  const [employeeData, setEmployeeData] = useState({
    name: 'Shawn Pinto',
    email: 'shawn.salahkaar@gmail.com',
    role: 'HR',
    phone: '8806926274',
  });

  const [leaveData, setLeaveData] = useState({
    type: 'Medical Leave',
    startDate: '2024-04-10',
    endDate: '2024-04-19',
    description: 'hi im sick',
    status: 'waiting for approval',
    adminRemark: 'waiting for Approval',
    adminActionDate: 'NA',
    postingDate: '2024-04-28T11:26:30',
  });

  return (
    <div>
      <TableContainer>
        <h2>Employee Details</h2>
        <Table>
          <tbody>
            <tr>
              <TableHeader>Field</TableHeader>
              <TableHeader>Value</TableHeader>
            </tr>
            {Object.entries(employeeData).map(([key, value]) => (
              <tr key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      
      <TableContainer>
        <h2>Leave Details</h2>
        <Table>
          <tbody>
            <tr>
              <TableHeader>Field</TableHeader>
              <TableHeader>Value</TableHeader>
            </tr>
            {Object.entries(leaveData).map(([key, value]) => (
              <tr key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      
      <div>
        {/* ActionButtons component goes here */}
      </div>
    </div>
  );
}

export default AppWithEmployeeDetails;
