import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-height: 420px;
  max-width: 320px;
  height: 440px;
  width: 320px;
  color: #000;
  background-color: #ffecd1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 31.33%;
    margin: 1%;
  }
`;

const ImageContainer = styled.div`
  background-color: #fff;
  height: 70%;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  padding: 0 10px;
`;

const Name = styled.h3`
  margin: 0.5rem 0;
  font-size: 24px;
  font-weight: 600;
`;

const Position = styled.h4`
  margin: 0.2rem 0;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

const SocialContainer = styled.div`
  display: flex;
  margin: 20px auto;
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: fill 0.2s ease-in-out;
 
  &:hover {
    transform: scale(1.1);
     cursor: pointer;
`;

const ProfileCard = (props) => {
  return (
    <Container>
      <ImageContainer>
        <img src={props.img} alt="Profile Picture" />
      </ImageContainer>
      <InfoContainer>
        <Name>{props.name}</Name>
        <Position>{props.role}</Position>
        <SocialContainer>
          <SocialIcon color="#0077b5">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="#171515">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProfileCard;
