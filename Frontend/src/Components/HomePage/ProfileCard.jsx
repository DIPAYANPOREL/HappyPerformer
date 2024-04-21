import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  border-radius: 10px;
  padding: 5px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 2px;
  height: 420px;
  @media (max-width: 768px) {
    width: 70%;
    height: 300px;
    margin: 1.2rem 2px;
    padding: 10px;
  }
`;
const ImageContainer = styled.div`
  width: 255px;
  height: 255px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  transition: transform 0.3s ease;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    }
  }
`;
const Name = styled.h3`
  margin-top: 20px;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Role = styled.div`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 7px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ProfileCard = (props) => {
  const handleClick = () => {
    window.location.href = props.link;
  };
  return (
    <Container>
      <ImageContainer onClick={handleClick}>
        <img
          src={props.img}
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
          }}
        />
      </ImageContainer>
      <Name>{props.name}</Name>
      <Role>{props.role}</Role>
    </Container>
  );
};

export default ProfileCard;
