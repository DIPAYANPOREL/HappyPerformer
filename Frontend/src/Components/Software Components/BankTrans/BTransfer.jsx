import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  max-width: 1000px; /* Ensure table doesn't get too wide */
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  width: 50%;
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
  width: 50%;
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

  &:hover {
    transform: scale(1.1);
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
      .get("")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleViewClick = (month) => {
    navigate(`/bank-transfer-payout/${month}`);
  };

  return (
    <Container>
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
                <Td>{item.month}</Td>
                <Td>
                  <ViewBtn onClick={() => handleViewClick(item.month)}>
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
    </Container>
  );
};

export default BTransfer;
