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
`;

const LogoCont = styled.img`
  height: 50px;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  &:hover {
    color: #0077b6;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => (props.primary ? "#0077B6" : "#f4f6fd")};
  color: ${(props) => (props.primary ? "white" : "#0077B6")};
  border: none;
  &:hover {
    background-color: ${(props) => (props.primary ? "#005f8a" : "#e0e7ef")};
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
