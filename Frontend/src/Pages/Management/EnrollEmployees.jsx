import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../Components/Software Components/Footer';
import Nav from '../../Components/Software Components/Dashboard/Nav';

const Header = styled.h1`
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f2f2f2;
    padding: 2rem;
    min-height: 100vh;
`;
const FormContainer = styled.div`
    width: 50%;
    padding: 1.5rem;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
`;
const FormGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        gap: 0.25rem;
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
`;
const Label = styled.h5`
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.2rem;

    @media screen and (max-width: 768px) {
        margin-bottom: 0.25rem;
        margin-top: 0.25rem;
    }
`;
const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    line-height: 1.2rem;
`;
const SubmitButton = styled.button`
    margin-top: 1rem;
    background-color: #3f51b5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 0.25rem;
`;
const SuccessAlert = styled.div`
    margin-top: 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    line-height: 1.2rem;
    width: 20%;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        width: 40%;
    }
`;
const ViewAllButton = styled.button`
    margin-top: 1rem;
    background-color: #3f51b5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
`;
const EnrollEmployees = () => {
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const options = [
      { label: "Demo", value: 1 },
      { label: "JavaScript for Beginners", value: 2 },
      { label: "PHP Full Crash Course", value: 3 },
      { label: "HTML Full Crash Course", value: 4 },
      { label: "PHP for Newbies", value: 5 },
      { label: "New Course", value: 6 },
  ];

  const handleCourseSelect = (event) => {
      setCourse(event.target.value);
  }

  const handleEmailSelect = (event) => {
      setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
      localStorage.setItem('course', course);
      localStorage.setItem('email', email);
  }

return (
    <>
    <Nav/>
  <Container>
    <Header>Enroll Employees</Header>
      <FormContainer>
          <FormGroup>
          <Link to="/Table">
              <ViewAllButton>View All Enrollments</ViewAllButton>
          </Link>
              <Label>Course Title</Label>
              <Select onChange={handleCourseSelect} value={course}>
                  <option value="">-- select a course --</option>
                  {options.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
              </Select>
          </FormGroup>
          <FormGroup>
              <Label>Email ID</Label>
              <Select onChange={handleEmailSelect} value={email}>
                  <option value="">-- select an email --</option>
                  <option value="shawnpinto.salahkaar@gmail.com">shawnpinto.salahkaar@gmail.com</option>
                  <option value="123ABC.salahkaar@gmail.com">123ABC.salahkaar@gmail.com</option>
              </Select>
          </FormGroup>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          {submitted && <SuccessAlert>Course Enrolled</SuccessAlert>}
      </FormContainer>
  </Container>
  <Footer/>
  </>
);
};

export default EnrollEmployees;
