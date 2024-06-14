import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: calc(100vh - 200px);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #1e4ae4;
  color: white;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-size: 1.1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 10px;
  }
`;

const Td = styled.td`
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 10px;
  }
`;

const ViewBtn = styled.button`
  background-color: #1e4ae4;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.2s;
  font-size: 1em;

  &:hover {
    transform: scale(1.05);
    background-color: #153a93;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const BTransfer = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/BankTransferPayout")
      .then((response) => {
        setData(response.data.payouts);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleViewClick = (payout_month) => {
    navigate(`/banktransfer2/${payout_month}`);
  };

  return (
    <Container>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Payroll Month</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <Td>{item.payout_month}</Td>
                  <Td>
                    <ViewBtn onClick={() => handleViewClick(item.payout_month)}>
                      View
                    </ViewBtn>
                  </Td>
                </tr>
              ))
            ) : (
              <tr>
                <Td colSpan="2">No data available</Td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BTransfer;
