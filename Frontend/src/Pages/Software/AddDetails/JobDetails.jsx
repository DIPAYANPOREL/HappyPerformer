import React from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const CaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  width: 90%; /* Adjusted width to 90% */
  max-width: 660px; /* Set a max-width for responsiveness */
  margin: 0 auto; /* Center the form horizontally */
  padding: 20px; /* Adjusted padding */
`;

const UIDivider = styled.div`
  margin-top: -80px; /* Adjusted margin */
`;

const UIForm = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem; /* Adjusted padding */
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 30px; /* Adjusted margin */
`;

const CaseField = styled.div`
  margin-bottom: 1.5rem; /* Adjusted margin */
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem; /* Adjusted margin */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem; /* Adjusted padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem; /* Adjusted padding */
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
  margin-top: 0.5rem; /* Adjusted margin */
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem; /* Adjusted padding */
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const JobDetails = () => {
  return (
    <>
    <Nav/>
    <CaseContainer>
      <Form>
        <UIDivider />
        <UIForm>
          <Title style={{ textAlign: 'center'}}>Job Details</Title>
          <CaseField>
            <Label>
              Title 
            </Label>
            <Input
              type="text"
              name="title"
              placeholder="Title"
            />
          </CaseField>
          <CaseField style={{ width: '35rem', borderRadius: '4px' }}>
            <Label>Department</Label>
            <Select name="casetype">
              <option value="case-dropdown" selected disabled>
                Select
              </option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </Select>
          </CaseField>
          <CaseField style={{ width: '35rem', borderRadius: '4px' }}>
            <Label>Working Type</Label>
            <Select name="casetype">
              <option value="case-dropdown" selected disabled>
                Select
              </option>
              <option value="">Full Time</option>
              <option value="">Part Time</option>
              <option value="">Remote</option>
            </Select>
          </CaseField>
          <CaseField>
            <Label>Start Date</Label>
            <Input type="date" name="startdate" placeholder="dd-mm-yyyy" />
          </CaseField>
          <SubmitButton onClick={() => validateForm()}>Submit</SubmitButton>
        </UIForm>
      </Form>
    </CaseContainer>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  );
};

function validateForm() {
  const x = document.forms['myForm']['createcase'].value;
  if (x === '') {
    document.getElementsByClassName('Error')[0].style.display = 'block';
  } else {
    alert('Form is Valid');
  }
}

export default JobDetails
