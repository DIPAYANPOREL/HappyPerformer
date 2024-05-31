import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Top = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const TopColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;

const TopLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const TopValue = styled.div`
  font-size: 1.1em;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }
`;

const TableHeadCell = styled.th`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: left;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }
`;

const ProceedButton = styled.button`
  padding: 12px;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  align-self: center;

  &:hover {
    background-color: #005b84;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
`;

const BankTransferPayout = () => {
  const { month } = useParams();
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState({
    totalEmployees: 0,
    totalAmount: 0,
    totalErrors: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/bank-transfers/${month}`)
      .then((response) => {
        setData(response.data.transfers || []);
        setSummary(
          response.data.summary || {
            totalEmployees: 0,
            totalAmount: 0,
            totalErrors: 0,
          }
        );
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [month]);

  const handleProceedClick = () => {
    navigate(`/bank-transfer-details/${month}`);
  };

  return (
    <Layout>
      <Header title="Bank Transfer" />
      <Container>
        <Top>
          <TopColumn>
            <TopLabel>Month</TopLabel>
            <TopValue>{month}</TopValue>
          </TopColumn>
          <TopColumn>
            <TopLabel>Total Employees</TopLabel>
            <TopValue>{summary.totalEmployees}</TopValue>
          </TopColumn>
          <TopColumn>
            <TopLabel>Total Amount</TopLabel>
            <TopValue>${summary.totalAmount}</TopValue>
          </TopColumn>
          <TopColumn>
            <TopLabel>Total Employees with Errors</TopLabel>
            <TopValue>{summary.totalErrors}</TopValue>
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
            {Array.isArray(data) && data.length > 0 ? (
              data.map((row) => (
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="10">No data available</TableCell>
              </TableRow>
            )}
          </tbody>
        </Table>
        <ProceedButton onClick={handleProceedClick}>Proceed</ProceedButton>
      </Container>
    </Layout>
  );
};

export default BankTransferPayout;
