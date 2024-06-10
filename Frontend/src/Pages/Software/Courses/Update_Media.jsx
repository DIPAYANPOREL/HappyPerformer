import React from "react";
import styled from "styled-components";
import Update_MediaDisp from "../../../Components/Software Components/Courses/Update_MediaDisp";
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

const UpdateMedia = () => {
  return (
    <Layout>
      <Header title="Update Content" />
      <MainWrapper>
        <Content>
          <Update_MediaDisp />
        </Content>
      </MainWrapper>
    </Layout>
  );
};

export default UpdateMedia;
