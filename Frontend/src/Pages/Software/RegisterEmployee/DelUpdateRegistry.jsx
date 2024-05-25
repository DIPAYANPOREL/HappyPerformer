import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const CustomContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
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
  width: 1250px;
`;

const FormCard = styled(Card)`
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 20px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  width: 1100px;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 30px;

  &:hover {
    background-color: #0056b3;
  }
`;
  const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 3px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const DelUpdateRegistry = () => {
  const [emailId, setEmailId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [skills, setSkills] = useState('');
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdate = () => {
    setShowUpdateForm(true);
  };

  const handleDelete = async () => {
    
  };

  const handleSubmit = async () => {
    alert('Details have been updated successfully!');
  };
 
  return (
    <>
    <Nav/>
    <CustomContainer>
      {!showUpdateForm ? (
        <Card>
          <Form>
            <FormGroup>
              <h2 style={{ marginBottom: '40px', marginLeft:'420px' }}>Delete/Update Employee Registry</h2>
              <Label htmlFor="name" style={{ fontSize: '20px', marginBottom: '8px', marginLeft: '30px'}}>Email:</Label>
              <br></br>
              <Input
                type="email"
                id="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                style={{marginLeft:'30px',marginTop:'10px',width:'1098px'}}
              />
            </FormGroup>
            <FormGroup>
              <Button type="button" onClick={handleUpdate} style={{marginBottom:'25px'}}>
                Update
              </Button>
              <Button type="button" onClick={handleDelete}>
                Delete
              </Button>
            </FormGroup>
          </Form>
        </Card>
      ) : (
        <FormCard>
          <Form>
          <h2 style={{marginLeft:'500px'}}>Update Form</h2>
            <FormGroup>
            <Label htmlFor="name" style={{ fontSize: '15px', marginBottom: '8px' }}>Name:</Label>
            <br></br>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{marginLeft:'1px', width:'1160px'}}
              />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="name" style={{ fontSize: '15px', marginBottom: '8px' }}>Phone Number:</Label>
            <br></br>
              <Input
                type="number"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{marginLeft:'1px', width:'1160px'}}
              />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="name" style={{ fontSize: '15px', marginBottom: '8px' }}>Role:</Label>
            <br></br>
              <Input
                type="text"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{marginLeft:'1px', width:'1160px'}}
              />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="name" style={{ fontSize: '15px', marginBottom: '8px' }}>Department:</Label>
            <br></br>
              <Input
                type="text"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                style={{marginLeft:'1px', width:'1160px'}}
              />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="name" style={{ fontSize: '15px', marginBottom: '8px' }}>Skills:</Label>
            <br></br>
              <Input
                type="text"
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                style={{marginLeft:'1px', width:'1160px'}}
              />
            </FormGroup>
            <FormGroup>
              <Button type="button" onClick={handleSubmit} style={{marginLeft:'2px', width:'100%',marginTop:'20px'}}>
                Insert
              </Button>
              <FormGroup>
      <CloseButton type="button" onClick={() => setShowUpdateForm(false)} style={{marginTop:'25px'}}>
        Close
      </CloseButton>
    </FormGroup>
            </FormGroup>
          </Form>
        </FormCard>
      )}
    </CustomContainer>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  );
};

export default DelUpdateRegistry;

