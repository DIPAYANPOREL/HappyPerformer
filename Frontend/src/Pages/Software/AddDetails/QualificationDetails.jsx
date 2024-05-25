import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const QualificationDetailsStyled = styled.div`
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
  margin-top: 10px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const FormSection = styled.div`
  margin-bottom: 8px;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const QualificationDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [qualificationDetails, setQualificationDetails] = useState([]);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newDetails = {
      type: formData.get('qualificationtype'),
      degree: formData.get('degree'),
      college: formData.get('college'),
      university: formData.get('university'),
      duration: formData.get('duration'),
      yearOfPassing: formData.get('passoutyear'),
      comments: formData.get('comments'),
    };

    setQualificationDetails((prevState) => [...prevState, newDetails]);
    alert('Details Updated Successfully');

    event.target.reset();
  };

  const deleteItem = (index) => {
    const newList = [...qualificationDetails];
    newList.splice(index, 1);
    setQualificationDetails(newList);
  };

  return (
    <>
      <Nav />
      <QualificationDetailsStyled>
        <div className="workcontainer">
          {!showForm && (
            <Table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Degree</th>
                  <th>College</th>
                  <th>University</th>
                  <th>Duration</th>
                  <th>Year Of Passing</th>
                  <th>Comments</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {qualificationDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.type}</td>
                    <td>{detail.degree}</td>
                    <td>{detail.college}</td>
                    <td>{detail.university}</td>
                    <td>{detail.duration}</td>
                    <td>{detail.yearOfPassing}</td>
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
          {showForm && (
            <Form onSubmit={saveDetails}><div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>Qualification Details</h1>
            </div>
              <FormSection>
                <FormLabel>Type</FormLabel>
                <select
                  style={{
                    width: '100%',
                    height: '2.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                  name="qualificationtype"
                >
                  <option disabled selected value>
                    Please Select
                  </option>
                  <option value="Grad Engineer">Grad Engineer</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Other">Other</option>
                </select>
              </FormSection>
              <FormSection>
                <FormLabel>Degree</FormLabel>
                <select
                  style={{
                    width: '100%',
                    height: '2.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                  name="degree"
                >
                  <option disabled selected value>
                    Please Select
                  </option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="Other">Other</option>
                </select>
              </FormSection>
              <FormSection>
                <FormLabel>College</FormLabel>
                <FormInput type="text" name="college" placeholder="College" />
              </FormSection>
              <FormSection>
                <FormLabel>University</FormLabel>
                <FormInput type="text" name="university" placeholder="University" />
              </FormSection>
              <FormSection>
                <FormLabel>Duration</FormLabel>
                <FormInput type="number" name="duration" placeholder="Duration" />
              </FormSection>
              <FormSection>
                <FormLabel>Year Of Passing</FormLabel>
                <FormInput type="number" name="passoutyear" placeholder="Year Of Passing" />
              </FormSection>
              <FormSection>
              <FormLabel>Comments</FormLabel>
              <FormInput type="text" name="comments" placeholder="Comments (If Any)" />
            </FormSection>
            <Button type="submit">Save Details</Button>
          </Form>
        )}
      </div>
    </QualificationDetailsStyled>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  );
};

export default QualificationDetails;