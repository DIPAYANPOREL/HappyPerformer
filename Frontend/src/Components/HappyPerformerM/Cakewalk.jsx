import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(to bottom, white, #f4f6fd, white);
  padding: 60px 20px;
  border-radius: 15px;
  text-align: center;
  height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const TopContainer = styled.div`
  margin: 40px auto;
`;

const MainText = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const MiniText = styled.p`
  font-size: 20px;
  color: #666;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 30px 20px;
  max-width: 300px;
  text-align: left;
  flex: 1;
  margin: 10px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #1e4ae4;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const TexT = styled.h2`
  font-size: 24px;
  color: #1e4ae4;
  margin-bottom: 10px;
  text-align: center;
`;

const Desc = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

const Cakewalk = () => {
  return (
    <Container>
      <TopContainer>
        <MainText>Implementing our software is a cakewalk</MainText>
        <MiniText>
          Our three pillars that help in the implementation are
        </MiniText>
      </TopContainer>
      <BottomContainer>
        <Card>
          <Icon></Icon>
          <TexT>IMPLEMENTATION TEAM</TexT>
          <Desc>
            Our implementation team will take care of the entire end-to-end
            implementation.
          </Desc>
        </Card>
        <Card>
          <Icon></Icon>
          <TexT>EXCELLENT CUSTOMER CARE</TexT>
          <Desc>
            For more than 90% clients, we provide immediate to one hour response
            time. For the rest, we respond within 4 hours.
          </Desc>
        </Card>
        <Card>
          <Icon></Icon>
          <TexT>LEARN TO AUTOMATE</TexT>
          <Desc>
            The ongoing customer training is the right place to learn about the
            best practices and ways to automate it.
          </Desc>
        </Card>
      </BottomContainer>
    </Container>
  );
};

export default Cakewalk;
