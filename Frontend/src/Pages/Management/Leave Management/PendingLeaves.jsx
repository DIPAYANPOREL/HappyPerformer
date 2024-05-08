import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #666;
  font-weight: bold;
  color: #f8f8f8;
  text-align: center;
`;

const StatusSpan = styled.span`
  color: ${({ status }) => {
    switch (status) {
      case 'Approved':
        return 'green';
      case 'Pending':
        return 'blue';
      case 'Rejected':
        return 'red';
      default:
        return 'inherit';
    }
  }};
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PendingLeaves = () => {
  const [registeredEmployees, setRegisteredEmployees] = useState(0);
  const [departments, setDepartments] = useState(0);
  const [leaveTypes, setLeaveTypes] = useState(0);
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulating data fetch
      setRegisteredEmployees(60);
      setDepartments(10);
      setLeaveTypes(5);
      setLeaveApplications([
        {
          id: 1,
          employeeName: 'Arthur Morgan',
          leaveType: 'Casual Leave',
          postingDate: '2023-04-15',
          status: 'Pending',
        },
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Pending Leaves</Title>
      </Header>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>#</TableHeader>
            <TableHeader>Employee Name</TableHeader>
            <TableHeader>Leave Type</TableHeader>
            <TableHeader>Posting Date</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Details</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {leaveApplications.map((application, index) => (
            <TableRow key={application.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{application.employeeName}</TableCell>
              <TableCell>{application.leaveType}</TableCell>
              <TableCell>{application.postingDate}</TableCell>
              <TableCell>
                <StatusSpan status={application.status}>{application.status}</StatusSpan>
              </TableCell>
              <TableCell>
                <Link to={`/LeaveDetails/${application.id}`}>
                  <Button>View Details</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PendingLeaves;
