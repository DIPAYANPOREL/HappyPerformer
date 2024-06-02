import React from "react";
import styled from "styled-components";
import Upload_MediaDisp from "../../../Components/Software Components/Courses/Upload_MediaDisp";
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

const Upload_Media = () => {
  return (
    <Layout>
      <MainWrapper>
        <Content>
          <Header title="Upload Media" />
          <Upload_MediaDisp />
        </Content>
      </MainWrapper>
    </Layout>
  );
};

export default Upload_Media;
