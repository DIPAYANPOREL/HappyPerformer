import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  margin-top: -300px;
  margin-left: 150px;
  width: 100%;
`;

const Select = styled.select`
  margin-left: 370px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 500px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Table = styled.table`
  margin-left: 3px;
  width: 130%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background-color: #87CEEB;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  font-size: 16px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = styled.div`
  position: fixed;
  width: 50%;
  top: 60%;
  left: 55%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 67%;
  padding: 8px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const HoldReasonSelect = styled(Select)`
  /* Add specific styling for the Hold Reason dropdown */
  margin-left: 10px; /* Adjust the value as needed */
`;


// Main component
const Changes = () => {
  const employees = [
    { id: 1, name: 'John Doe', bank: 'Bank A', branch: 'Branch A', IFSC: 'IFSC001', account: '1234567890', isOnHold: false },
    { id: 2, name: 'Jane Doe', bank: 'Bank B', branch: 'Branch B', IFSC: 'IFSC002', account: '0987654321', isOnHold: false },
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [holdReason, setHoldReason] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleHoldUnhold = (employee) => {
    const updatedEmployee = { ...employee, isOnHold: !employee.isOnHold };
    if (updatedEmployee.isOnHold) {
      setShowModal(true);
    } else {
      alert('Account ${updatedEmployee.account} is unheld');
    }
    setSelectedEmployee(updatedEmployee);
  };

  const holdSalary = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h2 style={{marginLeft: '540px'}}>Hold Salary</h2>
      <Select onChange={(e) => setSelectedEmployee(employees.find((emp) => emp.name === e.target.value))}>
        <option value="">Select Employee</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </Select>
      
      {!showModal ? (
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Bank</Th>
              <Th>Branch</Th>
              <Th>IFSC Code</Th>
              <Th>Account Number</Th>
              <Th>Action</Th>
            </tr>
          </thead>
          <tbody>
            {selectedEmployee && (
              <tr>
                <Td>{selectedEmployee.id}</Td>
                <Td>{selectedEmployee.name}</Td>
                <Td>{selectedEmployee.bank}</Td>
                <Td>{selectedEmployee.branch}</Td>
                <Td>{selectedEmployee.IFSC}</Td>
                <Td>{selectedEmployee.account}</Td>
                <Td>
                  <Button onClick={() => handleHoldUnhold(selectedEmployee)}>
                    {selectedEmployee.isOnHold ? 'Unhold' : 'Hold'}
                  </Button>
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      ) : (
        <Modal>
          <form>
            <Label><strong>Employee Name:</strong> {selectedEmployee.name}</Label>
            <Label><strong>Hold Reason:</strong>
            <HoldReasonSelect value={holdReason} onChange={(e) => setHoldReason(e.target.value)}>
  <option value="">Select Hold Reason</option>
  <option value="Verification not done">Verification not done</option>
  <option value="Document Not Submitted">Document Not Submitted</option>
  <option value="Bank Issues">Bank Issues</option>
  <option value="Other">Other</option>
</HoldReasonSelect>

            </Label>
            <Label><strong>Remarks:</strong>
              <Input type="text" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
            </Label>
            <Button onClick={holdSalary}>Hold Salary</Button>
          </form>
        </Modal>
      )}
    </Container>
  );
};

export default Changes;