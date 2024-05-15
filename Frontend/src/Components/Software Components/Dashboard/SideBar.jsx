import React from "react";
import styled from "styled-components";
import Coder from "../../../assets/coding.svg";
import Item from "./Item";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #0a1128;
  height: 100vh;
  color: white;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: white;
  // background-color: #758bfd;
  background-color: #0077b6;
  height: 7%;
  border-radius: 50px;
`;

const MenuItems = styled.div`
  width: 100%;
  height: 60%;
  overflow-y: auto;
`;

const SVGContainer = styled.img`
  height: 120px;
  width: 100%;
`;

const SideBar = () => {
  return (
    <Container>
      <LogoContainer>HappyPerformer</LogoContainer>
      <MenuItems>
        <Item name="Dashboard" icon="💼" />
        <Item name="Social" icon="📲" />
        <Item name="To-do-list" icon="📋" />
        <Item name="My Performance" icon="📈" />
        <Item name="Mark Attendance" icon="🕵🏻‍♂️" />
        {/* Add more items as needed */}
      </MenuItems>
      <SVGContainer src={Coder} />
    </Container>
  );
};

export default SideBar;
