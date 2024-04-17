import React from "react";
import styled from "styled-components";
import FooterHome from "../../Components/HomePage/FooterHome";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import ProfileCoderLeft from "../../Components/HomePage/ProfileCoderLeft";
import ProfileCoderRight from "../../Components/HomePage/ProfileCoderRight";
import Akshita from "../../assets/Akshita.png";
import Anuja from "../../assets/Anuja.png";
import Lama from "../../assets/Lama.png";
import Prathmesh from "../../assets/Prathmesh.png";

const Container = styled.div`
  height: 100vh;
`;
const IntroExtro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  background-color: black;
  color: #fff;
`;
const Bottom = styled.div``;
const Title = styled.h1``;
const Para = styled.p`
  margin: 1.5rem auto;
`;

const MeetTheTeam = () => {
  return (
    <Container>
      <NavbarHome />
      <IntroExtro>
        <Title>Meet The Team</Title>
        <Para>Team Work n all etc</Para>
      </IntroExtro>
      <Bottom>
        {/* <ProfileCoderLeft
          name="Superman Shalav"
          skills="   Batman Better Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum, nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto a iste nisi minus corrupti quidem sit mollitia? Corporis,
          voluptates pariatur."
          photo={Lama}
        /> */}
        <ProfileCoderRight
          name="Prathmesh"
          skills="UI UX .. orem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto a iste nisi minus corrupti quidem sit mollitia? Corporis,
          voluptates pariatur."
          photo={Prathmesh}
        />
        <ProfileCoderLeft
          name="Akshita"
          skills="loreorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto a iste nisi minus corrupti quidem sit mollitia? Corporis,
          voluptates pariaturm"
          photo={Akshita}
        />
        <ProfileCoderRight
          name="Derek"
          skills="loreorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto a iste nisi minus corrupti quidem sit mollitia? Corporis,
          voluptates pariaturm"
          photo={Lama}
        />
        <ProfileCoderLeft
          name="Anuja"
          skills="loreorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto a iste nisi minus corrupti quidem sit mollitia? Corporis,
          voluptates pariaturm"
          photo={Anuja}
        />
        <ProfileCoderRight
          name="Priyank"
          skills="loreorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto a iste nisi minus corrupti quidem sit mollitia? Corporis,
          voluptates pariaturm"
          photo={Lama}
        />
        <ProfileCoderLeft
          name="Shawn"
          skills="loreorem ipsum dolor, sit amet consectetur adipisicing elit.
          Architecto a iste nisi minus corrupti quidem sit mollitia? Corporis,
          voluptates pariaturm"
          photo={Lama}
        />
      </Bottom>
      <IntroExtro>
        <Title>And Many More!</Title>
        <Para>Baki Chutiye bhi to hai</Para>
      </IntroExtro>

      <FooterHome />
    </Container>
  );
};

export default MeetTheTeam;
