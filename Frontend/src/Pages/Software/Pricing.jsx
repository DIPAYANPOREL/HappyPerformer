import CloseIcon from "@mui/icons-material/Close";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Software Components/Footer.jsx";
import bicycle from "../../assets/bicycle.svg";
import car from "../../assets/car.svg";
import airplane from "../../assets/airplane.svg";
import rupeeIcon from "../../assets/rupee.svg";

// Styled Components
const PricingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  padding: 50px;
  height: 50%;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  padding: 1rem;
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
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease; // Added hover effect
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px); // Added hover effect
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); // Added hover effect
  }
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
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0;
  text-align: center;
`;

const TableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  margin: 0.5rem 0;
  &.cross {
    text-decoration: line-through;
    color: #888;
  }
`;

const TableBuy = styled.div`
  text-align: center;
`;

const Super = styled.sup`
  font-size: 1rem;
  font-weight: 700;
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
//Pricing cards Code
const Pricing = () => {
  return (
    <>
      <Container>
        <PricingTableTitle>
          Choose the most suitable plan for your organisation!
        </PricingTableTitle>
        {/* Card */}
        <PricingWrapper>
          <PricingCard>
            <PricingTitle>
              Basic
              <img src={bicycle} alt="Bicycle" height="90px" width="90px" />
            </PricingTitle>
            <Price>
              <img src={rupeeIcon} alt="Rupee" height="25px" width="25px" />
              1485<Super>/ month</Super>
            </Price>
            <TableList>
              <ListItem>Total Number of Employees: 50</ListItem>
              <ListItem>
                Beyond Limit:
                <img src={rupeeIcon} alt="Rupee" height="13px" width="25px" />
                15 per employee
              </ListItem>
              <ListItem>
                {" "}
                <CloseIcon style={{ color: "#ff1744" }} />
                JD Auto Check
              </ListItem>
              <ListItem>
                <CloseIcon style={{ color: "#ff1744" }} />
                SOP Auto Check
              </ListItem>
              <ListItem>
                <CloseIcon style={{ color: "#ff1744" }} />
                Trainerless Learning
              </ListItem>
              <ListItem>
                <CloseIcon style={{ color: "#ff1744" }} />
                Live Performance Tracking Graph
              </ListItem>
              <ListItem>
                {" "}
                <TaskAltOutlinedIcon /> Calender Automation
              </ListItem>
              <ListItem>
                {" "}
                <TaskAltOutlinedIcon /> KRA Auto Check
              </ListItem>
              <ListItem>
                {" "}
                <TaskAltOutlinedIcon />
                To-Do-List Automation
              </ListItem>
              <ListItem>
                {" "}
                <TaskAltOutlinedIcon />
                Manager As Motivator
              </ListItem>
            </TableList>
            <TableBuy>
              <Price>
                <img src={rupeeIcon} alt="Rupee" height="20px" width="25px" />
                1485<Super>/ month</Super>
              </Price>
              <PricingAction>Get Started!</PricingAction>
            </TableBuy>
          </PricingCard>

          <PricingCard recommended>
            <PricingTitle>
              Intermediate
              <br />
              <img src={car} alt="car" height="90px" width="90px" />
            </PricingTitle>
            <Price>
              <img src={rupeeIcon} alt="Rupee" height="25px" width="25px" />
              2485<Super>/ month</Super>
            </Price>
            <TableList>
              <ListItem>Total Number of Employees: 100</ListItem>
              <ListItem>
                Beyond Limit:
                <img src={rupeeIcon} alt="Rupee" height="13px" width="25px" />
                20 per employee
              </ListItem>
              <ListItem>
                <CloseIcon style={{ color: "#ff1744" }} />
                Trainerless Learning
              </ListItem>
              <ListItem>
                <CloseIcon style={{ color: "#ff1744" }} />
                Live Performance Tracking Graph
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                JD Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                SOP Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                Calender Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                KRA Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                To-Do-List Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                Manager As Motivator
              </ListItem>
            </TableList>
            <TableBuy>
              <Price>
                <img src={rupeeIcon} alt="Rupee" height="20px" width="25px" />
                2485<Super>/ month</Super>
              </Price>
              <PricingAction>Get Started!</PricingAction>
            </TableBuy>
          </PricingCard>

          <PricingCard best>
            <PricingTitle>
              Premium
              <br />
              <img src={airplane} alt="airplane" height="80px" width="90px" />
            </PricingTitle>
            <Price>
              <img src={rupeeIcon} alt="Rupee" height="25px" width="25px" />
              4885<Super>/ month</Super>
            </Price>
            <TableList>
              <ListItem>Total Number of Employees: 200</ListItem>
              <ListItem>
                Beyond Limit:
                <img src={rupeeIcon} alt="Rupee" height="13px" width="25px" />
                30 per employee
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                Calender Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                KRA Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                To-Do-List Automation
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                Manager As Motivator
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                JD Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                SOP Auto Check
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                Trainerless Learning
              </ListItem>
              <ListItem>
                <TaskAltOutlinedIcon />
                Live Performance Tracking Graph
              </ListItem>
            </TableList>
            <TableBuy>
              <Price>
                <img src={rupeeIcon} alt="Rupee" height="20px" width="25px" />
                4885<Super>/ month</Super>
              </Price>
              <PricingAction>Get Started!</PricingAction>
            </TableBuy>
          </PricingCard>
        </PricingWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Pricing;
