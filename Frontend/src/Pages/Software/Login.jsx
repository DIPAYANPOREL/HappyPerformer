import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Software Components/Footer";
import LogoTwo from "../../assets/Login2.svg";
import LogoOne from "../../assets/login1.svg";

const Container = styled.div`
  height: 735px;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 50vh;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
const Title = styled.h2`
  color: #333;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-top: 5rem;
`;
const Button = styled.button`
  width: 7vw;
  border: none;
  padding: 11px 15px;
  background-color: #8576ff;
  color: white;
  cursor: pointer;
  margin: 1rem auto;
  border-radius: 9px;
  &:hover {
    background-color: #6659e0;
  }
  @media (max-width: 768px) {
    width: 30vw;
  }
`;

const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  width: 25vw;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const ForgotPass = styled.a`
  color: #666;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.img`
  height: 45vh;
  max-width: 85%;
`;
const MainContainer = styled.div``;
const Login = () => {
  return (
    <MainContainer>
      <Container>
        <Left>
          <ImageContainer src={LogoOne} />
        </Left>
        <Center>
          <Title>Employee's Login</Title>
          <FormLogin>
            <Input type="email" required placeholder="Email" />
            <Input type="password" required placeholder="Password" />
            <ForgotPass>Forgot Password?</ForgotPass>
            <Button> Login</Button>
          </FormLogin>
        </Center>
        <Right>
          <ImageContainer src={LogoTwo} />
        </Right>
      </Container>
      <Footer />
    </MainContainer>
  );
};

export default Login;
