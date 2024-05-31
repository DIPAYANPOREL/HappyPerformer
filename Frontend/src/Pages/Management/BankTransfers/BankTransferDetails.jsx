import React from "react";
import styled from "styled-components";
import BTDetails from "../../../Components/Software Components/BankTrans/BTDetails";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const BankTransferDetails = () => {
  return (
    <Layout>
      <Header title="Bank Transfer" />
      <Container>
        <BTDetails />
      </Container>
    </Layout>
  );
};

export default BankTransferDetails;
