import axios from "axios";
import React from "react";
import styled from "styled-components";
import FooterHome from "../../Components/HomePage/FooterHome";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import Footer from "../../Components/Software Components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  margin-top: 3rem;
`;

const MainText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 2rem 0;
  text-align: center;
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin: 1.5rem 0 1rem;
  color: #555;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
  max-width: 800px;
  text-align: left;
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
    <>
      <NavbarHome />
      <Container>
        <MainText>Terms and Conditions</MainText>
        <SectionTitle>
          Welcome to our HR Employee Management SAAS Website!
        </SectionTitle>
        <SectionContent>
          We are excited to offer our services to help you manage your
          business’s HR needs. Please read these terms and conditions of use
          carefully before accessing or using our website. By accessing or using
          any part of our website, you agree to be bound by these terms and
          conditions.
        </SectionContent>
        <SectionTitle>Access and Use of Our Website</SectionTitle>
        <SectionContent>
          You must be at least 18 years of age to access or use our website. By
          accessing or using our website, you represent and warrant that you are
          at least 18 years old. We grant you a limited, non-exclusive,
          non-transferable, revocable license to access and use our website for
          your personal or internal business purposes only. You may not use our
          website for any other purpose without our prior written consent.
        </SectionContent>
        <SectionTitle>User Accounts</SectionTitle>
        <SectionContent>
          You may need to create a user account to access certain features of
          our website. You are solely responsible for maintaining the
          confidentiality of your user account information, including your
          username and password. You agree to notify us immediately if you
          suspect any unauthorized use of your account. We reserve the right to
          terminate your user account at any time for any reason.
        </SectionContent>
        <SectionTitle>Content</SectionTitle>
        <SectionContent>
          All content on our website, including but not limited to text,
          graphics, images, software, and code, is owned by us or our licensors
          and is protected by copyright, trademark, and other intellectual
          property laws. You may not copy, modify, distribute, display,
          transmit, publish, or create derivative works from any content on our
          website without our prior written consent.
        </SectionContent>
        <SectionTitle>Prohibited Conduct</SectionTitle>
        <SectionContent>
          You agree not to engage in any conduct that could damage, disable, or
          impair our website or interfere with any other party’s use of our
          website. You also agree not to use our website for any illegal,
          fraudulent, or unauthorized purpose.
        </SectionContent>
        <SectionTitle>Disclaimer of Warranties</SectionTitle>
        <SectionContent>
          Our website is provided on an “as is” and “as available” basis. We
          make no representations or warranties of any kind, express or implied,
          as to the operation or availability of our website or the information,
          content, materials, or products included on our website. To the
          fullest extent permissible by applicable law, we disclaim all
          warranties, express or implied, including but not limited to implied
          warranties of merchantability and fitness for a particular purpose.
        </SectionContent>
        <SectionTitle>Limitation of Liability</SectionTitle>
        <SectionContent>
          We will not be liable for any damages of any kind arising from the use
          of our website, including but not limited to direct, indirect,
          incidental, punitive, and consequential damages. Some jurisdictions do
          not allow the exclusion or limitation of liability for incidental or
          consequential damages, so the above limitation may not apply to you.
        </SectionContent>
        <SectionTitle>Indemnification</SectionTitle>
        <SectionContent>
          You agree to indemnify and hold us harmless from any claims, damages,
          liabilities, and expenses, including but not limited to attorneys’
          fees, arising from your use of our website or your violation of these
          terms and conditions.
        </SectionContent>
        <SectionTitle>Governing Law</SectionTitle>
        <SectionContent>
          These terms and conditions shall be governed by and construed in
          accordance with the laws of the jurisdiction in which we are located,
          without giving effect to any choice of law or conflict of law
          provision.
        </SectionContent>
        <SectionTitle>Changes to These Terms and Conditions</SectionTitle>
        <SectionContent>
          We reserve the right to modify these terms and conditions at any time.
          You should review these terms and conditions regularly to ensure that
          you are aware of any changes. Your continued use of our website after
          any modification to these terms and conditions constitutes your
          acceptance of the modified terms and conditions.
        </SectionContent>
        <SectionTitle>Termination</SectionTitle>
        <SectionContent>
          We may terminate these terms and conditions at any time without notice
          and may deny you access to our website if you fail to comply with
          these terms and conditions.
        </SectionContent>
        <SectionContent>
          If you have any questions or concerns about these terms and
          conditions, please contact us.
        </SectionContent>
      </Container>
      <FooterHome />
      <Footer />
    </>
  );
};

export default TermsAndConditions;
