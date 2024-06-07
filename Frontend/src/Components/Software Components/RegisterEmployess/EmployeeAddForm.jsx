import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  max-width: 600px;
  width: 80%;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 10px;
    width: 90%;
  }
`;

const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const InputBar = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    height: 30px;
    margin-bottom: 10px;
  }
`;

const TextBar = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DeptSelect = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    height: 30px;
    margin-bottom: 10px;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077b6;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #005f8a;
  }
  @media (max-width: 768px) {
    height: 30px;
    margin-bottom: 10px;
  }
`;

const PlanDetails = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #666;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const EmployeeAddForm = () => {
  const [formData, setFormData] = useState({
    emp_name: "",
    emp_emailid: "",
    emp_phone: "",
    d_id: "",
    skills: "",
  });

  const [departments, setDepartments] = useState([]);
  const [planDetails, setPlanDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/departments");
        setDepartments(response.data.departments);
        setPlanDetails({
          emp_count: response.data.emp_count,
          company: response.data.company,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/AddNewEmployee",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("Employee registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering employee:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <FormCont onSubmit={handleSubmit}>
        <TextBar htmlFor="emp_name">Full Name</TextBar>
        <InputBar
          id="emp_name"
          name="emp_name"
          value={formData.emp_name}
          onChange={handleChange}
        />

        <TextBar htmlFor="emp_emailid">Email</TextBar>
        <InputBar
          id="emp_emailid"
          name="emp_emailid"
          value={formData.emp_emailid}
          onChange={handleChange}
        />

        <TextBar htmlFor="emp_phone">Phone</TextBar>
        <InputBar
          id="emp_phone"
          name="emp_phone"
          value={formData.emp_phone}
          onChange={handleChange}
        />

        <TextBar htmlFor="d_id">Department</TextBar>
        <DeptSelect
          id="d_id"
          name="d_id"
          value={formData.d_id}
          onChange={handleChange}
        >
          {departments.map((dept) => (
            <option key={dept.d_id} value={dept.d_id}>
              {dept.d_name}
            </option>
          ))}
        </DeptSelect>

        <TextBar htmlFor="skills">Skills</TextBar>
        <InputBar
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <SubmitBtn type="submit">Register</SubmitBtn>

        <PlanDetails>
          Ongoing Plan: {planDetails.company.payment_type}
        </PlanDetails>
        <PlanDetails>
          Total employees registered: {planDetails.emp_count}
        </PlanDetails>
        <PlanDetails>
          Employee limit of your plan: {planDetails.company.emp_limit}
        </PlanDetails>
      </FormCont>
    </Container>
  );
};
// New Code
export default EmployeeAddForm;
