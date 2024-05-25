import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../Components/Software Components/Footer";
import LogoTwo from "../../assets/Login2.svg";
import LogoOne from "../../assets/login1.svg";

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  margin-top: 5rem;
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
  margin: 40px auto;
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
  background-color: #0a1128;
  color: white;
  cursor: pointer;
  margin: 1rem auto;
  border-radius: 9px;
  &:hover {
    transform: scale(1.1);
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    axios
      .post("http://127.0.0.1:8000/login/", data)
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Login failed. Please check your credentials and try again.");
      });
  };

  return (
    <MainContainer>
      <Container>
        <Left>
          <ImageContainer src={LogoOne} />
        </Left>
        <Center>
          <Title>Employee's Login</Title>
          <FormLogin>
            <Input
              type="email"
              value={email}
              required
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <ForgotPass>Forgot Password?</ForgotPass>
            <Button onClick={handleLogin}>Login</Button>
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
