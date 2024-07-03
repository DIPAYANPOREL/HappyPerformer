import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: "Roboto", sans-serif;
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

const LoadingMessage = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #0077b6;
`;

const NoDataMessage = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #ff0000;
`;

const CashChequeTransfer = () => {
  const [payrollData, setPayrollData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/PayslipPayout");
        setPayrollData(response.data.payouts);
      } catch (error) {
        setError("Error fetching payroll data");
        console.error("Error fetching payroll data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Header title="Cash Cheque Transfer" />
      <Container>
        <Title>Select Payroll Month:</Title>
        {loading ? (
          <LoadingMessage>Loading...</LoadingMessage>
        ) : error ? (
          <NoDataMessage>{error}</NoDataMessage>
        ) : payrollData.length === 0 ? (
          <NoDataMessage>No data available</NoDataMessage>
        ) : (
          <Table>
            <TableHeader>
              <span>Payroll Month</span>
              <span>Action</span>
            </TableHeader>
            <TableBody>
              {payrollData.map((data, index) => (
                <TableRow key={index}>
                  <span>{new Date(data.payout_month).toLocaleDateString()}</span>
                  <span>View Details</span>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Container>
    </Layout>
  );
};

export default CashChequeTransfer;
