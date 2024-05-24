import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../../Components/Software Components/Footer';
import Nav from '../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const DataItem = styled.div`
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const YearWiseCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const YearWiseCountHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;


const AllEmployeePerformances = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [yearWiseCount, setYearWiseCount] = useState({
    totalSopAssigned: 0,
    totalSopAccomplished: 0,
    totalKraAssigned: 0,
    totalKraAccomplished: 0,
    totalJdAssigned: 0,
    totalJdAccomplished: 0,
    totalTrainingAssigned: 0,
    totalTrainingAccomplished: 0,
  });

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    // Fetch data from API or data source based on selectedEmployee and selectedYear
    // and update the yearWiseCount state accordingly
    if (selectedEmployee && selectedYear) {
      // Replace the following with your actual API call or data fetching logic
      const fetchedData = {
        totalSopAssigned: 10,
        totalSopAccomplished: 8,
        totalKraAssigned: 5,
        totalKraAccomplished: 3,
        totalJdAssigned: 2,
        totalJdAccomplished: 1,
        totalTrainingAssigned: 6,
        totalTrainingAccomplished: 4,
      };
      setYearWiseCount(fetchedData);
    }
  }, [selectedEmployee, selectedYear]);

  const data = [
    { label: 'Total SOP Assigned:', value: yearWiseCount.totalSopAssigned },
    { label: 'Total SOP Accomplished:', value: yearWiseCount.totalSopAccomplished },
    { label: 'Total KRA Assigned:', value: yearWiseCount.totalKraAssigned },
    { label: 'Total KRA Accomplished:', value: yearWiseCount.totalKraAccomplished },
    { label: 'Total JD Assigned:', value: yearWiseCount.totalJdAssigned },
    { label: 'Total JD Accomplished:', value: yearWiseCount.totalJdAccomplished },
    { label: 'Total Training Assigned:', value: yearWiseCount.totalTrainingAssigned },
    { label: 'Total Training Accomplished:', value: yearWiseCount.totalTrainingAccomplished },
  ];

  return (
    <>
    <Nav />
    <Container>
      <Title>All Employee Performances</Title>
      <SelectContainer>
        <Select value={selectedEmployee} onChange={handleEmployeeChange}>
          <option value="">Select Employee</option>
          <option value="employee1">Simon</option>
          <option value="employee2">John</option>
        </Select>
        <Select value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </Select>
      </SelectContainer>
      <YearWiseCountContainer>
        <YearWiseCountHeader>Year wise Count</YearWiseCountHeader>
        <DataContainer>
          {data.map((item, index) => (
            <DataItem key={index}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </DataItem>
          ))}
        </DataContainer>
      </YearWiseCountContainer>
    </Container>
    <Footer />
    </>
  );
};

export default AllEmployeePerformances;