import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";


const Header = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;
const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  width: 150px;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  &:required {
    box-shadow: none;
  }
`;
const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 80px;
  flex: 1;

  &:required {
    box-shadow: none;
  }
`;
const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 150px;
  flex: 1;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #283593;
  }
`;
const AddSalary = () => {
  const [payoutMonth, setPayoutMonth] = useState('');
  const [employeeRemarks, setEmployeeRemarks] = useState('');
  const [notes, setNotes] = useState('');
  const [annualCTC, setAnnualCTC] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('Bank');
  const [revision, setRevision] = useState(0);
  const [effectiveFrom, setEffectiveFrom] = useState('');

  const handleAddSalary = () => {
    console.log('Payout Month:', payoutMonth);
    console.log('Employee Remarks:', employeeRemarks);
    console.log('Notes:', notes);
    console.log('Annual CTC:', annualCTC);
    console.log('Payment Method:', paymentMethod);
    console.log('Revision:', revision);
    console.log('Effective From:', effectiveFrom);
  };

  return (
    <>
    <Nav/>
    <Header>Add Salary</Header>
    <Container>
      <InputGroup>
        <Label>Payout Month</Label>
        <Input
          type="date"
          value={payoutMonth}
          onChange={(e) => setPayoutMonth(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup>
        <Label>Employee Remarks</Label>
        <Textarea
          value={employeeRemarks}
          onChange={(e) => setEmployeeRemarks(e.target.value)}
          required
        >
        </Textarea>
      </InputGroup>
      <InputGroup>
        <Label>Notes</Label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        >
        </Textarea>
      </InputGroup>
      <InputGroup>
        <Label>Annual CTC</Label>
        <Input
          type="number"
          value={annualCTC}
          onChange={(e) => setAnnualCTC(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup>
        <Label>Payment Method</Label>
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="Bank">Bank</option>
          <option value="Cash">Cash</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>Revision %</Label>
        <Input
          type="number"
          value={revision}
          onChange={(e) => setRevision(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup>
        <Label>Effective from</Label>
        <Input
          type="date"
          value={effectiveFrom}
          onChange={(e) => setEffectiveFrom(e.target.value)}
          required
        />
      </InputGroup>
      <Button onClick={handleAddSalary}>Add salary</Button>
    </Container>
    <Footer/>
    </>
  );
};
export default AddSalary;