import React from "react";

import axios from "axios";
import styled from "styled-components";
import FooterHome from "../../Components/HomePage/FooterHome";
import InfoTemplate from "../../Components/HomePage/InfoTemplate";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import Footer from "../../Components/Software Components/Footer";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 10rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const TermsAndConditions = () => {
  axios
    .post("http://127.0.0.1:8000/terms/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Container>
      <NavbarHome />
      <MainText>Terms and Conditions</MainText>
      <InfoTemplate
        title="Terms and Conditions of Use for HR Employee Management SAAS Website"
        content="Welcome to our HR employee management SAAS website! We are excited to offer our services to help you manage your business’s HR needs. Please read these terms and conditions of use carefully before accessing or using our website. By accessing or using any part of our website, you agree to be bound by these terms and conditions."
      />
      <InfoTemplate
        title="Access and Use of Our Software"
        content="You must be at least 18 years of age to access or use our website. By accessing or using our website, you represent and warrant that you are at least 18 years old. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our website for your personal or internal business purposes only. You may not use our website for any other purpose without our prior written consent."
      />
      <InfoTemplate title="" content="" />
      <FooterHome />
      <Footer />
    </Container>
  );
};

export default TermsAndConditions;
