import React from "react";
import styled from "styled-components";
import BTransfer from "../../../Components/Software Components/BankTrans/BTransfer";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

// Container for the main content area
const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
`;

// Top section styling
const Top = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Bottom section styling
const Bottom = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// BankTransfer component
const BankTransfer = () => {
  return (
    <Layout>
      <Container>
        <Top>
          <h1>Bank Transfer</h1>
        </Top>
        <Bottom>
          <BTransfer />
        </Bottom>
      </Container>
    </Layout>
  );
};

export default BankTransfer;
