import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  margin: 30px auto;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  width: 50%;
`;

const Td = styled.td`
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  width: 50%;
`;

const ViewBtn = styled.button`
  background-color: #0077b6;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

const dummyData = [
  { month: "January" },
  { month: "February" },
  { month: "March" },
  { month: "April" },
  { month: "May" },
  { month: "June" },
  { month: "July" },
  { month: "August" },
  { month: "September" },
  { month: "October" },
  { month: "November" },
  { month: "December" },
];

const BTransfer = () => {
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
          {dummyData.map((data, index) => (
            <tr key={index}>
              <Td>{data.month}</Td>
              <Td>
                <ViewBtn>View</ViewBtn>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BTransfer;
