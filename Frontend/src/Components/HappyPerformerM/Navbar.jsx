import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Happy from "../../assets/logo2.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LogoCont = styled.img`
  height: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  &:hover {
    color: #1e4ae4;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled(Link)`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => (props.primary ? "#1e4ae4" : "#f4f6fd")};
  color: ${(props) => (props.primary ? "white" : "#1e4ae4")};
  border: none;
  &:hover {
    background-color: ${(props) => (props.primary ? "#1540b4" : "#e0e7ef")};
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <LogoCont src={Happy} />
      </Link>
      <MenuItems>
        <MenuItem to="/terms-and-conditions">Terms And Conditions</MenuItem>
        <MenuItem to="/pricing">Pricing</MenuItem>
        <MenuItem to="/company">Company</MenuItem>
        <MenuItem to="/meet-the-team">Meet The Team</MenuItem>
      </MenuItems>
      <Buttons>
        <Button to="/get-started" primary>
          GET STARTED
        </Button>
        <Button to="/login">LOG IN</Button>
      </Buttons>
    </Container>
  );
};

export default Navbar;
