import {
  Facebook,
  Instagram,
  LinkedIn,
  LocationOnOutlined,
  Mail,
  Phone,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactItem = styled(Link)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  color: #000;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #000;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterHome = () => {
  return (
    <Container>
      <Left>
        <Logo>Salahkaar Consultants</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          error obcaecati voluptates accusantium iste. Beatae dolorem nostrum
          iusto? Nam eos necessitatibus similique illo optio corporis sit
          commodi mollitia ipsum odio?
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="blue">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem to={"/"}>Home</ListItem>
          <ListItem to={"/aboutus"}>About Us</ListItem>
          <ListItem to={"/meettheteam"}>Meet The Team</ListItem>
          <ListItem to={"/contactus"}>Contact Us</ListItem>
          <ListItem to={"/FrequentQuestions"}>FAQ's</ListItem>
          <ListItem to={"/privacypolicy"}>Privacy Policy</ListItem>
          <ListItem to={"/termsandconditions"}>Terms and Conditions</ListItem>
          <ListItem to={"/videoref"}>Video References</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlined /> Pune, Maharashtra - India
        </ContactItem>
        <ContactItem>
          <Phone /> +91 9975012222
        </ContactItem>
        <ContactItem>
          <Mail type="email" />
          Ren@SalahkaarConsultants.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default FooterHome;
