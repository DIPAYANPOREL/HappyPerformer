import React from "react";
import styled from "styled-components";
import logo2 from "../../assets/logo2.png";

const Container = styled.div`
  height: 90px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 1;
  background-color: white;
`;

const Wrapper = styled.div`
  list-style-type: none;
  overflow: hidden;

  padding: 8px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Logo = styled.img`

  margin-top: 0px;
  width: 200px;
  height: 70px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 600px) {
    font-weight: semi-bold;
  }
`;

const GetStarted = styled.button`
  padding: 10px 27px;
  display: inline-block;
  border-radius: 50px;
  transition: all 0.4s ease-in-out;
  background-color: #3e92cc;
  border: none;
  color: #000;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    background-color: #3e92cc;
    border-color: #3e92cc;
    color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(62, 146, 204, 0.5);
  }
`;

const Login = styled.button`
  letter-spacing: 2px;
  border-radius: 50px;
  background-color: white;
  display: inline-block;
  transition: all 0.4s ease-in-out;
  text-transform: uppercase;
  border: none;
  padding: 10px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #ffecd1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffecd1;
  }
`;
const NavbarHome = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={ logo2 } />
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
