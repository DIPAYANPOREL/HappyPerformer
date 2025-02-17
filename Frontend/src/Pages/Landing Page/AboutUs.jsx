import axios from "axios";
import React from "react";
import styled from "styled-components";
import FooterHome from "../../Components/HomePage/FooterHome";
import NavbarHome from "../../Components/HomePage/NavbarHome";
import Footer from "../../Components/Software Components/Footer";

const Container = styled.div`
  max-width: 1290px;
  margin: 5rem auto;
  padding: 2rem;

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
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: justify;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Break = styled.div`
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const AboutUs = () => {
  axios
    .post("http://127.0.0.1:8000/about/")
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
        <MainText>ABOUT US</MainText>
        <Content>
          <Paragraph>
            Welcome to HappyPerformer.com, the innovative HR software designed
            to help businesses achieve skyrocketing growth by optimizing
            employee performance, satisfaction, and overall happiness. This
            comprehensive suite of tools has all experience of HR industries'
            most successful consultants and corporate leaders knowledge working
            for you in an easy and automated way.
          </Paragraph>
          <Paragraph>
            Example - Software makes it easy for employees to track their
            performance it enables organizations to easily manage employee
            performance, training, attendance, and payroll with ease.
          </Paragraph>
          <Break />
          <Paragraph>
            With our software, you can set measurable goals for your employees
            and track their progress toward achieving them. You can also conduct
            regular performance reviews and provide feedback to help your
            employees grow and develop within their roles.
          </Paragraph>
          <Break />
          <Paragraph>
            Our platform makes it easy to identify top performers and reward
            them accordingly. Investing in your employees' professional
            development is critical to your business's success. Our HR software
            enables you to create and assign training programs, monitor
            progress, and track completion. This ensures that your team is
            equipped with the skills and knowledge they need to perform their
            jobs to the best of their ability.
          </Paragraph>
          <Break />
          <Paragraph>
            Our HR software simplifies the process of tracking employee
            attendance with customizable rules to manage time off requests and
            absences. Our system provides real-time updates on employee
            attendance, making it easy to identify patterns and take corrective
            action if necessary.
          </Paragraph>
          <Break />
          <Paragraph>
            Our software automates the payroll process, reducing the risk of
            errors and saving you valuable time. You can set up payroll
            schedules and pay rates for each employee, calculate taxes and
            deductions, and generate pay stubs with just a few clicks. With
            HappyPerformer.com, you can rest assured that your employees will
            receive accurate and timely payments.
          </Paragraph>
          <Break />
          <Paragraph>
            One of the key features of HappyPerformer.com is its emphasis on
            employee happiness. The software recognizes that happy employees are
            more productive, engaged, and committed to their work. By providing
            employees with tools to manage stress, increase job satisfaction,
            and build positive relationships with their colleagues,
            HappyPerformer.com helps businesses create a culture of happiness
            and well-being.
          </Paragraph>
          <Break />
          <Paragraph>
            Overall, HappyPerformer.com is a powerful tool for businesses
            looking to achieve both financial success and employee satisfaction.
            Its innovative approach to business growth and employee happiness
            makes it a must-have software for any business looking to achieve
            long-term success. Contact us today to learn more about how
            HappyPerformer.com can help your business.
          </Paragraph>
        </Content>
      </Container>
      <FooterHome />
      <Footer />
    </>
  );
};

export default AboutUs;
