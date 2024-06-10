import React from "react";
import styled from "styled-components";
import Update_Delete_MediaDisp from "../../../Components/Software Components/Courses/Update_Delete_MediaDisp";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

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
  align-items: center;
`;

const Update_Delete_Media = () => {
  return (
    <Layout>
      <MainWrapper>
        <Content>
          <Header title="Update Training" />
          <Update_Delete_MediaDisp />
        </Content>
      </MainWrapper>
    </Layout>
  );
};

export default Update_Delete_Media;
