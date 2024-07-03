import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

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
    background-color: #f9f9f9;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const CustomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin: 40px auto;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 900px;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 8px;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 8px;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
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
  padding: 16px;
  border-radius: 8px;
  color: ${(props) => (props.error ? "red" : "green")};
  background-color: ${(props) => (props.error ? "#f8d7da" : "#d4edda")};
`;

const DelUpdateRegistry = () => {
  const [emailId, setEmailId] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [skills, setSkills] = useState("");
  const [departments, setDepartments] = useState([]);
  const [emails, setEmails] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const departmentResponse = await axios.get(
          "http://127.0.0.1:8000/UpdateEmployeeDetails/"
        );
        setDepartments(departmentResponse.data.departments);

        const emailResponse = await axios.get(
          "http://127.0.0.1:8000/UpdateDeleteEmployee/"
        );
        setEmails(emailResponse.data.email_ids);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const handleUpdate = async () => {
    if (!emailId) {
      setMessage("Please select a valid email.");
      setError(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/UpdateEmployeeDetails/?emp_emailid=${emailId}`
      );
      const data = response.data.employee_data;
      setName(data.emp_name);
      setPhoneNumber(data.emp_phone);
      setRole(data.role);
      setDepartment(data.d_id);
      setSkills(data.emp_skills);
      setShowUpdateForm(true);
      setMessage("");
    } catch (error) {
      console.error("Error fetching employee data:", error);
      setMessage("Error fetching employee data.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!emailId) {
      setMessage("Please select a valid email.");
      setError(true);
      return;
    }

    setLoading(true);
    try {
      await axios.delete(
        `http://127.0.0.1:8000/UpdateDeleteEmployee/?emailId=${emailId}`
      );
      setMessage("Employee record deleted successfully!");
      setError(false);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting employee record:", error);
      setMessage("Error deleting employee record.");
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
      await axios.post(
        "http://127.0.0.1:8000/UpdateEmployeeDetails/",
        updatedDetails
      );
      setMessage("Details have been updated successfully!");
      setError(false);
      setShowUpdateForm(false);
    } catch (error) {
      console.error("Error updating employee details:", error);
      setMessage("Error updating employee details.");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <GlobalStyle />
      <Header title="Delete - Update Employee" />
      <CustomContainer>
        <Card>
          {!showUpdateForm ? (
            <Form>
              <h3 style={{ marginBottom: "30px", textAlign: "center" }}>
                Delete/Update Employee Registry
              </h3>
              {message && <Message error={error}>{message}</Message>}
              <FormGroup>
                <Label htmlFor="emailId" style={{ fontSize: "1.1rem" }}>
                  Email:
                </Label>
                <Select
                  id="emailId"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                >
                  <option value="">Select Email</option>
                  {emails.map((email) => (
                    <option key={email} value={email}>
                      {email}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup>
                <Button type="button" onClick={handleUpdate} disabled={loading}>
                  {loading ? "Loading..." : "Update"}
                </Button>
              </FormGroup>
              <FormGroup>
                <Button type="button" onClick={handleDelete} disabled={loading}>
                  {loading ? "Loading..." : "Delete"}
                </Button>
              </FormGroup>
            </Form>
          ) : (
            <Form onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
                UPDATE FORM
              </h3>
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
                  {departments.map((dept) => (
                    <option key={dept.d_id} value={dept.d_id}>
                      {dept.d_name}
                    </option>
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
                  {loading ? "Updating..." : "Update"}
                </Button>
              </FormGroup>
              <FormGroup>
                <CloseButton
                  type="button"
                  onClick={() => setShowUpdateForm(false)}
                >
                  Close
                </CloseButton>
              </FormGroup>
            </Form>
          )}
        </Card>
      </CustomContainer>
    </Layout>
  );
};

export default DelUpdateRegistry;
