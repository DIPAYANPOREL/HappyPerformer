import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPen, FaEnvelope, FaTrashAlt } from 'react-icons/fa';
import Footer from '../../Components/Software Components/Footer';
import Nav from '../../Components/Software Components/Dashboard/Nav';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: scroll;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Header = styled.div`
  color: black;
  padding: 10px 20px;
  display: flex;
`;
const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 1.3rem;  
  }
`;
const Content = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  
`;
const YourFormsContainer = styled.div`
display: flex; 
flex-direction: column;
width: 48%;
background-color: white;
border-radius: 8px;
padding: 20px;
height: 70%;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
@media (max-width: 768px) {
  width: 100%;
`;
const FormList = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column;
overflow-y: scroll;
@media (max-width: 768px) {
  width: 100%;
`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
`;
const FormName = styled.span`
  font-weight: bold;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
const FormActions = styled.div`
  display: flex;
`;
const FormAction = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #666;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;
const CreateFormContainer = styled.div`
  width: 48%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 70%;
`;
const CreateFormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
`;
const CreateFormButton = styled.button`
  padding: 10px 20px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c3e50;
  }
`;
const NoFormsText = styled.div`
  margin-top: 20px;
  color: #888;
`;
const CustomForms = () => {
  const [forms, setForms] = useState(['Hi Form', 'Disturbance Form', 'Example Form', 'Feedback Form', 'Request Form', 'Request Form', 'Request Form', 'Request Form', 'Request Form', 'Request Form', 'Request Form', 'Request Form']);
  const [newFormName, setNewFormName] = useState('');

  const handleCreateForm = () => {
    if (newFormName.trim()) {
      setForms([...forms, newFormName.trim()]);
      setNewFormName('');
    }
  };

  const handleDeleteForm = (index) => {
    const updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
  };


  return (
    <>
    <Nav />
    <Container>
      <Header>
        <HeaderTitle>Custom Forms</HeaderTitle>
      </Header>
      <Content>
        <YourFormsContainer>
          <h3>Your Forms</h3>
          {forms.length === 0 ? (
              <NoFormsText> No letters available. Please create a letter to see it here.</NoFormsText>
            ) : (
          <FormList>
            {forms.map((form, index) => (
              <FormItem key={index}>
                <FormName>{form}</FormName>
                <FormActions>
                  <FormAction>
                  <Link to="/Edit">
                    <FaPen />
                    </Link>
                  </FormAction>
                  <FormAction>
                  <Link to="/Responses">
                    <FaEnvelope />
                    </Link>
                  </FormAction>
                  <FormAction onClick={() => handleDeleteForm(index)}>
                    <FaTrashAlt />
                  </FormAction>
                </FormActions>
              </FormItem>
            ))}
          </FormList>
        )}
        </YourFormsContainer>
        <CreateFormContainer>
          <h3>Create A New Form</h3>
          <CreateFormInput
            placeholder="Ex: Feedback Form..."
            value={newFormName}
            onChange={(e) => setNewFormName(e.target.value)}
          />
          <CreateFormButton onClick={handleCreateForm}>Create</CreateFormButton>
        </CreateFormContainer>
      </Content>
    </Container>
    <Footer />
    </>
  );
};
export default CustomForms;
