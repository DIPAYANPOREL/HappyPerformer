import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../../Components/Software Components/Dashboard/Header";
import Layout from "../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f7f6;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  margin: 40px auto;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 992px) {
    max-width: 95%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  color: #0077b6;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    font-size: 1.8em;
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const EmployeeSelect = styled.select`
  width: 100%;
  height: 150px;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9;

  &:focus {
    border-color: #0077b6;
    outline: none;
  }
`;

const Option = styled.option`
  font-size: 1rem;
`;

const InfoLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #666;
`;

const StaticText = styled.p`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #e9e9e9;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 50%;
  height: 45px;
  padding: 10px;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  background-color: #0077b6;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: #005f8d;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;

  @media (max-width: 576px) {
    width: 95%;
  }
`;

const PopupTitle = styled.h3`
  margin-top: 0;
  font-weight: bold;
  color: #0077b6;
`;

const PopupButton = styled(Button)`
  width: 40%;
  margin: 10px;

  @media (max-width: 576px) {
    width: 45%;
  }
`;

const ReportingForm = () => {
  const [companyId, setCompanyId] = useState("");
  const [employees, setEmployees] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/ReportingStructureForm/")
      .then((response) => {
        if (response.data.length > 0) {
          setEmployees(response.data);
          setCompanyId(response.data[0].d_id__c_id); // Extracting companyId from the first employee object
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setEmployees([]);
      });
  }, []);

  const handleSubmit = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleContinue = () => {
    const selectedEmployees = Array.from(
      document.querySelectorAll("select[multiple] option:checked")
    ).map((option) => option.value);
    const reportingTo = document.querySelector("select:not([multiple])").value;

    const payload = {
      eemail: selectedEmployees,
      remail: reportingTo,
    };

    axios
      .post("http://127.0.0.1:8000/ReportingStructureForm/", payload, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        alert("Data submitted successfully");
        setPopupVisible(false);
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header title="Reporting Form" />
        <Container>
          <Title>Reporting Form</Title>
          <Label>Company ID</Label>
          <StaticText>{companyId}</StaticText>
          <Label>Select Employees whose reporting you want to create</Label>
          <EmployeeSelect multiple>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <Option key={employee.emp_emailid} value={employee.emp_emailid}>
                  {employee.emp_emailid}
                </Option>
              ))
            ) : (
              <Option disabled>No data available</Option>
            )}
          </EmployeeSelect>
          <InfoLabel>
            Hold down the Ctrl (windows)/Command (Mac) button to select multiple
            employees.
          </InfoLabel>
          <Label>
            Select Employee whom the above selected Employees would Report To
          </Label>
          <EmployeeSelect>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <Option key={employee.emp_emailid} value={employee.emp_emailid}>
                  {employee.emp_emailid}
                </Option>
              ))
            ) : (
              <Option disabled>No data available</Option>
            )}
          </EmployeeSelect>
          <Button onClick={handleSubmit}>Submit</Button>
        </Container>
        {isPopupVisible && (
          <PopupOverlay>
            <PopupContainer>
              <PopupTitle>Confirmation!</PopupTitle>
              <p>Do you want to submit this form?</p>
              <PopupButton onClick={handleContinue}>Continue</PopupButton>
              <PopupButton onClick={handleClosePopup}>Close</PopupButton>
            </PopupContainer>
          </PopupOverlay>
        )}
      </Layout>
    </>
  );
};

export default ReportingForm;
