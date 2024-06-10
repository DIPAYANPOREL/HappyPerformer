import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import axios from 'axios';


axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const CustomContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  width: 70%;
  max-width: 1250px;
  flex-direction: column;
  overflow: hidden;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 8px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

const Message = styled.div`
  margin: 16px 0;
  padding: 12px;
  border-radius: 4px;
  color: ${props => (props.error ? 'red' : 'green')};
  background-color: ${props => (props.error ? '#f8d7da' : '#d4edda')};
`;

const DelUpdateRegistry = () => {
  const [emailId, setEmailId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [skills, setSkills] = useState('');
  const [departments, setDepartments] = useState([]);
  const [emails, setEmails] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch departments and emails when the component mounts
    const fetchInitialData = async () => {
      try {
        const departmentResponse = await axios.get('http://127.0.0.1:8000/UpdateEmployeeDetails/');
        setDepartments(departmentResponse.data.departments);

        const emailResponse = await axios.get('http://127.0.0.1:8000/UpdateDeleteEmployee/');
        setEmails(emailResponse.data.email_ids);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();
  }, []);

  const handleUpdate = async () => {
    if (!emailId) {
      setMessage('Please select a valid email.');
      setError(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:8000/UpdateEmployeeDetails/?emp_emailid=${emailId}`);
      const data = response.data.employee_data;
      setName(data.emp_name);
      setPhoneNumber(data.emp_phone);
      setRole(data.role);
      setDepartment(data.d_id);
      setSkills(data.emp_skills);
      setShowUpdateForm(true);
      setMessage('');
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setMessage('Error fetching employee data.');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!emailId) {
      setMessage('Please select a valid email.');
      setError(true);
      return;
    }

    setLoading(true);
    try {
      await axios.delete(`http://127.0.0.1:8000/UpdateDeleteEmployee/?emailId=${emailId}`);
      setMessage('Employee record deleted successfully!');
      setError(false);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting employee record:', error);
      setMessage('Error deleting employee record.');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedDetails = {
      emp_name: name,
      emp_emailid: emailId,
      emp_phone: phoneNumber,
      d_id: department,
      emp_skills: skills,
    };
    try {
      await axios.post('http://127.0.0.1:8000/UpdateEmployeeDetails/', updatedDetails);
      setMessage('Details have been updated successfully!');
      setError(false);
      setShowUpdateForm(false);
    } catch (error) {
      console.error('Error updating employee details:', error);
      setMessage('Error updating employee details.');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <CustomContainer>
        <Card>
          {!showUpdateForm ? (
            <Form>
              <h3 style={{ marginBottom: '30px', marginLeft: 'auto', marginRight: 'auto' }}>Delete/Update Employee Registry</h3>
              {message && <Message error={error}>{message}</Message>}
              <FormGroup>
                <Label htmlFor="emailId" style={{ fontSize: '1.1rem' }}>Email:</Label>
                <Select
                  id="emailId"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                >
                  <option value="">Select Email</option>
                  {emails.map(email => (
                    <option key={email} value={email}>{email}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Button type="button" onClick={handleUpdate} disabled={loading}>
                  {loading ? 'Loading...' : 'Update'}
                </Button>
              </FormGroup>
              <FormGroup>
                <Button type="button" onClick={handleDelete} disabled={loading}>
                  {loading ? 'Loading...' : 'Delete'}
                </Button>
              </FormGroup>
            </Form>
          ) : (
            <Form onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>UPDATE FORM</h3>
              {message && <Message error={error}>{message}</Message>}
              <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phoneNumber">Phone Number:</Label>
                <Input
                  type="number"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="role">Role:</Label>
                <Input
                  type="text"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="department">Department:</Label>
                <Select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.d_id} value={dept.d_id}>{dept.d_name}</option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="skills">Skills:</Label>
                <Input
                  type="text"
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Updating...' : 'Update'}
                </Button>
              </FormGroup>
              <FormGroup>
                <CloseButton type="button" onClick={() => setShowUpdateForm(false)}>
                  Close
                </CloseButton>
              </FormGroup>
            </Form>
          )}
        </Card>
      </CustomContainer>
      <Footer style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }} />
    </>
  );
};

export default DelUpdateRegistry;
