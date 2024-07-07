import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const CaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  width: 90%;
  max-width: 660px;
  margin: 0 auto;
  padding: 20px;
`;

const UIDivider = styled.div`
  margin-top: -80px;
`;

const UIForm = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const CaseField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Mandatory = styled.span`
  color: red;
`;

const Error = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateCase1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    axios.post('http://127.0.0.1:8000/CreateCase/', data)
      .then(response => {
        console.log('Success:', response.data);
        alert('Form submitted successfully');
      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
        alert('Error submitting the form');
      });
  };

  return (
    <>
      <Nav/>
      <CaseContainer>
        <Form onSubmit={handleSubmit}>
          <UIDivider />
          <UIForm>
            <Title style={{ textAlign: 'center' }}>Create Case</Title>
            <CaseField>
              <Label>
                Create Case For <Mandatory>*</Mandatory>
              </Label>
              <Input
                type="text"
                name="createcase"
                placeholder="Create Case For"
                required
              />
              <Error className="Error" style={{ display: 'none' }}>
                This field is mandatory
              </Error>
            </CaseField>
            <CaseField style={{ width: '35rem', borderRadius: '4px' }}>
              <Label>Case Type</Label>
              <Select name="casetype" required>
                <option value="" disabled selected>Select</option>
                <option value="Benefits">Benefits</option>
                <option value="CompensationPayroll">Compensation and Payroll</option>
                <option value="TravelExpense">Travel and Expense</option>
              </Select>
            </CaseField>
            <CaseField>
              <Label>Case Title</Label>
              <Input type="text" name="casetitle" placeholder="Case Title" />
            </CaseField>
            <CaseField>
              <Label>Detailed Description</Label>
              <Input type="text" name="description" placeholder="Description" />
            </CaseField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </UIForm>
        </Form>
      </CaseContainer>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default CreateCase1;
