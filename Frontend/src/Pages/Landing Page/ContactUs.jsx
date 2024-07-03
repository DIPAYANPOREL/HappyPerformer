import axios from "axios";
import React from "react";
import styled from "styled-components";
import FooterHome from "../../Components/HomePage/FooterHome";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import Footer from "../../Components/Software Components/Footer";

const Container = styled.div`
  max-width: 1290px;
  margin: 5rem auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 3rem 2rem;
    flex-direction: column;
  }
`;

const MainText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem 1rem;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CompanyName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: justify;
  }
`;

const Break = styled.br`
  margin: auto;
`;

const MapContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Map = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ccc;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ContactUs = () => {
  axios
    .post("http://127.0.0.1:8000/contact/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <NavbarHome />
      <MainText>Contact Us</MainText>
      <Container>
        <Content>
          <CompanyName>HappyPerformer.com</CompanyName>
          <ContactInfo>
            Parent company - Salahkaar Consultants
            <Break />
            Address: Office # 2A and 2B, Pillar H, Opp. Silver Line, Near
            Ganpati Chowk, Viman Nagar, Pune 411 014, India.
            <Break />
            Landmark: Kiddies Oxford.
            <Break />
            Email: Ren@SalahkaarConsultants.com
            <Break />
            Phone: +91.9975012222
          </ContactInfo>
        </Content>
        <MapContainer>
          <Map />
        </MapContainer>
      </Container>
      <FooterHome />
      <Footer />
    </>
  );
};

export default ContactUs;
