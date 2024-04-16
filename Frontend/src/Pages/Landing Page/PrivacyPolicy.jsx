import React from "react";
import styled from "styled-components";
import FooterHome from "../../Components/HomePage/FooterHome";
import NavbarHome from "../../Components/HomePage/NavbarHome";

const Container = styled.div`
  max-width: 1290px;
  margin: 5rem auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 3rem auto;
  }
`;

const MainText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Content = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem 2rem;
    text-align: justify;
  }
`;
const Break = styled.br`
  margin: auto;
`;
const PrivacyPolicy = () => {
  return (
    <>
      <NavbarHome />
      <Container>
        <MainText>Privacy Policy</MainText>
        <Content>
          We are committed to protecting your privacy and ensuring the security
          of your personal information. This privacy policy outlines how we
          collect, use, and disclose the information you provide us.
          <Break />
          Information We Collect: When you visit our website, we may collect
          information such as your name, email address, phone number, and
          company name. We may also collect information about your use of our
          website, such as pages visited and actions taken. We use cookies to
          collect this information.
          <Break />
          Use of Information: We use the information we collect to provide our
          services to you, including managing your employee data, providing
          customer support, and improving our website and services. We may also
          use your information to communicate with you about our products and
          services, and to send you marketing materials.
          <Break />
          Disclosure of Information: We may share your personal information with
          third-party service providers who help us provide our services, such
          as hosting providers, payment processors, and customer support
          providers. We may also disclose your personal information if required
          by law or to protect our rights or the rights of our users.
          <Break />
          Security: We take reasonable steps to protect your personal
          information from unauthorized access, use, or disclosure. We use
          industry-standard encryption and security measures to protect your
          information.
          <Break />
          Third-Party Links: Our website may contain links to third-party
          websites. We are not responsible for the privacy practices or content
          of these websites. We encourage you to review the privacy policies of
          these websites before providing them with your personal information.
          <Break />
          Changes to Privacy Policy: We may update this privacy policy from time
          to time. Any changes will be posted on our website. By continuing to
          use our website, you consent to the updated privacy policy.
          <Break />
          Contact Us: If you have any questions about our privacy policy, please
          contact us at HappyPerformer.com, Parent company - Salahkaar
          Consultants, Address: Office # 2A and 2B, Pillar H, Opp. Silver Line,
          Near Ganpati Chowk, Viman Nagar, Pune 411 014, India. Landmark:
          Kiddies Oxford.
          <Break />
          Email: Ren@SalahkaarConsultants.com Phone: +91.9975012222
        </Content>
      </Container>
      <FooterHome />
    </>
  );
};

export default PrivacyPolicy;
