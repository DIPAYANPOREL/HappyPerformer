import React from "react";
import styled from "styled-components";
import SideBar from "../../../Components/Software Components/Dashboard/SideBar";

const Container = styled.div`
  background-color: #f1f2f6;
  padding: 10px;
`;

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
    </Container>
  );
};

export default Dashboard;
