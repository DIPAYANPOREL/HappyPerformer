import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Software Components/Dashboard/Header";
import Layout from "../Components/Software Components/Dashboard/Layout";

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 10) {
      validationErrors.password = "Password should be at least 10 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <Layout>
      <Header title="Settings" />
      <Form onSubmit={handleSubmit}>
        <div className="public-info">
          <Heading>Public Information</Heading>
          <InputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              onChange={handleChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              onChange={handleChange}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </InputContainer>
          <InputContainer>
            <Label>Phone</Label>
            <Input
              type="text"
              name="phone"
              placeholder="Phone"
              autoComplete="off"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>Skills</Label>
            <Input
              type="text"
              name="skills"
              placeholder="Skills"
              autoComplete="off"
              onChange={handleChange}
            />
          </InputContainer>
        </div>
        <div className="password-section">
          <Heading>Password Section</Heading>
          <InputContainer>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {errors.password && <Error>{errors.password}</Error>}
          </InputContainer>
          <InputContainer>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
          </InputContainer>
        </div>
        <Button type="submit">Save Changes</Button>
      </Form>
    </Layout>
  );
};

export default SettingsPage;
