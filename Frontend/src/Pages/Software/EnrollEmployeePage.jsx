import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import EnrollForm from "./EnrollForm"; // Adjust path as per your file structure

const PurpleButton = styled.button`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px; // Example max-width for content
  margin: 20px; /* Adjust margins as needed */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const EnrollEmployeePage = () => {
  return (
    <CenteredContainer>
      <Container>
        <Link to="/view-employees">
          <PurpleButton>View All Employees</PurpleButton>
        </Link>
        <EnrollForm />
      </Container>
    </CenteredContainer>
  );
};

export default EnrollEmployeePage;
