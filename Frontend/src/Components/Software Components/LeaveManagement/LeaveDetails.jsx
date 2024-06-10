import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TableContainer = styled.div`
  width: 48%;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: #333;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-top: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3367d6;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 400px;
  width: 90%;
  text-align: center;
`;

const PopupTitle = styled.h3`
  margin-top: 0;
  color: #333;
`;

const PopupDescription = styled.p`
  color: #666;
  margin-bottom: 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const LeaveDetails = () => {
  const [employeeData, setEmployeeData] = useState({
    'Employee Name': 'Chirag Panchal',
    'Employee Role': 'HR',
    'Employee Email': 'chirag.salahkaar@gmail.com',
    'Employee Phone': '8806926274',
  });

  const [leaveData, setLeaveData] = useState({
    'Leave Type': 'Medical Leave',
    'Leave Date': 'From 2024-04-10 to 2024-04-19',
    'Employee Leave Description': 'hi im sick',
    'Leave Status': 'waiting for approval',
    'Admin Remark': 'waiting for Approval',
    'Admin Action taken date': 'NA',
    'Posting Date': '2024-04-28 11:26:30',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleTakeAction = () => {
    setShowPopup(true);
  };

  const handleApprove = () => {
    setLeaveData((prevState) => ({
      ...prevState,
      'Leave Status': 'Approved',
      'Admin Remark': 'Approved',
    }));
    setShowPopup(false);
  };

  const handleReject = () => {
    setLeaveData((prevState) => ({
      ...prevState,
      'Leave Status': 'Rejected',
    }));
    setShowPopup(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return '#4CAF50';
      case 'waiting for approval':
        return '#2196F3';
      case 'Rejected':
        return '#F44336';
      default:
        return '#333';
    }
  };

  return (
    <Container>
      <TableContainer>
        <Table>
          <tbody>
            <tr>
              <TableHeader colSpan="2">Employee Details</TableHeader>
            </tr>
            {Object.entries(employeeData).map(([key, value]) => (
              <tr key={key}>
                <TableCell style={{ fontWeight: 'bold' }}>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <TableContainer>
        <Table>
          <tbody>
            <tr>
              <TableHeader colSpan="2">Leave Details</TableHeader>
            </tr>
            {Object.entries(leaveData).map(([key, value]) => (
              <tr key={key}>
                <TableCell style={{ fontWeight: 'bold' }}>{key}</TableCell>
                <TableCell
                  style={{
                    color: key === 'Leave Status' ? getStatusColor(value) : '#333',
                  }}
                >
                  {value}
                </TableCell>
              </tr>
            ))}
            <tr>
              <TableCell colSpan="2" style={{ textAlign: 'right' }}>
                <Button onClick={handleTakeAction}>Take Action</Button>
              </TableCell>
            </tr>
          </tbody>
        </Table>
      </TableContainer>

      {showPopup && (
        <Popup>
          <PopupTitle>Take Action</PopupTitle>
          <PopupDescription>
            Do you want to approve or reject the leave request?
          </PopupDescription>
          <ButtonGroup>
            <Button onClick={handleApprove}>Approve</Button>
            <Button onClick={handleReject}>Waiting For Approval</Button>
            <Button onClick={handleReject}>Reject</Button>
          </ButtonGroup>
        </Popup>
      )}
    </Container>
  );
};

export default LeaveDetails;