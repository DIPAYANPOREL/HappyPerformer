import React from "react";
import styled from "styled-components";
import BTransfer from "../../../Components/Software Components/BankTrans/BTransfer";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";

const Wrapper = styled.div`
  height: 100%;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: #007bff;
`;

const Bottom = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
`;

const BankTransfer = () => {
  return (
    <>
      <Wrapper>
        <Nav />
        <Header title="Bank Transfer Payout" />
        <Container>
          <Top>
            <h1>Bank Transfer</h1>
          </Top>
          <Bottom>
            <BTransfer />
          </Bottom>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
};

export default BankTransfer;
