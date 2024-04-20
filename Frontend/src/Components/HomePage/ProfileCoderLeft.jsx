import React from "react";
import styled from "styled-components";

const MiniContainer = styled.div`
  display: flex;
  height: 50vh;
  background-color: #ffecd1;
`;

const ProfileArea = styled.div`
  flex: 1;
  margin-right: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameTag = styled.h1`
  text-align: center;
`;

const TalentArea = styled.p`
  margin: 15px 6rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 200;
  justify: initial;
`;

const ImageSection = styled.img`
  height: 65%;
  border-radius: 65%;
  border: 1px solid #000;
  object-fit: cover;
`;

const ProfileCoderLeft = (props) => {
  return (
    <MiniContainer>
      <ProfileArea>
        <ImageSection src={props.photo} />
      </ProfileArea>
      <InfoArea>
        <NameTag>{props.name}</NameTag>
        <TalentArea>{props.skills}</TalentArea>
      </InfoArea>
    </MiniContainer>
  );
};

export default ProfileCoderLeft;
