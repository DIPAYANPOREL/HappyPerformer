import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;

  @media (max-width: 600px) {
    flex: none;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 600px) {
    font-weight: semi-bold;
  }
`;

const GetStarted = styled.div`
  background-color: #ff8c00;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 25px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffc02b;
  }
`;

const Login = styled.div`
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 25px;
  cursor: pointer;
`;
const NavbarHome = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>HappyPerformer!</Logo>
        </Left>
        <Right>
          <Login>LOGIN</Login>
          <GetStarted>GET STARTED</GetStarted>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavbarHome;
