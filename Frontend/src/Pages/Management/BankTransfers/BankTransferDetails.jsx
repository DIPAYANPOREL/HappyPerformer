import React from "react";
import styled from "styled-components";
import BTDetails from "../../../Components/Software Components/BankTrans/BTDetails";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";

const Container = styled.div``;
const Wrapper = styled.div``;

const BankTransferDetails = () => {
  return (
    <Wrapper>
      <Nav />
      <Header title="Bank Transfer" />
      <Container>
        <BTDetails />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default BankTransferDetails;
