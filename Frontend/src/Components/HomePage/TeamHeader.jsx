import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #0a1128;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 2px rgba(255, 255, 255, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: auto 15px;
  cursor: pointer;
`;
const Logo = styled.img`
  margin-top: 0px;
  width: 200px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 600px) {
    font-weight: semi-bold;
  }
`;
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: auto 15px;
`;
const Item = styled(Link)`
  text-decoration: none;
  color: white;
  border: none;
  margin: auto 20px;
  font-size: 14px;
  cursor: pointer;
  padding: 10px 15px;
  transition: all 0.5s ease;
  border-radius: 10px;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
`;
const TeamHeader = () => {
  return (
    <Container>
      <LogoContainer></LogoContainer>
      <MenuItems>
        <Item to={"/"}>HOME</Item>
        <Item to={"/login"}>LOGIN</Item>
      </MenuItems>
    </Container>
  );
};

export default TeamHeader;
