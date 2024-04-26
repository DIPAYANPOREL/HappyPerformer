import React from 'react';
import styled from 'styled-components';
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import Footer from '../../../Components/Software Components/Footer';
import Header from '../../../Components/Software Components/Dashboard/Header';
import Add_CoursesDisp from '../../../Components/Software Components/Courses/Add_CoursesDisp';

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

const Add_Courses = () => {
  return (
    <MainWrapper>
      <Nav />
      <Content>
        <Header title="Add Course"/>
        <Add_CoursesDisp />
      </Content>
      <Footer />
    </MainWrapper>
  );
};

export default Add_Courses;
