import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
  color: #333;
`;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FormGroup = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const Resignation = () => {
  const [formData, setFormData] = useState({
    joiningDate: "",
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
    exitInterviewDays: "",
    lastWorkingDay: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/resignation", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <Header title="Resignation" />
        <Container>
          <FormContainer>
            <FormGroup>
              <Label>Joining Date</Label>
              <Input
                type="date"
                name="joiningDate"
                defaultValue="0000-00-00"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Year Of Service</Label>
              <Input type="text" value="2024 years 5 months" readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Resignation Submitted on</Label>
              <Input
                type="text"
                name="resignationSubmittedOn"
                placeholder="mm/dd/yyyy"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Expected Leaving Date</Label>
              <Input
                type="date"
                name="expectedLeavingDate"
                defaultValue="2024-05-02"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Notice Period Required Days</Label>
              <Input
                type="number"
                name="noticePeriodRequiredDays"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Primary Reason For Leaving</Label>
              <Select name="primaryReasonForLeaving" onChange={handleChange}>
                <option value="">Please Select</option>
                <option value="">Better Compensation</option>
                <option value="">Better Work Environment</option>
                <option value="">Better Leadership</option>
                <option value="">Career Advancement</option>
                <option value="">Profile Switch</option>
                <option value="">Company Reconstruction</option>
                <option value="">Company Downturn</option>
                <option value="">Relocation</option>
                <option value="">Job Termination</option>
                <option value="">Personal Reasons</option>
                <option value="">Others</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Secondary Reason For Leaving</Label>
              <Select name="secondaryReasonForLeaving" onChange={handleChange}>
                <option value="">Please Select</option>
                <option value="">Better Compensation</option>
                <option value="">Better Work Environment</option>
                <option value="">Better Leadership</option>
                <option value="">Career Advancement</option>
                <option value="">Profile Switch</option>
                <option value="">Company Reconstruction</option>
                <option value="">Company Downturn</option>
                <option value="">Relocation</option>
                <option value="">Job Termination</option>
                <option value="">Personal Reasons</option>
                <option value="">Others</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Any Additional Reason For Leaving</Label>
              <Select name="additionalReasonForLeaving" onChange={handleChange}>
                <option value="">Please Select</option>
                <option value="">Better Compensation</option>
                <option value="">Better Work Environment</option>
                <option value="">Better Leadership</option>
                <option value="">Career Advancement</option>
                <option value="">Profile Switch</option>
                <option value="">Company Reconstruction</option>
                <option value="">Company Downturn</option>
                <option value="">Relocation</option>
                <option value="">Job Termination</option>
                <option value="">Personal Reasons</option>
                <option value="">Others</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Leaving Date</Label>
              <Input
                type="date"
                name="leavingDate"
                placeholder="mm/dd/yyyy"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Notice Period Served Days</Label>
              <Input
                type="number"
                name="noticePeriodServedDays"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Settlement From Date</Label>
              <Input
                type="date"
                name="settlementFromDate"
                placeholder="mm/dd/yyyy"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Notice Period Shortfall Days</Label>
              <Input
                type="number"
                name="noticePeriodShortfallDays"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Exit Interview Days</Label>
              <Input
                type="date"
                name="exitInterviewDays"
                placeholder="mm/dd/yyyy"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Working Day</Label>
              <Input
                type="date"
                name="lastWorkingDay"
                placeholder="mm/dd/yyyy"
                onChange={handleChange}
              />
            </FormGroup>
          </FormContainer>
          <Button onClick={handleSubmit}>SAVE DETAILS</Button>
        </Container>
      </Layout>
    </>
  );
};

export default Resignation;
