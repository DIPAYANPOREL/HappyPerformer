import {
  AssignmentIndOutlined,
  CalendarMonth,
  FindInPageOutlined,
  StorageOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";

import React from "react";
import styled from "styled-components";
import zoho_ss from "../../assets/zoho_ss.png";

const Container = styled.div`
  width: 80%%;
  height: 100vh;
  margin: 20px 10%;
`;

const TextArea = styled.h1`
  margin: 20px 50px 10% 50px;
  text-align: center;
`;
const MiniContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
`;
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PointsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0px;
  flex: 1;
`;
const FunctionTD = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 0%;
  font-size: 1.1rem;
`;
const MiniText = styled.div`
  margin-left: 5%;
  margin-bottom: 40px;
  font-size: 1.3rem;
`;

const FunctionsContainer = styled.div`
  margin: 10px 55% 10px 0px;
  display: flex;
  flex-direction: column;
`;

// const FunctionsContainer = styled.div`
//   margin: 15% 10% 0px 0px ;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(2, auto);
//   gap: 20px;
//   justify-content: center;
// `;

const ImageA = styled.img`
  width: 100%;
  height: 70vh;
  width: 40vw;
  object-fit: fit;
`;

const TodoAgenda = () => {
  return (
    <Container>
      <TextArea>
        Our revolutionary technology has solved the puzzle of resolving
        day-to-day employee’s issues and has automated the desired outcomes
      </TextArea>
      <MiniContainer>
        <ImageSection>
          <ImageA src={zoho_ss} />
        </ImageSection>
        <PointsSection>
          <MiniText>
            Data-driven insights, seamless solutions. From conflicts to
            performance, we've got you covered. Effortless support, maximum
            success. 🚀 #StreamlineSuccess
          </MiniText>
          <FunctionsContainer>
            <FunctionTD>
              {" "}
              <FindInPageOutlined style={{ marginRight: "6px" }} /> Job
              Descriptions
            </FunctionTD>
            <FunctionTD>
              {" "}
              <AssignmentIndOutlined style={{ marginRight: "6px" }} /> Key
              Performance Indicator
            </FunctionTD>
            <FunctionTD>
              <VerifiedOutlined style={{ marginRight: "6px" }} />
              Statement Of Purpose
            </FunctionTD>
            <FunctionTD>
              <StorageOutlined style={{ marginRight: "6px" }} /> To-Do List{" "}
            </FunctionTD>
            <FunctionTD>
              <CalendarMonth style={{ marginRight: "6px" }} /> Calendar
              Scheduler{" "}
            </FunctionTD>
          </FunctionsContainer>
        </PointsSection>
      </MiniContainer>
    </Container>
  );
};

export default TodoAgenda;
