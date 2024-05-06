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
  padding: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled(Link)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
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
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #000;
    cursor: pointer;
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
          <ListItem to={"/about"}>About Us</ListItem>
          <ListItem to={"/meet-the-team"}>Meet The Team</ListItem>
          <ListItem to={"/contact"}>Contact Us</ListItem>
          <ListItem to={"/FrequentQuestions"}>FAQ's</ListItem>
          <ListItem to={"/privacypolicy"}>Privacy Policy</ListItem>
          <ListItem to={"/terms"}>Terms and Conditions</ListItem>
          <ListItem to={"/videoref"}>Video References</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlined /> Pune,Maharashtra - India
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
