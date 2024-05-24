import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EmployeeCard from "../../../Components/Software Components/EmployeeMaster/EmployeeCard";
import Footer from "../../../Components/Software Components/Footer";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const EmployeeSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchImport = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  height: 120px;
  align-items: center;
`;

const Import = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const ImpBtn = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
  height: 10%;
  width: 30%;
  background-color: #758bfd;
  color: white;
  margin: 5px 0px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const Slider = styled.div`
  padding: 10px;
`;

const SearchBar = styled.input`
  padding: 10px;
  width: 33%;
  border: 1px solid gray;
  border-radius: 20px;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 3rem;
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
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const FooterContainer = styled.footer`
  margin-top: auto;
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
    <Container>
      <EmployeeSection>
        <Title>Employee Master</Title>
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
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default EmployeeMaster;
