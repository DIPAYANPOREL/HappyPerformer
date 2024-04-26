import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/Software Components/Dashboard/Nav';
import Footer from '../../Components/Software Components/Footer';
import Header from '../../Components/Software Components/Dashboard/Header';
import CoursesDisp from '../../Components/Software Components/CoursesDisp';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f1f2f6;
  padding: 10px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Courses = () => {
  return (
    <MainWrapper>
      <Nav />
      <Content>
        <Header title="Add Course"/>
        <CoursesDisp />
      </Content>
      <Footer />
    </MainWrapper>
  );
};

export default Courses;
