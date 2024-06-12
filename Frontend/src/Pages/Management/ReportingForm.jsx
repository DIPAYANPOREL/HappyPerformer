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
    font-family: Arial, sans-serif;
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
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  margin: 20px auto;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 992px) {
    max-width: 95%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
  }

  @media (max-width: 576px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    font-size: 1.5em;
    margin-bottom: 15px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const EmployeeSelect = styled.select`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Option = styled.option`
  font-size: 16px;
`;

const InfoLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 50%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  :hover {
    background-color: #45a049;
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
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;

  @media (max-width: 576px) {
    width: 95%;
  }
`;

const PopupTitle = styled.h3`
  margin-top: 0;
  font-weight: bold;
  color: #333;
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
        setEmployees(response.data);
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
          <Label htmlFor="companyId">Company ID</Label>
          <Input
            id="companyId"
            type="text"
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          />
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
