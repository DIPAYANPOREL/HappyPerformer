import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Coder from "../../../assets/coding.svg";
import Item from "../Dashboard/Item";

const GlobalStyle = createGlobalStyle`
  body.blurred #content {
    filter: blur(3px);
    transition: filter 0.3s ease-in-out;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #0a1128;
  height: 100vh;
  color: white;
  width: ${({ isCollapsed }) => (isCollapsed ? "50px" : "250px")};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: ${({ isCollapsed }) => (isCollapsed ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 80%;
  color: white;
  background-color: #758bfd;
  height: 5%;
  border-radius: 50px;
`;

const MenuItems = styled.div`
  width: 100%;
  height: 60%;
  overflow-y: auto;
  overflow-x: hidden;
  display: ${({ isCollapsed }) => (isCollapsed ? "none" : "block")};
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #0a1128;
  }
  ::-webkit-scrollbar-thumb {
    background: #0a1128;
  }
  -ms-overflow-style: none;
  scrollbar-width: thin;
  scrollbar-color: #0a1128 #0a1128;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px 20px;
  margin-left: 10px;
`;

const DropdownItem = styled(Link)`
  padding: 5px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SVGContainer = styled.img`
  height: 120px;
  width: 100%;
  display: ${({ isCollapsed }) => (isCollapsed ? "none" : "block")};
`;

const HamburgerIcon = styled.div`
  position: absolute;
  top: 20px;
  left: ${({ isCollapsed }) => (isCollapsed ? "10px" : "220px")};
  font-size: 24px;
  cursor: pointer;
  z-index: 3;
  transition: left 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SideBar = ({ isCollapsed, onToggle }) => {
  const [dropdowns, setDropdowns] = useState({
    leaves: false,
    expense: false,
    caseManagement: false,
    addDetails: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdown]: !prevDropdowns[dropdown],
    }));
  };

  return (
    <>
      <GlobalStyle />
      <Container isCollapsed={isCollapsed}>
        <HamburgerIcon isCollapsed={isCollapsed} onClick={onToggle}>
          ≡
        </HamburgerIcon>
        <LogoContainer isCollapsed={isCollapsed}>HappyPerformer</LogoContainer>
        <MenuItems isCollapsed={isCollapsed}>
          <ItemContainer to="/dashboard">
            <Item name="Dashboard" icon="💼" />
          </ItemContainer>
          <ItemContainer to="/calendar">
            <Item name="Calendar" icon="🕵🏻‍♂️" />
          </ItemContainer>
          <ItemContainer to="/social">
            <Item name="Social" icon="📲" />
          </ItemContainer>
          <ItemContainer to="/settings">
            <Item name="Settings" icon="🕵🏻‍♂️" />
          </ItemContainer>
          <ItemContainer to="/todo">
            <Item name="To-do-list" icon="📋" />
          </ItemContainer>
          <ItemContainer to="/kra">
            <Item name="KRA" icon="💼" />
          </ItemContainer>
          <ItemContainer to="/sop">
            <Item name="SOP" icon="📋" />
          </ItemContainer>
          <ItemContainer to="/jd">
            <Item name="JD" icon="💼" />
          </ItemContainer>
          <ItemContainer to="/forms">
            <Item name="Forms" icon="📋" />
          </ItemContainer>
          <ItemContainer to="/letters">
            <Item name="Letters" icon="📋" />
          </ItemContainer>
          <ItemContainer to="/allfaq">
            <Item name="FAQs" icon="🕵🏻‍♂️" />
          </ItemContainer>
          <ItemContainer to="/training">
            <Item name="Training" icon="📋" />
          </ItemContainer>
          <ItemContainer to="/quiz">
            <Item name="Quiz" icon="📋" />
          </ItemContainer>
          <ItemContainer to="/phptuts">
            <Item name="PHP Tutorials" icon="📋" />
          </ItemContainer>
          <ItemContainer to="/myperformance">
            <Item name="My Performance" icon="📈" />
          </ItemContainer>
          <ItemContainer to="/markattendance">
            <Item name="Mark Attendance" icon="📈" />
          </ItemContainer>
          <MenuItem onClick={() => toggleDropdown("leaves")}>
            <span>Leaves</span>
            <span>&#9660;</span>
          </MenuItem>
          <DropdownMenu isOpen={dropdowns.leaves}>
            <DropdownItem to="/applyforeave">Apply for Leave</DropdownItem>
            <DropdownItem to="/leavehistory">Leave History</DropdownItem>
          </DropdownMenu>
          <ItemContainer to="/add-loan">
            <Item name="Add Loan" icon="🕵🏻‍♂️" />
          </ItemContainer>
          <ItemContainer to="/itdeclaration">
            <Item name="IT Declaration" icon="📋" />
          </ItemContainer>
          <MenuItem onClick={() => toggleDropdown("expense")}>
            <span>Expense Management</span>
            <span>&#9660;</span>
          </MenuItem>
          <DropdownMenu isOpen={dropdowns.expense}>
            <DropdownItem to="/submit-expense">Submit Expense</DropdownItem>
            <DropdownItem to="/expense-history">Expense History</DropdownItem>
          </DropdownMenu>
          <ItemContainer to="/resign">
            <Item name="Resign" icon="📋" />
          </ItemContainer>
          <MenuItem onClick={() => toggleDropdown("caseManagement")}>
            <span>Case Management</span>
            <span>&#9660;</span>
          </MenuItem>
          <DropdownMenu isOpen={dropdowns.caseManagement}>
            <DropdownItem to="/new-case">New Case</DropdownItem>
            <DropdownItem to="/case-history">Case History</DropdownItem>
          </DropdownMenu>
          <MenuItem onClick={() => toggleDropdown("addDetails")}>
            <span>Add Details</span>
            <span>&#9660;</span>
          </MenuItem>
          <DropdownMenu isOpen={dropdowns.addDetails}>
            <DropdownItem to="/add-work-experience">
              Add Work Experience
            </DropdownItem>
            <DropdownItem to="/add-project">Add Project</DropdownItem>
          </DropdownMenu>
        </MenuItems>
        <SVGContainer src={Coder} alt="coding" isCollapsed={isCollapsed} />
      </Container>
    </>
  );
};

export default SideBar;
