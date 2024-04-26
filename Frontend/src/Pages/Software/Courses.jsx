import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/Software Components/Dashboard/Nav';
import Footer from '../../Components/Software Components/Footer';
import CoursesHeader from '../../Components/Software Components/CoursesHeader';
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
  align-items: center; /* Center content horizontally */
  padding: 20px; /* Increased padding for better spacing */
`;

const Courses = () => {
  return (
    <MainWrapper>
      <Nav />
      <Content>
        <CoursesHeader />
        <CoursesDisp />
      </Content>
      <Footer />
    </MainWrapper>
  );
};

export default Courses;
