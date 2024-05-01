import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 20%;
`;

const Title = styled.div`
  font-size: 15px;
  margin-bottom: 1rem;
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

const ResignForm = () => {
  return (
    <Container>
      <Section>
        <Title>RESIGNATION SUBMITTED ON</Title>
        <InputCalRes type="date" />
      </Section>
      <Section>
        <Title>EXPECTED LEAVING DATE</Title>
        <InputCalRes type="date" />
      </Section>
      <Section>
        <Title>NOTICE PERIOD REQUIRED DAYS</Title>
        <Input type="number" />
      </Section>
      <Section>
        <Title>PRIMARY REASON FOR LEAVING</Title>
        <Reasons>
          <Option value="option 1">Option 1</Option>
          <Option value="option 2">Option 2</Option>
          <Option value="option 3">Option 3</Option>
          <Option value="option 4">Option 4</Option>
          <Option value="option 5">Option 5</Option>
          <Option value="option 6">Option 6</Option>
          <Option value="option 1">Option 1</Option>
          <Option value="option 2">Option 2</Option>
          <Option value="option 3">Option 3</Option>
          <Option value="option 4">Option 4</Option>
          <Option value="option 5">Option 5</Option>
          <Option value="option 6">Option 6</Option>
        </Reasons>
      </Section>
      <Section>
        <Title>SECONDARY REASON FOR LEAVING</Title>
        <Reasons>
          <Option value="option 1">Option 1</Option>
          <Option value="option 2">Option 2</Option>
          <Option value="option 3">Option 3</Option>
          <Option value="option 4">Option 4</Option>
          <Option value="option 5">Option 5</Option>
          <Option value="option 6">Option 6</Option>
          <Option value="option 1">Option 1</Option>
          <Option value="option 2">Option 2</Option>
          <Option value="option 3">Option 3</Option>
          <Option value="option 4">Option 4</Option>
          <Option value="option 5">Option 5</Option>
          <Option value="option 6">Option 6</Option>
        </Reasons>
      </Section>
      <Section>
        <Title>ANY ADDITIONAL REASON FOR LEAVING</Title>
        <Reasons>
          <Option value="option 1">Option 1</Option>
          <Option value="option 2">Option 2</Option>
          <Option value="option 3">Option 3</Option>
          <Option value="option 4">Option 4</Option>
          <Option value="option 5">Option 5</Option>
          <Option value="option 6">Option 6</Option>
          <Option value="option 1">Option 1</Option>
          <Option value="option 2">Option 2</Option>
          <Option value="option 3">Option 3</Option>
          <Option value="option 4">Option 4</Option>
          <Option value="option 5">Option 5</Option>
          <Option value="option 6">Option 6</Option>
        </Reasons>
      </Section>
      <Section>
        <Title>LEAVING DATE</Title>
        <InputCalRes type="date" />
      </Section>
      <Section>
        <Title>NOTICE PERIOD SERVED DAYS</Title>
        <Input />
      </Section>
      <Section>
        <Title>SETTLEMENT FROM DATE</Title>
        <InputCalRes type="date" />
      </Section>
      <Section>
        <Title>NOTICE PERIOD SHORTFALL DAYS</Title>
        <Input />
      </Section>
      <Section>
        <Title>EXIT INTERVIEW DATE</Title>
        <InputCalRes type="date" />
      </Section>
      <Section>
        <Title>LAST WORKING DATE</Title>
        <InputCalRes type="date" />
      </Section>
    </Container>
  );
};

export default ResignForm;
