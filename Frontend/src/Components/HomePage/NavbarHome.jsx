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

const GetStarted = styled.button`
   {
    display: inline-block;
    border-radius: 50px;
    transition: all 0.4s ease-in-out;
    padding: 10px 27px;
    background-color: f79d44;
    border: 2px solid var(--gray-color);
    color: var(--text-gray);
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
  }
  &:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-white);
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
