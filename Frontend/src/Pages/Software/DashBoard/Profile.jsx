import React from "react";
import styled from "styled-components";
import SideBar from "../../../Components/Software Components/Dashboard/SideBar";

const Container = styled.div`
  background-color: #f1f2f6;
  padding: 10px;
`;

const Profile = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <Profile>
        {/* Your profile content goes here */}
      </Profile>
    </Container>
  );
};

export default Dashboard;