import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const WorkExperienceStyled = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 98%;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #0b2447;
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
`;

const Form = styled.form`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const FormSection = styled.div`
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const WorkExperience = () => {
  const [showForm, setShowForm] = useState(false);
  const [WorkExperience, setWorkExperience] = useState([]);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newDetails = {
      duration: `${formData.get('startDate')} - ${formData.get('endDate')}`,
      company: formData.get('companyName'),
      location: formData.get('location'),
      designation: formData.get('designation'),
      grossSalary: formData.get('grossSalary'),
      reasonForLeaving: formData.get('reasonForLeaving'),
    };

    setWorkExperience((prevState) => [...prevState, newDetails]);
    alert('Details Updated Successfully');

    event.target.reset();
  };

  const deleteItem = (index) => {
    const newList = [...WorkExperience];
    newList.splice(index, 1);
    setWorkExperience(newList);
  };

  return (
    <>
      <Nav />
      <WorkExperienceStyled>
        <div className="workcontainer">
          {!showForm && (
            <Table>
              <thead>
                <tr>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Designation</th>
                  <th>Gross Salary</th>
                  <th>Reason for Leaving</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {WorkExperience.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.duration.split(' - ')[0]}</td>
                    <td>{detail.duration.split(' - ')[1]}</td>
                    <td>{detail.company}</td>
                    <td>{detail.location}</td>
                    <td>{detail.designation}</td>
                    <td>{detail.grossSalary}</td>
                    <td>{detail.reasonForLeaving}</td>
                    <td>
                      <Button
                        onClick={() => {
                          const newDetails = { ...detail };
                          alert(JSON.stringify(newDetails));
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button onClick={() => deleteItem(index)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          <Button onClick={toggleForm}>
            {showForm ? 'Close Form' : 'Add Details'}
          </Button>

          {showForm && (
            <Form onSubmit={saveDetails}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>Work Experience</h1>
            </div>
          <FormSection style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <div style={{ width: '48%' }}>
              <label>Start Date <span style={{ color: 'red' }}>*</span></label>
              <FormInput type='date' name='startDate' placeholder=' (dd-mm-yyyy)' required/>
            </div>
            <div style={{ width: '50%' }}>
              <label>End Date <span style={{ color: 'red' }}>*</span></label>
              <FormInput type='date' name='endDate' placeholder=' (dd-mm-yyyy)' required/>
            </div>
          </FormSection>
            <FormSection>
              <FormLabel>Company Name</FormLabel>
              <FormInput type="text" name="companyName" placeholder="Company Name" />
            </FormSection>
            <FormSection>
              <FormLabel>Location</FormLabel>
              <FormInput type="text" name="location" placeholder="Location" />
            </FormSection>
            <FormSection>
              <FormLabel>Designation</FormLabel>
              <FormInput type="text" name="designation" placeholder="Designation" />
              </FormSection>
            <FormSection>
              <FormLabel>Last Gross Salary</FormLabel>
              <FormInput type="text" name="grossSalary" placeholder="Gross Salary" />
            </FormSection>
            <FormSection>
              <FormLabel>Reason For Leaving</FormLabel>
              <FormInput type="text" name="reasonForLeaving" placeholder="Reason For Leaving" />
            </FormSection>
            <Button style={{ width: '100%' }} type="submit">
                Save Details
              </Button>
            </Form>
          )}
        </div>
      </WorkExperienceStyled>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default WorkExperience;