import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(to bottom, white, #f4f6fd, white);
  padding: 60px 20px;
  border-radius: 15px;
  margin: 40px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 40px 10px;
    width: 90%;
  }
`;

const MainText = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 25px;
  width: 75%;
  @media (max-width: 768px) {
    font-size: 28px;
    width: 100%;
  }
`;

const MiniText = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 30px;
  width: 50%;
  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`;

const Btn = styled.a`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: white;
  background-color: #1e4ae4;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #1540b4;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const GetInTouch = () => {
  return (
    <Container>
      <MainText>Want to Learn More about Happyperformer?</MainText>
      <MiniText>
        We'd love to chat with you about how our product can support your
        company!
      </MiniText>
      <Btn href="/contact">Get In Touch</Btn>
    </Container>
  );
};

export default GetInTouch;
