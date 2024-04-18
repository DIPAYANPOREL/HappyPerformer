import React from "react";
import styled from "styled-components";
import ProfileCard from "../../Components/HomePage/ProfileCard";
import LogoTwo from "../../assets/Login2.svg";
import Prathmesh from "../../assets/Prathmesh.png";
import LogoOne from "../../assets/login1.svg";

const Container = styled.div`
  background-color: #f3f7ff;
`;
const MeetTeam = styled.div`
  height: 100vh;
  background-color: #ffecd1;
  display: flex;
  justify-content: center;
  align-items: center;
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

const HeroSection = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  flex: 1;
  margin-left: 2rem;
  padding: 20px;
`;
const HeroContentHead = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroContentMini = styled.h4`
  margin-top: 1rem;
  text-align: center;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: black;
  height: 100vh;
`;
const MeetTheTeam = () => {
  return (
    <Container>
      <MeetTeam>
        <Left>
          <ImageContainer src={LogoOne} />
        </Left>
        <Center>
          <ColoredContent>MEET OUR TEAM</ColoredContent>
          <NormalContent>WHO WORK TO CREAT AN</NormalContent>
          <ColoredContent>IMPACT</ColoredContent>
        </Center>
        <Right>
          <ImageContainer src={LogoTwo} />
        </Right>
      </MeetTeam>
      {/* Section Second */}
      <HeroSection>
        <HeroContent>
          <HeroContentHead>
            Our Team Of Creator, Designer And World Class Problem Solver
          </HeroContentHead>
          <HeroContentMini>
            To be the company our customers want us to be, it takes an eclectic
            group of passionate operators. Get to know the people leading the
            way at Salahkaar.
          </HeroContentMini>
        </HeroContent>
        <HeroImage>
          <ImageContainer src={LogoOne} />
        </HeroImage>
      </HeroSection>
      {/* TeamMembers.. */}
      <TeamMembers>
        <ProfileCard
          name="Prathmesh Takalkar"
          info="Full Stack Developer , UI UX Developer and a team lead"
          img={Prathmesh}
        />
      </TeamMembers>
    </Container>
  );
};

export default MeetTheTeam;
