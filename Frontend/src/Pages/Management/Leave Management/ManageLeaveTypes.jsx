import React from 'react';
import styled from 'styled-components';
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TableHead = styled.thead`
  background-color: #666;
  color: #fff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
`;

const TableData = styled.td`
  padding: 15px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.danger ? '#fff' : '#2196f3')};
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.danger ? '#c62828' : '#1976d2')};
  }
`;

const Icon = styled.span`
  margin-right: 5px;
`;
const ManageLeaveTypes = () => {
  const leaveTypes = [
    { id: 1, name: 'Casual Leave', limit: 16, description: 'Casual Leave', creationDate: '2022-06-01 07:29:50' },
    { id: 2, name: 'Medical Leave', limit: 15, description: 'Medical Leave', creationDate: '2022-06-01 07:30:19' },
    { id: 3, name: 'LOP', limit: 364, description: 'Loss Of Pay Leave', creationDate: '2022-11-25 09:51:46' },
    { id: 4, name: 'Earned Leave', limit: 25, description: 'Earned Leave', creationDate: '2022-11-30 07:00:40' },
  ];

  return (
    <Container>
      <Title>Manage Leave Types</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>#</TableHeader>
            <TableHeader>Leave Type</TableHeader>
            <TableHeader>Limit</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Creation Date</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {leaveTypes.map((leaveType) => (
            <TableRow key={leaveType.id}>
              <TableData>{leaveType.id}</TableData>
              <TableData>{leaveType.name}</TableData>
              <TableData>{leaveType.limit}</TableData>
              <TableData>{leaveType.description}</TableData>
              <TableData>{leaveType.creationDate}</TableData>
              <TableData>
                <ActionButtons>
                  <Button><Icon><BsPencilFill /></Icon></Button>
                  <Button danger><Icon><BsFillTrashFill /></Icon></Button>
                </ActionButtons>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageLeaveTypes;
