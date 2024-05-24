import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const DependentDetailsStyled = styled.div`
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
  display: ${(props) => (props.show ? 'block' : 'none')};
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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormSelect = styled.select`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DependentDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [DependentDetails, setDependentDetails] = useState([]);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newDetails = {
      name: formData.get('depname'),
      dependentgender: formData.get('depgender'),
      date: formData.get('depdob'),
      relation: formData.get('deprelation'),
      description: formData.get('depdescription'),
    };

    setDependentDetails((prevState) => [...prevState, newDetails]);
    alert('Details Updated Successfully');

    event.target.reset();
  };

  const deleteItem = (index) => {
    const newList = [...DependentDetails];
    newList.splice(index, 1);
    setDependentDetails(newList);
  };

  return (
    <>
      <Nav />
      <DependentDetailsStyled>
        <div className="workcontainer">
          {!showForm && (
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Relation</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {DependentDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.name}</td>
                    <td>{detail.dependentgender}</td>
                    <td>{detail.date}</td>
                    <td>{detail.relation}</td>
                    <td>{detail.description}</td>
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
            <Form show={showForm} onSubmit={saveDetails}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ marginBottom: '20px' }}>Dependent Details</h1>
              </div>
              <FormSection style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ width: '100%' }}>
                  <label>Name<span style={{ color: 'red' }}>*</span></label>
                  <FormInput type='text' name='depname' placeholder='Enter Name Of Dependent' required/>
                </div>
              </FormSection>
              <FormSection style={{ height: '40px', marginBottom:'28px' }}>
                <FormLabel>Gender</FormLabel>
                <FormSelect name="depgender" style={{ height: '100%' }}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </FormSelect>
              </FormSection>
              <FormSection>
                <FormLabel>Dependent Date Of Birth</FormLabel>
                <FormInput type="date" name="depdob" placeholder="dd-mm-yyyy" />
              </FormSection>
              <FormSection>
                <FormLabel>Relation</FormLabel>
                <FormInput type="text" name="deprelation" placeholder="Relation With Dependent" />
              </FormSection>
              <FormSection>
                <FormLabel>Description</FormLabel>
                <FormInput type="text" name="depdescription" placeholder="Description" />
              </FormSection>
              <Button style={{ width: '100%' }} type="submit">
                Save Details
              </Button>
            </Form>
          )}
        </div>
      </DependentDetailsStyled>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default DependentDetails;