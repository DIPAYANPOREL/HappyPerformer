import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import EmployeeCard from "../../../Components/Software Components/EmployeeMaster/EmployeeCard";
import Footer from "../../../Components/Software Components/Footer";
import lama from "../../../assets/Lama.png";

const Container = styled.div`
  width: 100%;
`;

const EmployeeSection = styled.div`
  min-height: 600px;
  width: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const EmployeeMaster = () => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/employee-master/");
      setEmployees(response.data.employees);
      setDepartments(response.data.departments);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };


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
            // Find the department for the current employee
            const department = departments.find(dep => dep.d_id === employee.d_id);
            return (
              <EmployeeCard
                key={index}
                img={lama}
                name={employee.emp_name}
                department={department ? department.d_name : ""}
                phone={employee.emp_phone}
                mail={employee.emp_emailid}
              />
            );
          })}
        </Employees>
      </EmployeeSection>
      <Footer />
    </Container>
  );
};

export default EmployeeMaster;
