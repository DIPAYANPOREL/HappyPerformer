import React from "react";
import styled from "styled-components";
import Update_MediaDisp from "../../../Components/Software Components/Courses/Update_MediaDisp";
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import Header from '../../../Components/Software Components/Dashboard/Header';
import Footer from '../../../Components/Software Components/Footer';


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

const Update_Media = () => {
    return (
        <MainWrapper>
            <Nav />
            <Content>
                <Header title="Update Content" />
                <Update_MediaDisp />
            </Content>
            <Footer />
        </MainWrapper>
    );
};

export default Update_Media;
