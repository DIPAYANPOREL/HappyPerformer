import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Top = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const TopColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const TopValue = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #0077b6;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: left;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: left;
`;

const BankTransferPayout = () => {
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      bank: "ABC Bank",
      branch: "Main Branch",
      ifscCode: "ABC123",
      accountNumber: "1234567890",
      accountType: "Savings",
      amount: 5000,
      holdSalary: false,
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      bank: "XYZ Bank",
      branch: "Downtown Branch",
      ifscCode: "XYZ456",
      accountNumber: "0987654321",
      accountType: "Checking",
      amount: 7000,
      holdSalary: true,
      status: "Processed",
    },
    {
      id: 3,
      name: "Michael Johnson",
      bank: "DEF Bank",
      branch: "Midtown Branch",
      ifscCode: "DEF789",
      accountNumber: "5678901234",
      accountType: "Savings",
      amount: 8000,
      holdSalary: false,
      status: "Failed",
    },
    {
      id: 4,
      name: "Emily Davis",
      bank: "GHI Bank",
      branch: "Brooklyn Branch",
      ifscCode: "GHI321",
      accountNumber: "2468135790",
      accountType: "Checking",
      amount: 9000,
      holdSalary: true,
      status: "Pending",
    },
    {
      id: 5,
      name: "David Wilson",
      bank: "JKL Bank",
      branch: "Queens Branch",
      ifscCode: "JKL654",
      accountNumber: "1357924680",
      accountType: "Savings",
      amount: 10000,
      holdSalary: false,
      status: "Processed",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      bank: "MNO Bank",
      branch: "Staten Island Branch",
      ifscCode: "MNO987",
      accountNumber: "0123456789",
      accountType: "Checking",
      amount: 11000,
      holdSalary: true,
      status: "Failed",
    },
    {
      id: 3,
      name: "Michael Johnson",
      bank: "DEF Bank",
      branch: "Midtown Branch",
      ifscCode: "DEF789",
      accountNumber: "5678901234",
      accountType: "Savings",
      amount: 8000,
      holdSalary: false,
      status: "Failed",
    },
    {
      id: 4,
      name: "Emily Davis",
      bank: "GHI Bank",
      branch: "Brooklyn Branch",
      ifscCode: "GHI321",
      accountNumber: "2468135790",
      accountType: "Checking",
      amount: 9000,
      holdSalary: true,
      status: "Pending",
    },
    {
      id: 5,
      name: "David Wilson",
      bank: "JKL Bank",
      branch: "Queens Branch",
      ifscCode: "JKL654",
      accountNumber: "1357924680",
      accountType: "Savings",
      amount: 10000,
      holdSalary: false,
      status: "Processed",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      bank: "MNO Bank",
      branch: "Staten Island Branch",
      ifscCode: "MNO987",
      accountNumber: "0123456789",
      accountType: "Checking",
      amount: 11000,
      holdSalary: true,
      status: "Failed",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      bank: "MNO Bank",
      branch: "Staten Island Branch",
      ifscCode: "MNO987",
      accountNumber: "0123456789",
      accountType: "Checking",
      amount: 11000,
      holdSalary: true,
      status: "Failed",
    },
    {
      id: 3,
      name: "Michael Johnson",
      bank: "DEF Bank",
      branch: "Midtown Branch",
      ifscCode: "DEF789",
      accountNumber: "5678901234",
      accountType: "Savings",
      amount: 8000,
      holdSalary: false,
      status: "Failed",
    },
    {
      id: 4,
      name: "Emily Davis",
      bank: "GHI Bank",
      branch: "Brooklyn Branch",
      ifscCode: "GHI321",
      accountNumber: "2468135790",
      accountType: "Checking",
      amount: 9000,
      holdSalary: true,
      status: "Pending",
    },
    {
      id: 5,
      name: "David Wilson",
      bank: "JKL Bank",
      branch: "Queens Branch",
      ifscCode: "JKL654",
      accountNumber: "1357924680",
      accountType: "Savings",
      amount: 10000,
      holdSalary: false,
      status: "Processed",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      bank: "MNO Bank",
      branch: "Staten Island Branch",
      ifscCode: "MNO987",
      accountNumber: "0123456789",
      accountType: "Checking",
      amount: 11000,
      holdSalary: true,
      status: "Failed",
    },
  ];

  return (
    <Wrapper>
      <Nav />
      <Header title="Bank Transfer" />
      <Container>
        <Top>
          <TopColumn>
            <TopLabel>Month</TopLabel>
            <TopValue>May 2024</TopValue>
          </TopColumn>
          <TopColumn>
            <TopLabel>Total Employees</TopLabel>
            <TopValue>100</TopValue>
          </TopColumn>
          <TopColumn>
            <TopLabel>Total Amount</TopLabel>
            <TopValue>$50,000</TopValue>
          </TopColumn>
          <TopColumn>
            <TopLabel>Total Employees with Errors</TopLabel>
            <TopValue>5</TopValue>
          </TopColumn>
        </Top>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Bank</TableHeadCell>
              <TableHeadCell>Branch</TableHeadCell>
              <TableHeadCell>IFSC Code</TableHeadCell>
              <TableHeadCell>Account Number</TableHeadCell>
              <TableHeadCell>Account Type</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
              <TableHeadCell>Hold Salary</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {dummyData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.bank}</TableCell>
                <TableCell>{row.branch}</TableCell>
                <TableCell>{row.ifscCode}</TableCell>
                <TableCell>{row.accountNumber}</TableCell>
                <TableCell>{row.accountType}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.holdSalary ? "Yes" : "No"}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default BankTransferPayout;
