import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const Header = styled.h1`
  font-size: 18px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
`;
const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 20px;
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const SecondaryContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const EmployeeList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const EmployeeItem = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? '#3f51b5' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? '#3f51b5' : '#f0f0f0')};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const Edit = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Carlos Sainz' },
    { id: 2, name: 'Yuki Tsnoda' },
    { id: 3, name: 'Shawn Pinto' },
    { id: 4, name: 'Estaban Ocon' },
    { id: 5, name: 'Alex Albon' },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isOptionsQuestion, setIsOptionsQuestion] = useState(false);
  const [numberOfOptions, setNumberOfOptions] = useState(0); // State to track the number of options
  const [optionInputs, setOptionInputs] = useState([]); // State to store option input values

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSave = () => {
    if (selectedEmployee) {
      console.log('Selected Employee:', selectedEmployee);
    } else {
      console.log('No employee selected');
    }
  };

  const handleOptionsQuestionClick = () => {
    setIsOptionsQuestion(true);
  };

  const handleTextQuestionClick = () => {
    setIsOptionsQuestion(false);
  };

  const handleNumberOfOptionsChange = (event) => {
    const numOptions = parseInt(event.target.value);
    setNumberOfOptions(numOptions);
    // Create option input fields
    const inputs = Array.from({ length: numOptions }, (_, index) => ({
      id: `option${index + 1}`,
      value: '',
    }));
    setOptionInputs(inputs);
  };

  const handleOptionInputChange = (event, index) => {
    const { value } = event.target;
    setOptionInputs((prevInputs) =>
      prevInputs.map((input, i) => (i === index ? { ...input, value } : input))
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Option Inputs:', optionInputs);
  };

  return (
    <>
      <Nav />
      <MainContainer>
        <Header>Employee Allocation</Header>
        <EmployeeList>
          {employees.map((employee) => (
            <EmployeeItem
              key={employee.id}
              selected={selectedEmployee && selectedEmployee.id === employee.id}
              onClick={() => handleEmployeeClick(employee)}
            >
              {employee.name}
            </EmployeeItem>
          ))}
        </EmployeeList>
        <ButtonContainer>
          {/* <Button onClick={handleSave}>Save</Button> */}
        </ButtonContainer>
        <SecondaryContainer>
          <ButtonContainer>
            <Button onClick={handleTextQuestionClick}>Text question</Button>
            <Button onClick={handleOptionsQuestionClick}>Options question</Button>
          </ButtonContainer>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Write your question here." />
            <Input type="text" placeholder="Give a unique ID" />
            {isOptionsQuestion ? (
              <>
                <Input
                  type="number"
                  placeholder="Number of Options"
                  value={numberOfOptions}
                  onChange={handleNumberOfOptionsChange}
                />
                {optionInputs.map((input, index) => (
                  <Input
                    key={input.id}
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={input.value}
                    onChange={(event) => handleOptionInputChange(event, index)}
                  />
                ))}
              </>
            ) : (
              <Select>
                <option value="">Select the type of input you want to use</option>
                <option value="text">Text</option>
                <option value="email">E-Mail</option>
                <option value="tel">Phone Number</option>
                <option value="number">Integer</option>
              </Select>
            )}
            <Button type="submit">Done</Button>
          </Form>
        </SecondaryContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Edit;
