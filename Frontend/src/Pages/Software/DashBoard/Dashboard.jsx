import React from "react";
import styled from "styled-components";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import NotificationSec from "../../../Components/Software Components/Dashboard/NotificationSec";
import ProfileCard from "../../../Components/Software Components/Dashboard/ProfileCard";
import TargetCard from "../../../Components/Software Components/Dashboard/TargetCard";
import SideBar from "../../../Components/Software Components/Dashboard/SideBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto; /* Enable vertical scrolling */
`;

const SideBarContainer = styled.div`
  width: 20%; 
  background-color: #ffffff; 
  overflow-y: hidden; 
  position: fixed; 
  left: 0; 
  top: 0; 
  bottom: 0; 
`;

const ContentArea = styled.div`
  flex: 1; /* Occupy the remaining space */
  display: flex;
  flex-direction: column;
  margin-left: 30%; /* Adjust margin to accommodate the sidebar */
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
  margin: 10px;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const NotificationSection = styled.div`
  width: 40%;
  height: 300px;
  padding: 20px;
  background-color: #f1f2f6;
  overflow-y: auto;
  margin: 10px;
`;

const LeaderBoard = styled.div``;

const Dashboard = () => {
  return (
    <Container>
      <Nav />
      <ContentContainer>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <ContentArea>
          <MiddleContainer>
            <div>
              <TargetCard type="KRA" percentage="100" backgroundColor="#ffc107" />
              <TargetCard percentage="75" type="SOPs" />
              <TargetCard percentage="40" type="JD" />
              <TargetCard percentage="50" type="Training" />
            </div>
            <ProfileCard />
          </MiddleContainer>
          <BottomContainer>
            <NotificationSection>
              <NotificationSec />
              <NotificationSec />
              <NotificationSec />
            </NotificationSection>
            <LeaderBoard></LeaderBoard>
          </BottomContainer>
        </ContentArea>
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
