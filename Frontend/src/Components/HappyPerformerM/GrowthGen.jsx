import React from "react";
import styled from "styled-components";
import video from "../../assets/happyperformer-home.mp4";

const Container = styled.div`
  background: linear-gradient(to bottom, white, #f4f6fd, white);
  padding: 60px 20px;
  border-radius: 15px;
  margin: auto;
  min-width: 1000px;
  text-align: center;
`;

const ContentSec = styled.div`
  margin-bottom: 40px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 25px;
  max-width: 40%;
`;

const Mini = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 30px;
  max-width: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.a`
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => (props.primary ? "white" : "#0077B6")};
  background-color: ${(props) => (props.primary ? "#0077B6" : "white")};
  border: ${(props) => (props.primary ? "none" : "2px solid #0077B6")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#005f8a" : "#f0f4ff")};
  }
`;

const VideoSec = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

const GrowthGen = () => {
  return (
    <Container>
      <ContentSec>
        <Title>The easiest way to automate HR tasks</Title>
        <Mini>
          Give your greatest asset the tools to connect, engage, and communicate
          with Happyperformer!
        </Mini>
        <ButtonContainer>
          <Button href="/get-started" primary>
            Get Started
          </Button>
          <Button href="/learn-more">Learn More</Button>
        </ButtonContainer>
      </ContentSec>
      <VideoSec>
        <Video controls autoplay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoSec>
    </Container>
  );
};

export default GrowthGen;
