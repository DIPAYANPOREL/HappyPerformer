import React, { useState } from "react";
import styled from "styled-components";
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SelectLabel = styled.label`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #0077b6;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: left;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  background-color: ${(props) => (props.primary ? "#0077b6" : "#ffbf00")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
  margin-bottom: 20px;
`;

const HoldSalary = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      bank: "Bank A",
      branch: "Branch A",
      IFSC: "IFSC001",
      account: "1234567890",
      isOnHold: false,
    },
    {
      id: 2,
      name: "Jane Doe",
      bank: "Bank B",
      branch: "Branch B",
      IFSC: "IFSC002",
      account: "0987654321",
      isOnHold: false,
    },
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [holdReason, setHoldReason] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleHoldUnhold = (employee) => {
    const updatedEmployee = { ...employee, isOnHold: !employee.isOnHold };
    setSelectedEmployee(updatedEmployee);
    if (updatedEmployee.isOnHold) {
      setShowModal(true);
    } else {
      alert(`Account ${updatedEmployee.account} is unheld`);
    }
  };

  const holdSalary = () => {
    setShowModal(false);
    setHoldReason("");
    setRemarks("");
  };

  return (
    <>
    <Nav/>
    <Wrapper>
      <Header>Hold Salary</Header>
      <SelectLabel htmlFor="employeeSelect">Select Employee:</SelectLabel>
      <Select
        id="employeeSelect"
        onChange={(e) =>
          setSelectedEmployee(
            employees.find((emp) => emp.name === e.target.value)
          )
        }
      >
        <option value="">Select Employee</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </Select>
      <Table>
        <TableHeader>
          <TableRow>
            <th>ID</th>
            <th>Name</th>
            <th>Bank</th>
            <th>Branch</th>
            <th>IFSC Code</th>
            <th>Account Number</th>
            <th>Action</th>
          </TableRow>
        </TableHeader>
        <tbody>
          {selectedEmployee && (
            <TableRow>
              <TableCell>{selectedEmployee.id}</TableCell>
              <TableCell>{selectedEmployee.name}</TableCell>
              <TableCell>{selectedEmployee.bank}</TableCell>
              <TableCell>{selectedEmployee.branch}</TableCell>
              <TableCell>{selectedEmployee.IFSC}</TableCell>
              <TableCell>{selectedEmployee.account}</TableCell>
              <TableCell>
                <ActionButton
                  onClick={() => handleHoldUnhold(selectedEmployee)}
                >
                  {selectedEmployee.isOnHold ? "Unhold" : "Hold"}
                </ActionButton>
              </TableCell>
            </TableRow>
          )}
        </tbody>
      </Table>

      {showModal && selectedEmployee && (
        <Modal>
          <form>
            <InputLabel>Employee Name: {selectedEmployee.name}</InputLabel>
            <InputLabel>
              Hold Reason:
              <select
                value={holdReason}
                onChange={(e) => setHoldReason(e.target.value)}
              >
                <option value="">Select Hold Reason</option>
                <option value="Verification not done">
                  Verification not done
                </option>
                <option value="Document Not Submitted">
                  Document Not Submitted
                </option>
                <option value="Bank Issues">Bank Issues</option>
                <option value="Other">Other</option>
              </select>
            </InputLabel>
            <InputLabel>
              Remarks:
              <Input
                type="text"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </InputLabel>
            <ActionButton onClick={holdSalary}>Hold Salary</ActionButton>
          </form>
        </Modal>
      )}
    </Wrapper>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  );
};

export default HoldSalary;
