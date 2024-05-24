import React from 'react';
import styled from 'styled-components';
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Table = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 13.7%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-weight: bold;
`;

const TableBody = styled.div`
  padding: 10px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const CashChequeTransfer = () => {
  const dummyData = [
    { month: 'January', action: 'View' },
    { month: 'February', action: 'View' },
    { month: 'March', action: 'View' },
    { month: 'April', action: 'View' },
    { month: 'May', action: 'View' },
  ];

  return (
    <>
    <Nav/>
    <Container>
      <Title>Select Payroll Month:</Title>
      <Table>
        <TableHeader>
          <span>Payroll Month</span>
          <span>Action</span>
        </TableHeader>
        <TableBody>
          {dummyData.map((data, index) => (
            <TableRow key={index}>
              <span>{data.month}</span>
              <span>{data.action}</span>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
    <Footer/>
    </>
  );
};

export default CashChequeTransfer;