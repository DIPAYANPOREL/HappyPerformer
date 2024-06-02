import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
`;

const Title = styled.div`
  font-size: 15px;
  margin-bottom: 0.5rem;
  color: #4a4a4a;
  text-align: center;
`;

const InputCalRes = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
`;

const Reasons = styled.select`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
`;

const Option = styled.option`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #0077b6;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0px;
  cursor: pointer;
  border-radius: 5px;
`;

const ResignForm = ({
  joiningDate,
  onJoiningDateChange,
  yearsOfService,
  onYearsOfServiceChange,
}) => {
  const [formData, setFormData] = useState({
    resignationSubmittedOn: "",
    expectedLeavingDate: "",
    noticePeriodRequiredDays: "",
    primaryReasonForLeaving: "",
    secondaryReasonForLeaving: "",
    additionalReasonForLeaving: "",
    leavingDate: "",
    noticePeriodServedDays: "",
    settlementFromDate: "",
    noticePeriodShortfallDays: "",
    exitInterviewDate: "",
    lastWorkingDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/resign", formData);
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGrid>
          <div>
            <Title>RESIGNATION SUBMITTED ON</Title>
            <InputCalRes
              type="date"
              name="resignationSubmittedOn"
              value={formData.resignationSubmittedOn}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>EXPECTED LEAVING DATE</Title>
            <InputCalRes
              type="date"
              name="expectedLeavingDate"
              value={formData.expectedLeavingDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>NOTICE PERIOD REQUIRED DAYS</Title>
            <Input
              type="number"
              name="noticePeriodRequiredDays"
              value={formData.noticePeriodRequiredDays}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>PRIMARY REASON FOR LEAVING</Title>
            <Reasons
              name="primaryReasonForLeaving"
              value={formData.primaryReasonForLeaving}
              onChange={handleChange}
            >
              <Option value="option 1">Option 1</Option>
              <Option value="option 2">Option 2</Option>
              <Option value="option 3">Option 3</Option>
              <Option value="option 4">Option 4</Option>
              <Option value="option 5">Option 5</Option>
              <Option value="option 6">Option 6</Option>
            </Reasons>
          </div>
          <div>
            <Title>SECONDARY REASON FOR LEAVING</Title>
            <Reasons
              name="secondaryReasonForLeaving"
              value={formData.secondaryReasonForLeaving}
              onChange={handleChange}
            >
              <Option value="option 1">Option 1</Option>
              <Option value="option 2">Option 2</Option>
              <Option value="option 3">Option 3</Option>
              <Option value="option 4">Option 4</Option>
              <Option value="option 5">Option 5</Option>
              <Option value="option 6">Option 6</Option>
            </Reasons>
          </div>
          <div>
            <Title>ANY ADDITIONAL REASON FOR LEAVING</Title>
            <Reasons
              name="additionalReasonForLeaving"
              value={formData.additionalReasonForLeaving}
              onChange={handleChange}
            >
              <Option value="option 1">Option 1</Option>
              <Option value="option 2">Option 2</Option>
              <Option value="option 3">Option 3</Option>
              <Option value="option 4">Option 4</Option>
              <Option value="option 5">Option 5</Option>
              <Option value="option 6">Option 6</Option>
            </Reasons>
          </div>
          <div>
            <Title>LEAVING DATE</Title>
            <InputCalRes
              type="date"
              name="leavingDate"
              value={formData.leavingDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>NOTICE PERIOD SERVED DAYS</Title>
            <Input
              type="number"
              name="noticePeriodServedDays"
              value={formData.noticePeriodServedDays}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>SETTLEMENT FROM DATE</Title>
            <InputCalRes
              type="date"
              name="settlementFromDate"
              value={formData.settlementFromDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>NOTICE PERIOD SHORTFALL DAYS</Title>
            <Input
              type="number"
              name="noticePeriodShortfallDays"
              value={formData.noticePeriodShortfallDays}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>EXIT INTERVIEW DATE</Title>
            <InputCalRes
              type="date"
              name="exitInterviewDate"
              value={formData.exitInterviewDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>LAST WORKING DATE</Title>
            <InputCalRes
              type="date"
              name="lastWorkingDate"
              value={formData.lastWorkingDate}
              onChange={handleChange}
            />
          </div>
        </FormGrid>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  );
};

export default ResignForm;
