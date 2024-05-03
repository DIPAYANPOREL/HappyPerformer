import React from 'react'
import styled from 'styled-components';
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import Header from '../../../Components/Software Components/Dashboard/Header';
import Footer from '../../../Components/Software Components/Footer';
import Upload_MediaDisp from '../../../Components/Software Components/Courses/Upload_MediaDisp';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f1f2f6;
  /* padding: 10px; */
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Upload_Media = () => {
  return (
    <MainWrapper>
      <Nav />
      <Content>
        <Header title="Upload Media" />
        <Upload_MediaDisp/>
      </Content>
      <Footer />
    </MainWrapper>
  )
}

export default Upload_Media
