import React from 'react'
import styled from 'styled-components'
import Footer from "../../Components/Software Components/Footer";

const Container = styled.div`
  min-height: 100vh;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid lightgray;
  max-width: 95vw;
  width: 100%;
  box-sizing: border-box;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  border: none;
  padding: 11px 15px;
  background-color: #FF7D00;
  color: white;
  cursor: pointer;
  border-radius: 9px;
  &:hover {
    background-color: #6659e0;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Divider = styled.div`
  background-color: #8576ff;
  color: white;
  padding: 11px 15px;
  border-radius: 9px;
  cursor: default;
  user-select: none;
  pointer-events: none;
`;

const CloneButton = styled(Button)`
  align-self: flex-end;
  background-color: #FF7D00;
`;

const Register = () => {
  return (
    <>
      <Container>
        <Center>
          <Title>Company's Registration</Title>
          <FormLogin>
            <Input type="text" required placeholder="Company Name" />
            <Input type="text" required placeholder="Address" />
            <Input type="phone" required placeholder="Contact Number" />
            <Divider>Department Name</Divider>
            <Input type="text" required placeholder="Department Details" />
            <Input type="text" required defaultValue="Super Manager" />
            <Input type="text" required defaultValue="Manager" />
            <Input type="text" required defaultValue="HR" />
            <CloneButton>Clone last row and add at end</CloneButton>
            <Divider>Employee Details</Divider>
            <Input type="text" required placeholder="Employee Name" />
            <Input type="email" required placeholder="Email" />
            <Input type="phone" required placeholder="Number" />
            <Input type="text" required placeholder="Skills" />
            <Button>Register</Button>
          </FormLogin>
        </Center>
      </Container>
      <Footer />
    </>
  )
}

export default Register
