import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  position: absolute;
  top: 10%; // Adjusted the top position to prevent overlap
  left: 50%;
  transform: translateX(-50%);
  width: 100%; // Decreased the width of the form container
  max-width: 98%; // Adjusted the maximum width
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
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #0b2447;
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
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
  margin-top: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const FormSection = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 3px;
`;

const FamilyDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [familyDetails, setFamilyDetails] = useState([]);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newDetails = {
      name: formData.get('name'),
      gender: formData.get('gender'),
      dob: formData.get('dob'),
      contactnumber: formData.get('contactnumber'),
      email: formData.get('email'),
      relation: formData.get('relation'),
      comments: formData.get('comments'),
    };

    setFamilyDetails((prevState) => [...prevState, newDetails]);
    alert('Details Updated Successfully');

    event.target.reset();
    setShowForm(false); // Hide the form after saving details
  };

  const deleteItem = (index) => {
    const newList = [...familyDetails];
    newList.splice(index, 1);
    setFamilyDetails(newList);
  };

  return (
    <div>
      <Nav />
      <Container>
        <div className="workcontainer">
          {showForm ? (
            <Form onSubmit={saveDetails}>
              <h1>Family Details</h1>
              <FormSection>
                <FormLabel>Name<span style={{ color: 'red' }}>*</span></FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Enter Name Of Family Member"
                  required
                />
                <FormErrorMessage>This field is required</FormErrorMessage>
              </FormSection>
              <FormSection>
                <FormLabel>Gender</FormLabel>
                <select
                  style={{
                    width: '100%',
                    height: '2.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                  name="gender"
                >
                  <option disabled selected value>
                    Please Select
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </FormSection>
              <FormSection>
                <FormLabel>Date Of Birth</FormLabel>
                <FormInput type="date" name="dob" placeholder="dd-mm-yyyy" />
              </FormSection>
              <FormSection>
                <FormLabel>Contact Number</FormLabel>
                <FormInput type="text" name="contactnumber" placeholder="Contact Number" />
              </FormSection>
              <FormSection>
                <FormLabel>Email Address</FormLabel>
                <FormInput type="email" name="email" placeholder="Email Address" />
              </FormSection>
              <FormSection>
                <FormLabel>Relation</FormLabel>
                <select
                  style={{
                    width: '100%',
                    height: '2.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                  name="relation"
                >
                  <option disabled selected value>
                    Please Select
                  </option>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Sister">Sister</option>
                  <option value="Brother">Brother</option>
                  <option value="Wife">Wife</option>
                  <option value="Husband">Husband</option>
                  <option value="Daughter">Daughter</option>
                  <option value="Son">Son</option>
                  <option value="Other">Other</option>
                </select>
              </FormSection>
              <FormSection>
                <FormLabel>Comments</FormLabel>
                <FormInput type="text" name="comments" placeholder="Comments (If Any)" />
              </FormSection>
              <Button type="submit">Save Details</Button>
            </Form>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Date Of Birth</th>
                  <th>Contact Number</th>
                  <th>Email Address</th>
                  <th>Relation</th>
                  <th>Comments</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {familyDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.name}</td>
                    <td>{detail.gender}</td>
                    <td>{detail.dob}</td>
                    <td>{detail.contactnumber}</td>
                    <td>{detail.email}</td>
                    <td>{detail.relation}</td>
                    <td>{detail.comments}</td>
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
        </div>
      </Container>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
};

export default FamilyDetails;
