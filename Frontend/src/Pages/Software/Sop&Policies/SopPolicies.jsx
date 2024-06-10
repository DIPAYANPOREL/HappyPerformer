import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import SopDisp from "../../../Components/Software Components/Sop&Policies/SopDisp";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f1f2f6;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SopPolicies = () => {
  return (
    <Layout>
      <MainWrapper>
        <Content>
          <Header title="Sop & Policies" />
          <SopDisp />
        </Content>
      </MainWrapper>
    </Layout>
  );
};

export default SopPolicies;
