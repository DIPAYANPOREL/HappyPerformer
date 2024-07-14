import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Software Components/Dashboard/Header";
import Layout from "../Components/Software Components/Dashboard/Layout";

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

const EmployeeForm = () => {
  // const employeeFormNames = ["Form 1", "Form 2", "Form 3", "Form 4"];

  const [employeeFormNames, setEmployeeFormNames] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Forms/")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setEmployeeFormNames(response.data);
        } else {
          setEmployeeFormNames([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching employee form names:", error);
      });
  }, []);

  return (
    <>
      <Layout>
        <Header title="Letter" />
        <FormsContainer>
          <YourForms>
            <YourFormsHeading>Your Forms</YourFormsHeading>
            <YourFormsList>
              {employeeFormNames.map((formName, index) => (
                <FormsList key={index}>{formName}</FormsList>
              ))}
            </YourFormsList>
          </YourForms>
          <LastContainer></LastContainer>
        </FormsContainer>
      </Layout>
    </>
  );
};

export default EmployeeForm;
