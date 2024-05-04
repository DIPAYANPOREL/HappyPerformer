import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import styled from "styled-components";
import Pt from "../../../assets/Prathmesh.png";

const Container = styled.div`
  height: 275px;
  width: 355px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

const Department = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Mail = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 10px;
`;

const Tel = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 5px;
`;

const ProfileCard = () => {
  return (
    <Container>
      <ProfileInfo>
        <Pic src={Pt} />
        <Name>Prathmesh Takalkar</Name>
        <Department>HR</Department>
      </ProfileInfo>
      <ContactInfo>
        <Mail>
          <EmailOutlinedIcon
            style={{ color: "black", fontSize: 20, marginRight: "5px" }}
          />
          takalkarprathmesh@gmail.com
        </Mail>
        <Tel>
          <CallOutlinedIcon
            style={{ color: "black", fontSize: 20, marginRight: "5px" }}
          />
          +91 7875741706
        </Tel>
      </ContactInfo>
    </Container>
  );
};

export default ProfileCard;
