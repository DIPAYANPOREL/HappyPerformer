import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const WhiteContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 80%;
  max-width: 1200px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  flex-grow: 1;
  margin: 0;
`;

const AddButton = styled.button`
  position: absolute;
  right: 0;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 40px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-right: 1px solid #ddd;
`;

const TableCellHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 300px;
  max-width: 80%;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;

const AdhocPayments = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    type: "",
    amount: "",
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([
    {
      Name: "Daniel",
      Department: "IT",
      Type: "Allowance",
      Amount: 1000,
      Month: "May",
      Year: 2022,
    },
    {
      Name: "Harshal",
      Department: "IT",
      Type: "Allowance",
      Amount: 1000,
      Month: "March",
      Year: 2022,
    },
    {
      Name: "Manav",
      Department: "IT",
      Type: "Allowance",
      Amount: 42,
      Month: "June",
      Year: 2022,
    },
    // ... (rest of the initial data)
  ]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.type) newErrors.type = "Type is required";
    if (!formData.month) newErrors.month = "Month is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    } else if (isNaN(formData.amount)) {
      newErrors.amount = "Amount must be a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const insertData = () => {
    if (!validateForm()) return;

    const newData = {
      Name: formData.name,
      Department: formData.department,
      Type: formData.type,
      Amount: parseFloat(formData.amount),
      Month: formData.month,
      Year: parseInt(formData.year),
    };

    axios
      .post("/api/adhoc-payments", newData)
      .then((response) => {
        setData([...data, response.data]);
        closePopup();
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <>
      <Layout>
        <Container>
          <WhiteContainer>
            <Header>
              <Title>Adhoc Payments</Title>
              <AddButton onClick={openPopup}>Add</AddButton>
            </Header>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableCellHeader>Name</TableCellHeader>
                    <TableCellHeader>Department</TableCellHeader>
                    <TableCellHeader>Type</TableCellHeader>
                    <TableCellHeader>Amount</TableCellHeader>
                    <TableCellHeader>Month</TableCellHeader>
                    <TableCellHeader>Year</TableCellHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.Name}</TableCell>
                      <TableCell>{item.Department}</TableCell>
                      <TableCell>{item.Type}</TableCell>
                      <TableCell>{item.Amount}</TableCell>
                      <TableCell>{item.Month}</TableCell>
                      <TableCell>{item.Year}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
            {isPopupOpen && (
              <>
                <Overlay onClick={closePopup} />
                <PopupContainer>
                  <h2>Add Allowance or Deduction</h2>
                  {Object.keys(formData).map((key) => (
                    <FormField key={key}>
                      <Label htmlFor={key}>
                        Enter {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </Label>
                      <Input
                        type="text"
                        id={key}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                      {errors[key] && <ErrorText>{errors[key]}</ErrorText>}
                    </FormField>
                  ))}
                  <Button onClick={insertData}>Insert</Button>
                  <Button onClick={closePopup}>Close</Button>
                </PopupContainer>
              </>
            )}
          </WhiteContainer>
        </Container>
      </Layout>
    </>
  );
};

export default AdhocPayments;
