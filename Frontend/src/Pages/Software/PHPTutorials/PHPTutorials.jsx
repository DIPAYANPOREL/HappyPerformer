import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

const WhiteContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  border: 5px solid black;
`;

const PHPTutorials = ({ videoId }) => {
  return (
    <>
      <Layout>
        <Header title="Tutorials" />
        <Container>
          <h1>Tutorial Videos</h1>
          <WhiteContainer>
            <VideoContainer>
              {Array.from({ length: 30 }, (_, i) => (
                <ResponsiveIframe
                  key={i}
                  src={`https://www.youtube.com/embed/videoId${i + 1}`}
                  title={`PHP Tut ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></ResponsiveIframe>
              ))}
            </VideoContainer>
          </WhiteContainer>
        </Container>
      </Layout>
    </>
  );
};

export default PHPTutorials;
