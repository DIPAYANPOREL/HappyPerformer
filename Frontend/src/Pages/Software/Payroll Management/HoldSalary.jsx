import React, { useState, useEffect } from "react";
import axios from "axios";
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
`;

const Table = styled.table`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  margin-bottom: 20px;
  margin-top: 50px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const TableHeader = styled.thead`
  background-color: #0077b6;
  color: white;
  height: 30px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [holdReason, setHoldReason] = useState("");
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employees'); // Adjust the endpoint as necessary
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleHoldUnhold = async (employee) => {
    const updatedEmployee = { ...employee, isOnHold: !employee.isOnHold };

    if (updatedEmployee.isOnHold) {
      setSelectedEmployee(updatedEmployee);
      setShowModal(true);
    } else {
      try {
        await axios.post(`/api/employees/${employee.id}/unhold`);
        alert(`Account ${updatedEmployee.account} is unheld`);
        setSelectedEmployee(updatedEmployee);
      } catch (error) {
        console.error('Error unholding salary:', error);
      }
    }
  };

  const holdSalary = async () => {
    try {
      await axios.post(`/api/employees/${selectedEmployee.id}/hold`, {
        holdReason,
        remarks
      });
      setShowModal(false);
      setHoldReason("");
      setRemarks("");
      setSelectedEmployee({ ...selectedEmployee, isOnHold: true });
    } catch (error) {
      console.error('Error holding salary:', error);
    }
  };

  return (
    <>
      <Nav />
      <Wrapper>
        <SelectLabel htmlFor="employeeSelect" style={{marginLeft:'46%', marginTop:'40px'}}>Select Employee:</SelectLabel>
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
            <form onSubmit={(e) => { e.preventDefault(); holdSalary(); }}>
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
              <ActionButton type="submit">Hold Salary</ActionButton>
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
