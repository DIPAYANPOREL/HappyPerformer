import React from 'react'
import styled from 'styled-components'
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import Footer from '../../../Components/Software Components/Footer';
import Header from '../../../Components/Software Components/Dashboard/Header';
import Update_Delete_MediaDisp from '../../../Components/Software Components/Courses/Update_Delete_MediaDisp';


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
    <MainWrapper>
      <Nav />
      <Content>
        <Header title="Update Training"/>
        <Update_Delete_MediaDisp/>
      </Content>
      <Footer />
    </MainWrapper>
  )
}

export default Update_Delete_Media
