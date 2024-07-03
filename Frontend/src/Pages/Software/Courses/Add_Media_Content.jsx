import React from "react";
import styled from "styled-components";
import Add_Media_ContentDisp from "../../../Components/Software Components/Courses/Add_Media_ContentDisp";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f1f2f6;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Add_Media_Content = () => {
  return (
    <Layout>
      <Header title="Add Content" />
      <MainWrapper>
        <Content>
          <Add_Media_ContentDisp />
        </Content>
      </MainWrapper>
    </Layout>
  );
};

export default Add_Media_Content;
