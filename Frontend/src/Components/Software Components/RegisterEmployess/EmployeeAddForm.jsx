import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  width: 60%;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 10px;
  }
`;

const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const InputBar = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    height: 30px;
    margin-bottom: 10px;
  }
`;

const TextBar = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DeptSelect = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    height: 30px;
    margin-bottom: 10px;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077b6;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0077b4;
  }
  @media (max-width: 768px) {
    height: 30px;
    margin-bottom: 10px;
  }
`;

const PlanDetails = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #666;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const EmployeeAddForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("localhostkaaddress", formData);
      console.log("Employee registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering employee:", error);
    }
  };

  return (
    <Container>
      <FormCont onSubmit={handleSubmit}>
        <TextBar>Full Name</TextBar>
        <InputBar
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <TextBar>Email</TextBar>
        <InputBar name="email" value={formData.email} onChange={handleChange} />

        <TextBar>Phone</TextBar>
        <InputBar name="phone" value={formData.phone} onChange={handleChange} />

        <TextBar>Department</TextBar>
        <DeptSelect
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">SuperManager</option>
          <option value="">HR</option>
          <option value="">Manager</option>
          <option value="">Employee</option>
        </DeptSelect>

        <TextBar>Skills</TextBar>
        <InputBar
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <SubmitBtn type="submit">Register</SubmitBtn>

        <PlanDetails>Your ongoing plan: premium</PlanDetails>
        <PlanDetails>Total employees registered in the portal: 29</PlanDetails>
        <PlanDetails>Total employee limit of your plan: 50</PlanDetails>
      </FormCont>
    </Container>
  );
};
export default EmployeeAddForm;
