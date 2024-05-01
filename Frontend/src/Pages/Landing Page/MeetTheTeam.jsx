import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import ProfileCard from "../../Components/HomePage/ProfileCard";
import TeamFooter from "../../Components/HomePage/TeamFooter";
import TeamHeader from "../../Components/HomePage/TeamHeader";
import Akshita from "../../assets/Akshita.png";
import Anuja from "../../assets/Anuja.png";
import Brain from "../../assets/Brainnnn.svg";
import Lama from "../../assets/Lama.png";
import Logo3 from "../../assets/Logo3.svg";
import Prathmesh from "../../assets/Prathmesh.png";
import Shalav from "../../assets/ShalavD.jpeg";
import Team2 from "../../assets/Team2.svg";

const Container = styled.div`
  background-color: #fff;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;
`;
const MeetTeam = styled.div`
  height: 760px;
  background-color: #0a1128;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto 40px;
  border-bottom-right-radius: 990px;
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
  color: white;
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
  font-size: 18px;
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
  height: 320px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a1128;
  padding: 40px;
`;
const BrainText = styled.h3`
  font-size: 30px;
  display: flex;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const BrainImg = styled.img`
  height: 40%;
  margin-right: 1rem;
  @media (max-width: 768px) {
    height: 30%;
  }
`;

const TeamTextImpact = styled.h3`
  font-size: 40px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
 text-align: center;
background: linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  animation: shine 4.5s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
@media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Head = styled.div`
  display: flex;
  height: 550px;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 1rem auto;
  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;
const LeftText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: bold;
  }
`;
const RightText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  line-height: 1.8rem;
  margin: 1.4rem 1.8rem;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding: 10px;
    margin: 10px;
  }
`;
const PhotoContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const PhotoSection = styled.img`
  height: 370px;
  width: 370px;
  object-fit: cover;
  border-radius: 17%;
  transition: transform 0.3s ease;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    height: 250px;
    width: 250px;
    margin: 1rem auto;
  }
`;
const Text = styled.div`
  flex: 1;
  gap:2
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const DownText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  line-height: 1rem;
  font-size: 500;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin: 0.7rem 1.4rem;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding: 10px;
    margin: 10px;
  }
`;

const MeetTheTeam = () => {
  return (
    <Container>
      <TeamHeader />
      <MeetTeam>
        <Center>
          <TeamTextImpact>Meet Our Team</TeamTextImpact>
          <TeamTextImpact>WHO WORK TO CREATE AN</TeamTextImpact>
          <TeamTextImpact>IMPACT</TeamTextImpact>
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
            way!
          </MiniContent>
        </HeroContent>
        <HeroImage src={Logo3} />
      </HeroSection>
      {/* TeamMembers.. */}
      <Brains>
        <BrainImg src={Brain} />
        <BrainText>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [" The Brains Behind The Software"],
            }}
          />
        </BrainText>
      </Brains>
      {/* About The Head */}
      <Head>
        <PhotoContainer>
          <a href="https://www.linkedin.com/in/icanhelpu/">
            <PhotoSection src={Shalav} />
          </a>
        </PhotoContainer>
        <Text>
          <LeftText>Mr.Shalav Daftaur</LeftText>
          <RightText>
            After heading the world's leading HR outsourcing companies for more
            than two decades, Shalav knew what is the exact pain of the business
            world and how that can be solved by managing a better performance of
            employees and at the same time keeping them engaged and happy. With
            this in mind, Shalav is on the journey to automate elements of
            business which is not done yet as per business heads and owners'
            vision for growth. Shalav with his wide and hands-on experience with
            the technology world's changes heads the project directed at
            sky-rocketing business profits and people happiness index.
          </RightText>
          <DownText>We hope you will enjoy the new journey!</DownText>
        </Text>
      </Head>
      {/* Team Members ithe yenar */}
      <TeamMembers>
        <ProfileCard
          img={Prathmesh}
          name="Prathmesh Takalkar"
          role="Team Lead - Full Stack Developer"
          link="https://www.linkedin.com/in/prathmesh-takalkar"
        />
        <ProfileCard
          img={Akshita}
          name="Akshita Vijayvergiya"
          role="Manager - Full Stack Developer -  Designer "
          link="https://www.linkedin.com/in/akshita-vijayvergiya"
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
      <TeamFooter />
    </Container>
  );
};
export default MeetTheTeam;
