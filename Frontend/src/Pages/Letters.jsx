import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Components/Software Components/Dashboard/Nav";
import Footer from "../Components/Software Components/Footer";
import axios from "axios";

const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const YourForms = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  background-color: #f5f5f5;
`;

const YourFormsHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
`;

const YourFormsList = styled.div`
  margin-bottom: 1rem;
  padding: 20px;
`;

const FormsList = styled.p`
  padding: 0.5rem;
  background-color: #f0f0f0;
  max-width: 100%;
  display: block;
  margin-bottom: 0.4rem;
`;

const LastContainer = styled.div`
  margin-top: auto;
`;

const Letters = () => {
  // const letterNames = ["Letter 1", "Letter 2", "Letter 3", "Letter 4"];

  const [letterNames, setLetterNames] = useState([]);

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/Letters/')
      .then(response =>
      {
        if (Array.isArray(response.data)) {
          setLetterNames(response.data);
        }
        else {
          setLetterNames([]);
        }
      })
      .catch(error => {
        console.error('Error fetching letter form names:', error);
      });
  }, []);

  return (
    <FormsContainer>
      <Nav />
      <YourForms>
        <YourFormsHeading>Your Letters</YourFormsHeading>
        <YourFormsList>
          {employeeFormNames.map((formName, index) => (
            <FormsList key={index}>{formName}</FormsList>
          ))}
        </YourFormsList>
      </YourForms>
      <LastContainer>
        <Footer />
      </LastContainer>
    </FormsContainer>
  );
};

export default Letters;
