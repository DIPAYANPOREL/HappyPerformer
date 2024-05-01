import React from 'react';
import styled from 'styled-components';
import Footer from "../../Components/Software Components/Footer";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #007bff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const THead = styled.thead`
  background-color: #f2f2f2;
  align-items: left;
  justify-content: left;
`;

const TH = styled.th`
  font-weight: bold;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const TD = styled(TH)`
  font-weight: normal;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  color: #333;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(50% - 10px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Select = styled.select`
  width: calc(50% - 10px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  resize: none; 
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ApplyforLeave = () => {
  return (
    <>
    <Container>
      <Heading>Available Leaves</Heading>
      <Table>
        <THead>
          <tr>
            <TH>Leave Type</TH>
            <TH>Alloted</TH>
            <TH>Used</TH>
          </tr>
        </THead>
        <tbody>
          <tr>
            <TD>Casual Leave</TD>
            <TD>16</TD>
            <TD></TD>
          </tr>
          <tr>
            <TD>Medical Leave</TD>
            <TD>15</TD>
            <TD></TD>
          </tr>
          <tr>
            <TD>LOP</TD>
            <TD>364</TD>
            <TD></TD>
          </tr>
          <tr>
            <TD>Earned Leave</TD>
            <TD>25</TD>
            <TD></TD>
          </tr>
        </tbody>
      </Table>
      <FormGroup>
        <Label htmlFor="leaveType">Select Leave</Label>
        <Select id="leaveType">
          <option>Please Select Option</option>
          <option value=" Casual Leave"> Casual Leave</option>
          <option value="Medical Leave">Medical Leave</option>
          <option value="LOP">LOP</option>
          <option value=" Earned Leave"> Earned Leave</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>Date Range</Label>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Input type="date" id="fromDate" placeholder="From Date"/>
          <Input type="date" id="toDate" placeholder="To Date"/>
        </div>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="leaveDescription">Description</Label>
        <Textarea id="leaveDescription" rows="4"></Textarea>
      </FormGroup>
      <Button>Submit</Button>
    </Container>
    <Footer/>
    </>
  );
};

export default ApplyforLeave;
