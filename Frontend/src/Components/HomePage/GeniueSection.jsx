import { Source } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import video from "../../assets/happyperformer-home.mp4";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
      margin-top: 80px;
  margin-bottom: 80px;
`;
const VideoSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 135px;
`;

const ContentHeader = styled.h1`
  font-weight: 700;
  margin: 30px 0px;
`;
const ContentPara = styled.p`
  font-size: 18px;
  text-align: left;
  margin: 0px 4.5% 0px 20.5%;
  line-height: 1.2;
`;

const StartedBtn = styled.button`
  font-size: 15px;
  margin-left: 25px;
  background-color: white;
  border: none;
  background-color: red;
  padding: 10px 15px;
  border-radius: 11px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  margin: 30px 0px;
`;

const Typewriter = styled.h1`
  margin-left: 10px;
  display: inline-block;
  font-weight: 700;
  font-size: 32px;
  overflow: hidden; /* Ensure text doesn't overflow */
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin-right: 10px;

  animation: typewriter 2s steps(40) forwards;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    font-size: 25px;
  }
`;

const Video = styled.video`
    margin-top: 100px;
  width: 80%;
  height: auto;
`;

const GeniueSection = () => {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <Typewriter>Your Growth Genie Has Arrived!</Typewriter>
        </ContentHeader>
        <ContentPara>
          Introducing HappyPerformer.com - where skyrocketing growth meets
          boundless happiness! Unlocking peak profits, unleashing top-notch
          employee performance, and spreading joy across your organization. Get
          ready to thrive like never before! 🚀✨{" "}
        </ContentPara>
        <StartedBtn>GET STARTED</StartedBtn>
      </Content>
      <VideoSection>
        <Video controls autoplay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoSection>
    </Container>
  );
};

export default GeniueSection;
