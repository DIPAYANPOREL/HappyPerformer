import React from "react";
import styled from "styled-components";
import BTransfer from "../../../Components/Software Components/BankTrans/BTransfer";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

const Top = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e4ae4;
  color: white;
  border-bottom: 2px solid #ddd;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Bottom = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const BankTransfer = () => {
  return (
    <Layout>
      <Header title="Bank Transfers" />
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
