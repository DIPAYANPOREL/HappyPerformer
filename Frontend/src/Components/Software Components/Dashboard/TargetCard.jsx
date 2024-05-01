import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 275px;
  background-color: #f2f2f2;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 20px 20px 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Percentage = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #4caf50;
`;

const SectionPart = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

const Text1 = styled.div`
  font-size: 16px;
  color: #666;
  margin-top: 20px;
`;

const Text2 = styled.div`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

const TargetCard = (props) => {
  return (
    <Container>
      <Percentage>{props.percentage}%</Percentage>
      <SectionPart>{props.type} Completed</SectionPart>
      <Text1>
        {props.percentage < 50 ? (
          <>
            You are not even half way completed, speed up!go to this page to
            check your {props.type}.
          </>
        ) : props.percentage == 100 ? (
          <>Well done, no more {props.type} for now!</>
        ) : (
          <>Good Going, go to this page to check your {props.type}.</>
        )}
      </Text1>
      <Text2>Also don't forget to rate yourself!</Text2>
    </Container>
  );
};

export default TargetCard;
