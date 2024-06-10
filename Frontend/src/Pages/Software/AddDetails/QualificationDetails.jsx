import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';
// import axios from 'axios';

const QualificationDetailsStyled = styled.div`
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
max-height: 80vh;
overflow: auto;
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
  height: 35px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;
const QualificationDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [qualificationDetails, setQualificationDetails] = useState([]);

  useEffect(() => {
    const fetchQualificationDetails = async () => {
      try {
        const response = await axios.get('/api/qualification-details');
        setQualificationDetails(response.data);
      } catch (error) {
        console.error('Error fetching qualification details:', error);
      }
    };

    fetchQualificationDetails();
  }, []);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = async (event) => {
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

    try {
      const response = await axios.post('/api/qualification-details', newDetails);
      setQualificationDetails((prevState) => [...prevState, response.data]);
      alert('Details Updated Successfully');
    } catch (error) {
      console.error('Error saving qualification details:', error);
      alert('Error saving details');
    }

    event.target.reset();
  };

  const deleteItem = async (index) => {
    const item = qualificationDetails[index];
    try {
      await axios.delete(`/api/qualification-details/${item.id}`);
      const newList = [...qualificationDetails];
      newList.splice(index, 1);
      setQualificationDetails(newList);
    } catch (error) {
      console.error('Error deleting qualification detail:', error);
    }
  };

  return (
    <>
      <Nav />
      {!showForm && (
      <QualificationDetailsStyled>
        <div className="workcontainer">
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
          <Button onClick={toggleForm}>
             Add Details
          </Button>
          </div>
          </QualificationDetailsStyled>
        )}
          {showForm && (
            <Form onSubmit={saveDetails}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
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
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
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
                <FormInput type="text" name="college" placeholder="College" required />
              </FormSection>
              <FormSection>
                <FormLabel>University</FormLabel>
                <FormInput type="text" name="university" placeholder="University" required />
              </FormSection>
              <FormSection>
                <FormLabel>Duration</FormLabel>
                <FormInput type="number" name="duration" placeholder="Duration" required />
              </FormSection>
              <FormSection>
                <FormLabel>Year Of Passing</FormLabel>
                <FormInput type="number" name="passoutyear" placeholder="Year Of Passing" required />
              </FormSection>
              <FormSection>
                <FormLabel>Comments</FormLabel>
                <FormInput type="text" name="comments" placeholder="Comments (If Any)" />
              </FormSection>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginLeft: '1px', }} type="submit">
              Save Details
            </Button>
            <Button onClick={toggleForm} style={{ marginLeft: '10px' }}>
              Close
            </Button>
          </div>
            </Form>
          )}
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', height:'9%' }}>
        <Footer />
      </div>
    </>
  );
};

export default QualificationDetails;

