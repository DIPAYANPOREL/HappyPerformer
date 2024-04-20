import React from "react";
import styled from "styled-components";
import ProfileCard from "../../Components/HomePage/ProfileCard";
import Akshita from "../../assets/Akshita.png";
import Anuja from "../../assets/Anuja.png";
import Lama from "../../assets/Lama.png";
import Logo3 from "../../assets/Logo3.svg";
import Prathmesh from "../../assets/Prathmesh.png";
import Team2 from "../../assets/Team2.svg";

const Container = styled.div`
  background-color: #fff;
`;
const MeetTeam = styled.div`
  height: 920px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto 40px;
  border-bottom-right-radius: 990px;
  border-radius: ;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex: 1;
    margin-top: 40px;
    h1 {
      font-size: 2px !important;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex: 2;
    margin-top: 40px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
const ImageContainer = styled.img`
  height: 45vh;
  max-width: 85%;
  @media (max-width: 768px) {
    height: 20vh;
  }
`;

const ColoredContent = styled.h2`
  color: #fff;
  font-size: 3.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 10px;
  }
`;
const NormalContent = styled.h2`
  margin: 2rem auto;
  font-size: 3rem;
  color: #e6e6e6;
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 10px;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  padding: 30px;
  background-color: #fff;
`;

const HeroSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: black;
  padding: 40px;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: auto 20px;
`;
const MainContent = styled.h3`
  font-size: 30px;
`;
const MiniContent = styled.p`
  font-size: 15px;
  margin-top: 20px;
  line-height: 1.2rem;
`;
const HeroImage = styled.img`
  padding: 40px;
  width: 100%;
  height: 45vh;
  max-width: 85%;
`;

const Brains = styled.div`
  height: 230px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 40px;
`;
const BrainText = styled.h3`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const MeetTheTeam = () => {
  return (
    <Container>
      <MeetTeam>
        <Center>
          <ColoredContent>MEET OUR TEAM</ColoredContent>
          <NormalContent>WHO WORK TO CREAT AN</NormalContent>
          <ColoredContent>IMPACT</ColoredContent>
        </Center>
        <Right>
          <ImageContainer src={Team2} />
        </Right>
      </MeetTeam>
      {/* Section Second */}
      <HeroSection>
        <HeroContent>
          <MainContent>
            Our Team Of Creators, Designers And World Class Problem Solvers
          </MainContent>
          <MiniContent>
            To be the company our customers want us to be, it takes an eclectic
            group of passionate operators. Get to know the people leading the
            way at Untitled.
          </MiniContent>
        </HeroContent>
        <HeroImage src={Logo3} />
      </HeroSection>
      {/* TeamMembers.. */}
      <Brains>
        <BrainText>Meet The Brains Behind The Software</BrainText>
      </Brains>
      <TeamMembers>
        <ProfileCard
          img={Prathmesh}
          name="Prathmesh Takalkar"
          role="Team Lead - Full Stack Developer"
        />
        <ProfileCard
          img={Akshita}
          name="Akshita Vijayvergiya"
          role="Manager - Full Stack Developer -  Designer "
        />
        <ProfileCard
          img={Lama}
          name="Priyank Jain"
          role="Front End Developer "
        />
        <ProfileCard
          img={Anuja}
          name="Anuja Sakulkar"
          role="Back End Developer "
        />
        <ProfileCard img={Lama} name="Shawn Pinto" role="Front End Developer" />
        <ProfileCard
          img={Lama}
          name="Derek Dsouza"
          role="Front End Developer"
        />
      </TeamMembers>
    </Container>
  );
};

export default MeetTheTeam;
