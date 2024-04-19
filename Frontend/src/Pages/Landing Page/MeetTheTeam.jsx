import React from "react";
import styled from "styled-components";
import ProfileCard from "../../Components/HomePage/ProfileCard";
import Akshita from "../../assets/Akshita.png";
import Anuja from "../../assets/Anuja.png";
import Lama from "../../assets/Lama.png";
import Prathmesh from "../../assets/Prathmesh.png";
import Team1 from "../../assets/Team1.svg";
import Team2 from "../../assets/Team2.svg";
import Ideas from "../../assets/ideas.svg";

const Container = styled.div`
  background-color: #f3f7ff;
`;
const MeetTeam = styled.div`
  height: 920px;
  background-color: #ffecd1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto 40px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.img`
  height: 45vh;
  max-width: 85%;
`;

const ColoredContent = styled.h2`
  color: #0a2463;
  font-size: 3.5rem;
`;
const NormalContent = styled.h2`
  margin: 2rem auto;
  font-size: 3rem;
`;

const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  padding: 30px;
  background-color: #222831;
`;

const HeroSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a2463;
  color: white;
  padding: 40px;
  margin: auto;
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
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222831;
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
        <Left>
          <ImageContainer src={Team1} />
        </Left>
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
        <HeroImage src={Ideas} />
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
