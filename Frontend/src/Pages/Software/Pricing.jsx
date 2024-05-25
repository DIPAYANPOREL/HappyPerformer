import CloseIcon from "@mui/icons-material/Close";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "../../Components/Software Components/Footer.jsx";
import airplane from "../../assets/airplane.svg";
import bicycle from "../../assets/bicycle.svg";
import car from "../../assets/car.svg";
import rupeeIcon from "../../assets/rupee.svg";

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f0f2f5;
    padding: 0;
    margin: 0;
  }
`;

const PricingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  width: 100%;
`;

const PricingTableTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const PricingCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.recommended &&
    `
    background-color: #e6f2ff;
    border: 2px solid #007bff;
  `}

  ${(props) =>
    props.best &&
    `
    background-color: #d9e9ff;
    border: 2px solid #0056b3;
  `}
`;

const PricingTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const IconImage = styled.img`
  height: 80px;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1.5rem 0;
`;

const TableList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  width: 100%;
  text-align: left;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;

  &.cross {
    text-decoration: line-through;
    color: #888;
  }
`;

const TableBuy = styled.div`
  margin-top: 1.5rem;
`;

const Super = styled.sup`
  font-size: 1rem;
  font-weight: 700;
`;

const PricingAction = styled.button`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Pricing = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/register");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <PricingTableTitle>
          Choose the most suitable plan for your organisation!
        </PricingTableTitle>
        <PricingWrapper>
          <PricingCard>
            <PricingTitle>Basic</PricingTitle>
            <IconImage src={bicycle} alt="Bicycle" />
            <Price>
              <img src={rupeeIcon} alt="Rupee" height="25px" />
              1485<Super>/ month</Super>
            </Price>
            <TableList>
              <ListItem>Total Number of Employees: 50</ListItem>
              <ListItem>
                Beyond Limit: <img src={rupeeIcon} alt="Rupee" height="13px" />{" "}
                15 per employee
              </ListItem>
              <ListItem className="cross">
                <CloseIcon style={{ color: "#ff1744" }} /> JD Auto Check
              </ListItem>
              <ListItem className="cross">
                <CloseIcon style={{ color: "#ff1744" }} /> SOP Auto Check
              </ListItem>
              <ListItem className="cross">
                <CloseIcon style={{ color: "#ff1744" }} /> Trainerless Learning
              </ListItem>
              <ListItem className="cross">
                <CloseIcon style={{ color: "#ff1744" }} /> Live Performance
                Tracking Graph
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Calendar Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> KRA Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> To-Do-List Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Manager As Motivator
              </ListItem>
            </TableList>
            <TableBuy>
              <Price>
                <img src={rupeeIcon} alt="Rupee" height="20px" />
                1485<Super>/ month</Super>
              </Price>
              <PricingAction onClick={handleGetStartedClick}>
                Get Started!
              </PricingAction>
            </TableBuy>
          </PricingCard>

          <PricingCard recommended>
            <PricingTitle>Intermediate</PricingTitle>
            <IconImage src={car} alt="Car" />
            <Price>
              <img src={rupeeIcon} alt="Rupee" height="25px" />
              2485<Super>/ month</Super>
            </Price>
            <TableList>
              <ListItem>Total Number of Employees: 100</ListItem>
              <ListItem>
                Beyond Limit: <img src={rupeeIcon} alt="Rupee" height="13px" />{" "}
                20 per employee
              </ListItem>
              <ListItem className="cross">
                <CloseIcon style={{ color: "#ff1744" }} /> Trainerless Learning
              </ListItem>
              <ListItem className="cross">
                <CloseIcon style={{ color: "#ff1744" }} /> Live Performance
                Tracking Graph
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> JD Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> SOP Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Calendar Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> KRA Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> To-Do-List Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Manager As Motivator
              </ListItem>
            </TableList>
            <TableBuy>
              <Price>
                <img src={rupeeIcon} alt="Rupee" height="20px" />
                2485<Super>/ month</Super>
              </Price>
              <PricingAction onClick={handleGetStartedClick}>
                Get Started!
              </PricingAction>
            </TableBuy>
          </PricingCard>

          <PricingCard best>
            <PricingTitle>Premium</PricingTitle>
            <IconImage src={airplane} alt="Airplane" />
            <Price>
              <img src={rupeeIcon} alt="Rupee" height="25px" />
              4885<Super>/ month</Super>
            </Price>
            <TableList>
              <ListItem>Total Number of Employees: 200</ListItem>
              <ListItem>
                Beyond Limit: <img src={rupeeIcon} alt="Rupee" height="13px" />{" "}
                30 per employee
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Calendar Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> KRA Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> To-Do-List Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Manager As Motivator
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> JD Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> SOP Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Trainerless Learning
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon /> Live Performance Tracking Graph
              </ListItem>
            </TableList>
            <TableBuy>
              <Price>
                <img src={rupeeIcon} alt="Rupee" height="20px" />
                4885<Super>/ month</Super>
              </Price>
              <PricingAction onClick={handleGetStartedClick}>
                Get Started!
              </PricingAction>
            </TableBuy>
          </PricingCard>
        </PricingWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Pricing;
