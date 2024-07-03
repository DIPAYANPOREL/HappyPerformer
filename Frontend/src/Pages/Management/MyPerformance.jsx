import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Lama from '../../assets/Lama.png';
import Footer from '../../Components/Software Components/Footer';
import Nav from '../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const PerformerList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const PerformerItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PerformerName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const PerformerScore = styled.span`
  color: #666;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const YearWiseCountContainer = styled.div`
  background-color: #f5f5f5;
  margin-top: 20px;
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
  justify-content: space-between;
`;

const MyPerformance = () => {
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
    if (selectedEmployee && selectedYear) {
      // Simulated data fetch
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

  const performers = [
    { name: 'Shawn Pinto', score: 10 },
    { name: 'John Cena', score: 9 },
    { name: 'Jayson Bourne', score: 9 },
  ];

  return (
    <>
    < Nav />
    <Container>
      <Title>Employees of the Month</Title>
      <PerformerList>
        {performers.map((performer, index) => (
          <PerformerItem key={index}>
            <Avatar src={Lama} alt="Lama" />
            <PerformerName>{performer.name}</PerformerName>
            <PerformerScore>With a total of {performer.score}</PerformerScore>
          </PerformerItem>
        ))}
      </PerformerList>
      <Title>All Employee Performances</Title>
      <SelectContainer>
        <Select value={selectedYear} onChange={handleYearChange}>
          <option value="">Select Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </Select>
      </SelectContainer>
      <YearWiseCountContainer>
        <YearWiseCountHeader>Year Wise Count</YearWiseCountHeader>
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

export default MyPerformance;
