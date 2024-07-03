import React from "react";
import styled from "styled-components";
import Image1 from "../../assets/medium-shot-happy-people-working.jpg";
import Image2 from "../../assets/businesspersons-meeting.jpg";

const Container = styled.div`
  padding: 1rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const UpperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LowerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  width: 270px;
  margin: 0.5rem 6rem;
  width: 30%;
  border-radius: 20px;
`;

const Info = styled.div`
  padding: 0.5rem;
  margin: 1.5rem;
  width: 40%;
  letter-spacing: 0.5px;
`;

const Heading = styled.h2`
  color: #111729;
`;

const Cakewalk = () => {
  return (
    <Container>
      <UpperRow>
        <Image src={Image1} />
        <Info>
          <Heading>Automated Employee Management</Heading>
          Our revolutionary technology resolves daily employee issues and
          automates outcomes. Job descriptions, KRAs/KPIs, SOPs, and
          personalized To-Do Lists with Calendars are all managed automatically.
        </Info>
      </UpperRow>
      <LowerRow>
        <Info>
          <Heading>Happy Performer's Ecosystem</Heading>
          Start with our user-friendly setup, enhance your performance
          effortlessly, and enjoy a happier work-life balance. Achieve personal
          and professional growth in a supportive and efficient environment.
        </Info>
        <Image src={Image2} />
      </LowerRow>
    </Container>
  );
};

export default Cakewalk;
