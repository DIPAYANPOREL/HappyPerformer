import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 69%;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const GetInTouch = () => {
  return (
    <Container>
      <Wrapper>
        <Title>GET IN TOUCH</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Message" />

          <Button>CREATE MY ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default GetInTouch;
