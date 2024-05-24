import React from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Software Components/Footer';
import Nav from '../../Components/Software Components/Dashboard/Nav';


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f2f2f2;
  padding: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LeaveHistoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const LeaveHistory = () => {
  const leaveData = [
    {
      id: 1,
      leaveType: 'Medical Leave',
      from: '2024-04-10',
      to: '2024-04-19',
      description: 'MCL Injury',
      postingDate: '2024-04-28 11:26:30',
      adminRemark: 'waiting for approval',
      status: 'waiting for approval',
    },
    {
      id: 2,
      leaveType: 'Vacation Leave',
      from: '2024-05-01',
      to: '2024-05-05',
      description: 'going on a vacation',
      postingDate: '2024-04-30 09:15:00',
      adminRemark: 'approved',
      status: 'approved',
    },
  ];

  return (
    <>
    <Nav/>
    <Container>
      <LeaveHistoryContainer>
        <h2>Leave History</h2>
        <Table>
          <thead>
            <tr>
              <Th>#</Th>
              <Th>Leave Type</Th>
              <Th>From</Th>
              <Th>To</Th>
              <Th>Description</Th>
              <Th>Posting Date</Th>
              <Th>Admin Remark</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave) => (
              <tr key={leave.id}>
                <Td>{leave.id}</Td>
                <Td>{leave.leaveType}</Td>
                <Td>{leave.from}</Td>
                <Td>{leave.to}</Td>
                <Td>{leave.description}</Td>
                <Td>{leave.postingDate}</Td>
                <Td>{leave.adminRemark}</Td>
                <Td>{leave.status}</Td>
              </tr>
              
            ))}
          </tbody>
        </Table>
      </LeaveHistoryContainer>
    </Container>
    <Footer/>
    </>
  );
};

export default LeaveHistory;