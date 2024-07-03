import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const WhiteContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 1200px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const StatusTableCell = styled(TableCell)`
  color: ${({ status }) =>
    status === "Pending"
      ? "orange"
      : status === "Approved"
      ? "green"
      : "black"};
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const PopupContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PopupLoan = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const FormTextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

const LoanPayments = () => {
  const [isApplyLoanOpen, setApplyLoanOpen] = useState(false);
  const [isPendingLoanOpen, setPendingLoanOpen] = useState(false);
  const [isApprovedLoanOpen, setApprovedLoanOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    loanAmount: "",
    monthlyAmount: "",
    startDate: "",
    reason: "",
  });
  const [errors, setErrors] = useState({});
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/AddLoan")
      .then((response) => {
        setLoans(response.data.loans || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the loans:", error);
        setError("No data available, please try again");
        setLoading(false);
      });
  };

  const toggleApplyLoanPopup = () => {
    setApplyLoanOpen(!isApplyLoanOpen);
  };

  const togglePendingLoanPopup = () => {
    setPendingLoanOpen(!isPendingLoanOpen);
  };

  const toggleApprovedLoanPopup = () => {
    setApprovedLoanOpen(!isApprovedLoanOpen);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s-]+$/.test(formData.name)) {
      formErrors.name = "Name should only contain letters, spaces, and hyphens";
    }

    if (!formData.department.trim()) {
      formErrors.department = "Department is required";
    }

    if (!formData.loanAmount) {
      formErrors.loanAmount = "Loan Amount is required";
    } else if (isNaN(formData.loanAmount)) {
      formErrors.loanAmount = "Loan Amount must be a number";
    }

    if (!formData.monthlyAmount) {
      formErrors.monthlyAmount = "Monthly Amount is required";
    } else if (isNaN(formData.monthlyAmount)) {
      formErrors.monthlyAmount = "Monthly Amount must be a number";
    }

    if (!formData.startDate) {
      formErrors.startDate = "Start Date is required";
    }

    if (!formData.reason.trim()) {
      formErrors.reason = "Reason is required";
    }

    return formErrors;
  };

  const handleApplyLoan = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const payload = {
        name: formData.name,
        department: formData.department,
        lamt: formData.loanAmount,
        mamt: formData.monthlyAmount,
        startdate: formData.startDate,
        reason: formData.reason,
        status: 0,
      };

      axios
        .post("http://127.0.0.1:8000/AddLoan", payload, {
          credentials: true,
        })
        .then((response) => {
          console.log("Loan applied successfully:", response.data);
          alert("Loan Applied!");
          setApplyLoanOpen(false);
          setFormData({
            name: "",
            department: "",
            loanAmount: "",
            monthlyAmount: "",
            startDate: "",
            reason: "",
          });
          setErrors({});
          fetchLoans(); // Refresh the loan data
        })
        .catch((error) => {
          console.error("There was an error applying for the loan!", error);
        });
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (loading) {
    return (
      <Layout>
        <OuterContainer>
          <WhiteContainer>
            <Heading>Loading...</Heading>
          </WhiteContainer>
        </OuterContainer>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <OuterContainer>
          <WhiteContainer>
            <Heading>{error}</Heading>
          </WhiteContainer>
        </OuterContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title="Loans" />
      <OuterContainer>
        <WhiteContainer>
          <Heading>Add Loan</Heading>
          <ButtonContainer>
            <Button onClick={toggleApplyLoanPopup}>Apply Loan</Button>
            <Button onClick={togglePendingLoanPopup}>Pending Loan</Button>
            <Button onClick={toggleApprovedLoanPopup}>Approved Loan</Button>
          </ButtonContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Department</TableHeader>
                <TableHeader>Loan Amount</TableHeader>
                <TableHeader>Monthly Amount</TableHeader>
                <TableHeader>Start Date</TableHeader>
                <TableHeader>Reason</TableHeader>
                <TableHeader>Status</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{loan.name}</TableCell>
                  <TableCell>{loan.department}</TableCell>
                  <TableCell>{loan.loan_amount}</TableCell>
                  <TableCell>{loan.monthly_amount}</TableCell>
                  <TableCell>{loan.start_date}</TableCell>
                  <TableCell>{loan.reason}</TableCell>
                  <StatusTableCell status={loan.status}>
                    {loan.status}
                  </StatusTableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <PopupContainer isOpen={isApplyLoanOpen}>
            <PopupContent>
              <h2>Apply Loan</h2>
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
              <FormLabel>Department:</FormLabel>
              <FormInput
                type="text"
                placeholder="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
              {errors.department && <ErrorText>{errors.department}</ErrorText>}
              <FormLabel>Loan Amount:</FormLabel>
              <FormInput
                type="number"
                placeholder="Loan Amount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
              />
              {errors.loanAmount && <ErrorText>{errors.loanAmount}</ErrorText>}
              <FormLabel>Monthly Amount:</FormLabel>
              <FormInput
                type="number"
                placeholder="Monthly Amount"
                name="monthlyAmount"
                value={formData.monthlyAmount}
                onChange={handleChange}
              />
              {errors.monthlyAmount && (
                <ErrorText>{errors.monthlyAmount}</ErrorText>
              )}
              <FormLabel>Start Date:</FormLabel>
              <FormInput
                type="date"
                placeholder="Start Date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
              {errors.startDate && <ErrorText>{errors.startDate}</ErrorText>}
              <FormLabel>Reason:</FormLabel>
              <FormTextArea
                rows="4"
                placeholder="Reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
              />
              {errors.reason && <ErrorText>{errors.reason}</ErrorText>}
              <ButtonGroup>
                <CloseButton onClick={toggleApplyLoanPopup}>Close</CloseButton>
                <CloseButton onClick={handleApplyLoan}>Apply Loan</CloseButton>
              </ButtonGroup>
            </PopupContent>
          </PopupContainer>
          <PopupContainer isOpen={isPendingLoanOpen}>
            <PopupLoan>
              <h2>Pending Loan</h2>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Department</TableHeader>
                    <TableHeader>Loan Amount</TableHeader>
                    <TableHeader>Monthly Amount</TableHeader>
                    <TableHeader>Start Date</TableHeader>
                    <TableHeader>Reason</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {loans
                    .filter((loan) => loan.status === "Pending")
                    .map((loan, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{loan.name}</TableCell>
                        <TableCell>{loan.department}</TableCell>
                        <TableCell>{loan.loan_amount}</TableCell>
                        <TableCell>{loan.monthly_amount}</TableCell>
                        <TableCell>{loan.start_date}</TableCell>
                        <TableCell>{loan.reason}</TableCell>
                        <StatusTableCell status={loan.status}>
                          {loan.status}
                        </StatusTableCell>
                      </TableRow>
                    ))}
                </tbody>
              </Table>
              <CloseButton onClick={togglePendingLoanPopup}>Close</CloseButton>
            </PopupLoan>
          </PopupContainer>
          <PopupContainer isOpen={isApprovedLoanOpen}>
            <PopupLoan>
              <h2>Approved Loan</h2>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Department</TableHeader>
                    <TableHeader>Loan Amount</TableHeader>
                    <TableHeader>Monthly Amount</TableHeader>
                    <TableHeader>Start Date</TableHeader>
                    <TableHeader>Reason</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {loans
                    .filter((loan) => loan.status === "Approved")
                    .map((loan, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{loan.name}</TableCell>
                        <TableCell>{loan.department}</TableCell>
                        <TableCell>{loan.loan_amount}</TableCell>
                        <TableCell>{loan.monthly_amount}</TableCell>
                        <TableCell>{loan.start_date}</TableCell>
                        <TableCell>{loan.reason}</TableCell>
                        <StatusTableCell status={loan.status}>
                          {loan.status}
                        </StatusTableCell>
                      </TableRow>
                    ))}
                </tbody>
              </Table>
              <CloseButton onClick={toggleApprovedLoanPopup}>Close</CloseButton>
            </PopupLoan>
          </PopupContainer>
        </WhiteContainer>
      </OuterContainer>
    </Layout>
  );
};

export default LoanPayments;
