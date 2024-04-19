import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../Components/Software Components/Footer";
import logo2 from "../../assets/logo2.png";

const Container = styled.div`
  min-height: 80vh;
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 95vw;
  width: 60%;
  position: relative;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
`;

const Divider = styled.div`
  background-color: #6659e0;
  color: white;
  padding: 11px 15px;
  cursor: default;
  user-select: none;
  margin-bottom: 1.5rem;
  width: inherit;
`;

const Logo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem; /* Adjusted left position */
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem; /* Adjusted width */
  height: auto;

  @media (max-width: 768px) {
    top: 0.5rem;
    left: 0.5rem;
    width: 6rem;
  }
`;

const ImageA = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  border: none;
  padding: 11px 15px;
  background-color: #ff7d00;
  color: #fff;
  cursor: pointer;
  border-radius: 9px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6659e0;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #8576ff;
  color: white;

  &:hover {
    background-color: #5d4ac8;
  }
`;

const DepartmentInputContainer = styled.div`
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: calc(50% - 10px);
  right: -25px;
  transform: translateY(-50%);
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(100% - 30px);
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const Register = () => {
  const [departmentInputs, setDepartmentInputs] = useState([
    "",
    "Super Manager",
    "Manager",
    "HR",
  ]);

  const handleCloneDepartment = () => {
    const lastDepartmentInput = departmentInputs[departmentInputs.length - 1];
    const newDepartmentInputs = [...departmentInputs, lastDepartmentInput];
    setDepartmentInputs(newDepartmentInputs);
  };

  const handleDeleteDepartment = (index) => {
    if (index !== 0) {
      const newDepartmentInputs = [...departmentInputs];
      newDepartmentInputs.splice(index, 1);
      setDepartmentInputs(newDepartmentInputs);
    }
  };

  const handleInputChange = (index, value) => {
    const newDepartmentInputs = [...departmentInputs];
    newDepartmentInputs[index] = value;
    setDepartmentInputs(newDepartmentInputs);
  };

  const ButtonRow = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin: 0.5rem 5rem 2rem 0.1rem;
  `;

  const CloneButton = styled(Button)`
    align-self: flex-end;
    margin: 10px;
  `;

  const ResetButton = styled(Button)`
    background-color: #ff0000;
  `;

  const handleResetDepartment = () => {
    setDepartmentInputs(["", "Super Manager", "Manager", "HR"]);
  };

  return (
    <>
      <Container>
        <Center>
          <FormLogin>
            <Logo>
              <ImageA src={logo2} alt="Logo" />
            </Logo>
            <Title>Company's Registration</Title>

            <Divider>Company Details</Divider>
            <Input type="text" required placeholder="Company Name" />
            <Input type="address" required placeholder="Address" />
            <Input type="phone" required placeholder="Contact Number" />

            <Divider>Department Name</Divider>
            {departmentInputs.map((input, index) => (
              <DepartmentInputContainer key={index}>
                <Input
                  type="text"
                  required={index === 0}
                  placeholder="Department Name"
                  value={input}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {index !== 0 && (
                  <DeleteButton onClick={() => handleDeleteDepartment(index)}>
                    Delete
                  </DeleteButton>
                )}
              </DepartmentInputContainer>
            ))}

            <ButtonRow>
              <ResetButton onClick={handleResetDepartment}>
                Reset Department
              </ResetButton>
              <CloneButton onClick={handleCloneDepartment}>
                Clone last row and add at end
              </CloneButton>
            </ButtonRow>

            <Divider>Employee Details</Divider>
            <Input
              type="text"
              required
              placeholder="Employee Name"
              autoComplete="name"
            />
            <Input type="email" required placeholder="Email" />
            <Input type="tel" required placeholder="Phone Number" />
            <Input type="text" required placeholder="Skills" />

            <ButtonContainer>
              <Button>Reset</Button>
              <PrimaryButton>Register</PrimaryButton>
            </ButtonContainer>
          </FormLogin>
        </Center>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
