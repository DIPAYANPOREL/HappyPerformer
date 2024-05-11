import React from 'react';
import styled from 'styled-components';
// import Footer from '../../Components/Software Components/Footer';
// import Nav from '../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledSopForm = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #6a1b9a;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #6a1b9a;
  font-size: 16px;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
  }
`;

const FileInput = styled.input`
  margin-bottom: 15px;
`;

const Span = styled.span`
  color: #999;
  margin-left: 10px;
`;

const Button = styled.button`
  background-color: #6a1b9a;
  color: white;
  padding: 10px 7px;
  border: none;
  border-radius: 4px;
  width: 30%;
  margin-top: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SopForm = () => {
  return (
    <>
      {/* <Nav /> */}
    <Container>
      <StyledSopForm>
        <Header>SOP Form</Header>
        <div>
          <Label>SOP NAME</Label>
          <div>
            <Input type="text" />
          </div>
          <div>
            <Label>Department</Label>
            <Select>
              <option>-- select an option --</option>
              <option value=" 205 Super Manager">205 Super Manager</option>
              <option value="206 Manager">206 Manager</option>
              <option value="207 HR">207 HR</option>
              <option value="208 Employee">208 Employee</option>
            </Select>
          </div>
          <div>
            <Label>Type</Label>
            <Select>
              <option>-- select an option --</option>
              <option value=" Policy"> Policy</option>
              <option value="SOP">SOP</option>
            </Select>
          </div>
          <div>
            <Label>START DATE</Label>
            <Input type="date" placeholder="mm/dd/yyyy" />
          </div>
          <div>
            <Label>Select all files to be uploaded together</Label>
            <FileInput type="file" />
            <Span>No file chosen</Span>
          </div>
          <ButtonContainer>
            <Button>SUBMIT</Button>
          </ButtonContainer>
        </div>
      </StyledSopForm>
    </Container>
    {/* <Footer /> */}
    </>
  );
};

export default SopForm;
