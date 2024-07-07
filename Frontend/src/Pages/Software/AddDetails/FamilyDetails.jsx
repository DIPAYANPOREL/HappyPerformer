import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 98%;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Table = styled.table`
  width: 95%;
  overflow: auto;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;

  th,
  td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    height: 15px;
    border-right: 1px solid #ccc;
  }

  th {
    background-color: #0b2447;
    color: #fff;
    border-right: 1px solid #ccc;
  }

  tr:nth-child(even) td {
    background-color: #f2f2f2;
  }

  tr td:last-child {
    border-right: none;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 27px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Form = styled.form`
  width: 45%;
  height: 30%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
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
  height: 36px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const FormErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 3px;
`;

const FamilyDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [familyDetails, setFamilyDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchFamilyDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/UpdateFamilyDetails/');
        if (Array.isArray(response.data)) {
          setFamilyDetails(response.data);
        } else {
          setFamilyDetails([]);
        }
      } catch (error) {
        console.error('Error fetching family details:', error);
      }
    };
    fetchFamilyDetails();
  }, []);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = async (event) => {
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

    try {
      let response;
      if (editIndex !== null) {
        response = await axios.put(`http://127.0.0.1:8000/UpdateFamilyDetails/${familyDetails[editIndex].id}`, newDetails);
        const updatedFamilyDetails = [...familyDetails];
        updatedFamilyDetails[editIndex] = response.data;
        setFamilyDetails(updatedFamilyDetails);
        setEditIndex(null);
      } else {
        response = await axios.post('http://127.0.0.1:8000/UpdateFamilyDetails/', newDetails);
        setFamilyDetails((prevState) => [...prevState, response.data]);
      }
      alert('Details Updated Successfully');
    } catch (error) {
      console.error('Error saving family details:', error);
      alert('Error saving details');
    }

    event.target.reset();
    setShowForm(false);
  };

  const deleteItem = async (index) => {
    const item = familyDetails[index];
    try {
      await axios.delete(`/api/family-details/${item.id}`);
      const newList = [...familyDetails];
      newList.splice(index, 1);
      setFamilyDetails(newList);
    } catch (error) {
      console.error('Error deleting family detail:', error);
    }
  };

  const editItem = (index) => {
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <Nav />
      {showForm ? (
        <Form onSubmit={saveDetails}>
          <h1>{editIndex !== null ? 'Edit Family Details' : 'Add Family Details'}</h1>
          <FormSection>
            <FormLabel>Name<span style={{ color: 'red' }}>*</span></FormLabel>
            <FormInput
              type="text"
              name="name"
              placeholder="Enter Name Of Family Member"
              defaultValue={editIndex !== null ? familyDetails[editIndex].name : ''}
              required
            />
            <FormErrorMessage>This field is required</FormErrorMessage>
          </FormSection>
          <FormSection>
            <FormLabel>Gender</FormLabel>
            <select
              style={{ width: '100%', height: '2.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              name="gender"
              defaultValue={editIndex !== null ? familyDetails[editIndex].gender : ''}
            >
              <option disabled value="">
                Please Select
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </FormSection>
          <FormSection>
            <FormLabel>Date Of Birth</FormLabel>
            <FormInput
              type="date"
              name="dob"
              placeholder="dd-mm-yyyy"
              defaultValue={editIndex !== null ? familyDetails[editIndex].dob : ''}
            />
          </FormSection>
          <FormSection>
            <FormLabel>Contact Number</FormLabel>
            <FormInput
              type="text"
              name="contactnumber"
              placeholder="Contact Number"
              defaultValue={editIndex !== null ? familyDetails[editIndex].contactnumber : ''}
            />
          </FormSection>
          <FormSection>
            <FormLabel>Email Address</FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Email Address"
              defaultValue={editIndex !== null ? familyDetails[editIndex].email : ''}
            />
          </FormSection>
          <FormSection>
            <FormLabel>Relation</FormLabel>
            <select
              style={{ width: '100%', height: '2.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              name="relation"
              defaultValue={editIndex !== null ? familyDetails[editIndex].relation : ''}
            >
              <option disabled value="">
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
            <FormInput
              type="text"
              name="comments"
              placeholder="Comments (If Any)"
              defaultValue={editIndex !== null ? familyDetails[editIndex].comments : ''}
            />
          </FormSection>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginLeft: '1px' }} type="submit">
              Save Details
            </Button>
            <Button onClick={toggleForm} style={{ marginLeft: '10px' }} type="button">
              Close
            </Button>
          </div>
        </Form>
      ) : (
        <Container>
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
                    <Button onClick={() => editItem(index)}>Edit</Button>
                  </td>
                  <td>
                    <Button onClick={() => deleteItem(index)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
      <Button onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Add Details'}
      </Button>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
};

export default FamilyDetails;
