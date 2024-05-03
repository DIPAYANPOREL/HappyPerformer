import React from 'react'
import styled from 'styled-components';
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import Header from '../../../Components/Software Components/Dashboard/Header';
import Footer from '../../../Components/Software Components/Footer';
import Add_Media_ContentDisp from '../../../Components/Software Components/Courses/Add_Media_ContentDisp';

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

const Add_Media_Content = () => {
  return (
    <MainWrapper>
        <Nav />
      <Content>
        <Header title="Add Content"/>
        <Add_Media_ContentDisp/>
      </Content>
      <Footer />
    </MainWrapper>
  )
}

export default Add_Media_Content
