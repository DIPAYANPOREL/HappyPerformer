import React from "react";
import styled from "styled-components";

// Styled Components
const PricingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
`;

const PricingTableTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;
const PricingCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.recommended &&
    `
    background-color: #e6f2ff;
  `}
  ${(props) =>
    props.best &&
    `
    background-color: #d9e9ff;
  `}
`;

const PricingTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const TableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  &.cross {
    text-decoration: line-through;
    color: #888;
  }
`;

const TableBuy = styled.div`
  text-align: center;
`;

const PricingAction = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const PricingPage = (props) => {
  return (
    <PricingWrapper>
      <PricingCard>
        <PricingTitle>
          {props.plantype}
          <br />
          {/* <img src={paperPlaneIcon} alt="Paper Plane" height="50px" width="50px" /> */}
        </PricingTitle>
        <Price>
          {/* <img src={rupeeIcon} alt="Rupee" height="25px" width="25px" /> */}
          {props.amount}
          <sup>/ month</sup>
        </Price>
        <TableList>
          <ListItem>
            Total Number of Employees: <span>{props.numberOfEmployees}</span>
            <br />
            Beyond Limit:
            {/* <img src={rupeeIcon} alt="Rupee" height="13px" width="25px" /> */}
            <span>{props.employeesPM} per employee</span>
          </ListItem>
          <ListItem>Calender Automation</ListItem>
          <ListItem>KRA Auto Check</ListItem>
          <ListItem>To-Do-List Automation</ListItem>
          <ListItem>Manager As Motivator</ListItem>
          <ListItem className="cross">JD Auto Check</ListItem>
          <ListItem className="cross">SOP Auto Check</ListItem>
          <ListItem className="cross">Trainerless Learning</ListItem>
          <ListItem className="cross">Live Performance Tracking Graph</ListItem>
        </TableList>
        <TableBuy>
          <Price>
            {/* <img src={rupeeIcon} alt="Rupee" height="20px" width="25px" /> */}
            {props.amount}
            <sup>/ month</sup>
          </Price>
          <PricingAction>Get Started!</PricingAction>
        </TableBuy>
      </PricingCard>
    </PricingWrapper>
  );
};

export default PricingPage;
