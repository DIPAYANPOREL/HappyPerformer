import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "../Components/Software Components/Footer.jsx";
import Nav from "../Components/Software Components/Dashboard/Nav";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 100vh;
`;

const CardContainer = styled.div``;

const Title = styled.h2`
  text-align: center;
  padding-top: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  width: 30%;
  margin-bottom: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardTitle = styled.h5`
  margin: 0;
`;

const CardText = styled.p`
  margin: 5px 0;
`;

const VideoPlayer = styled.iframe`
  width: 100%;
  height: 145px;
  border: none;
`;

const Button = styled.a`
  display: inline-block;
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Training = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/videos");
        if (
          response.data &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setVideos(response.data);
        } else {
          setVideos([]);
          console.log("No videos found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <CardContainer>
          <Title>Training Page</Title>
          <hr />
          <Row>
            {videos.length > 0 ? (
              videos.map((video) => (
                <Col key={video.id}>
                  <YouTubeVideoCard
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                    image={video.image}
                    link={video.link}
                  />
                  <PdfCard title={video.title} pdf={video.pdf} />
                  <hr />
                </Col>
              ))
            ) : (
              <p>No videos found</p>
            )}
          </Row>
        </CardContainer>
      </Container>
      <Footer />
    </>
  );
};

const YouTubeVideoCard = ({ title, channel, views, image, link }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{channel}</CardText>
        <CardText>{views}</CardText>
      </CardBody>
      <VideoPlayer
        width="100%"
        height="145"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
};

const PdfCard = ({ title, pdf }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Button href={pdf} target="_blank" rel="noopener noreferrer">
          Study Material
        </Button>
      </CardBody>
    </Card>
  );
};

export default Training;
