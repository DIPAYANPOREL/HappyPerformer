import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-right: 20px;
  padding: 10px 20px;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 400px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ApplyButton = styled(Button)`
  margin-right: 0;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
`;

// Pending Loan Popup Container
const PendingLoanPopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [loanamount, setLoanAmount] = useState("");
  const [monthlyamount, setMonthlyAmount] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [reason, setReason] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleMonthlyAmountChange = (e) => {
    setMonthlyAmount(e.target.value);
  };

  const handleReasonChange = (value) => {
    setReason(value);
  };

  return (
    <PopupContainer>
      <CloseButton onClick={onClose}>x</CloseButton>
      <InputContainer>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={handleNameChange} />
      </InputContainer>
      <InputContainer>
        <Label>Department</Label>
        <Select value={department} onChange={handleDepartmentChange}>
          <option value="">Select department</option>
          <option value="Super Manager">Super Manager</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
          <option value="Employee">Employee</option>
        </Select>
      </InputContainer>
      <InputContainer>
        <Label>Loan Amount</Label>
        <Input
          type="number"
          value={loanamount}
          onChange={handleLoanAmountChange}
        />
      </InputContainer>
      <InputContainer>
        <Label>Monthly Amount</Label>
        <Input
          type="number"
          value={monthlyamount}
          onChange={handleMonthlyAmountChange}
        />
      </InputContainer>
      <InputContainer>
        <Label>Start Date</Label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </InputContainer>
      <InputContainer>
        <Label>Reason</Label>
        <ReactQuill value={reason} onChange={handleReasonChange} />
      </InputContainer>
      <ApplyButton onClick={onClose}>Apply Loan</ApplyButton>
    </PopupContainer>
  );
};

// Approved Loan Popup Container
const ApprovedLoanPopup = ({ onClose }) => {
  // Implement similar state and handlers as in PendingLoanPopup
  // ...

  return (
    <PopupContainer>
      {/* Content for Approved Loan Popup Container */}
      {/* Similar to PendingLoanPopup */}
    </PopupContainer>
  );
};

const LoanPayments = () => {
  const [showPendingPopup, setShowPendingPopup] = useState(false);
  const [showApprovedPopup, setShowApprovedPopup] = useState(false);

  const handleApplyLoan = () => {
    setShowPendingPopup(true);
  };

  return (
    <div>
      <Container>
        <Button onClick={handleApplyLoan}>+ Apply Loan</Button>
        <Button onClick={() => setShowPendingPopup(true)}>Pending Loan</Button>
        <Button onClick={() => setShowApprovedPopup(true)}>
          Approved Loan
        </Button>
      </Container>

      {/* Render Popup Containers */}
      {showPendingPopup && (
        <PendingLoanPopup onClose={() => setShowPendingPopup(false)} />
      )}

      {showApprovedPopup && (
        <ApprovedLoanPopup onClose={() => setShowApprovedPopup(false)} />
      )}
    </div>
  );
};

export default LoanPayments;
