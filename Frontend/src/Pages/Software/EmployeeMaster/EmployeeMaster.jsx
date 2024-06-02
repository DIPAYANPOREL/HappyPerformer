import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import EmployeeCard from "../../../Components/Software Components/EmployeeMaster/EmployeeCard";

const EmployeeSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const SearchImport = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  height: auto;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Import = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
  }
`;

const ImpBtn = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
  width: 150px;
  background-color: #0077b6;
  color: white;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Slider = styled.div`
  padding: 10px;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  width: 33%;
  border: 1px solid gray;
  border-radius: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Employees = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const EmployeeMaster = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://127.0.0.1:8000/";
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/employee-master`)
      .then((response) => {
        setEmployees(response.data.employees);
        setDepartments(response.data.departments);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employee data:", err);
        setLoading(false);
      });
  }, []);

  const handleProfileClick = (empId) => {
    navigate(`/Profile/${empId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Header title="Employee Master" />
      <EmployeeSection>
        <SearchImport>
          <Import>
            <ImpBtn>Import</ImpBtn>
            <Slider>Click to enable editing for all employees</Slider>
          </Import>
          <SearchBar placeholder="Search Employee..." />
        </SearchImport>
        <Employees>
          {employees.map((employee, index) => {
            const department = departments.find(
              (dep) => dep.d_id === employee.d_id
            );
            return (
              <EmployeeCard
                key={index}
                id={employee.emp_emailid}
                name={employee.emp_name}
                department={department.d_name}
                phone={employee.emp_phone}
                mail={employee.emp_emailid}
                onClick={handleProfileClick}
              />
            );
          })}
        </Employees>
      </EmployeeSection>
    </Layout>
  );
};

export default EmployeeMaster;
