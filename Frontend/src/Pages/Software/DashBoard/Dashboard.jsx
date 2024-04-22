import React from "react";
import styled from "styled-components";
// import Nav from "../../../Components/Software Components/Dashboard/Nav";
// import SideBar from "../../../Components/Software Components/Dashboard/SideBar";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import NotificationSec from "../../../Components/Software Components/Dashboard/NotificationSec";
import ProfileCard from "../../../Components/Software Components/Dashboard/ProfileCard";
import TargetCard from "../../../Components/Software Components/Dashboard/TargetCard";

const Container = styled.div`
  background-color: #f1f2f6;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Cards = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 10px 0px;
    flex-wrap: wrap;
  }
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
const TopContainer = styled.div`
  width: 100%;
  padding: 20px;
`;
const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
const Dashboard = () => {
  return (
    <Container>
      <TopContainer>
        <Nav />
      </TopContainer>
      <MiddleContainer>
        <Cards>
          <TargetCard type="KRA" percentage={75} backgroundColor="#ffc107" />
          <TargetCard percentage="75" type="SOPs" />
          <TargetCard percentage="40" type="JD" />
          <TargetCard percentage="50" type="Tranning" />
        </Cards>
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
    </Container>
  );
};

export default Dashboard;
