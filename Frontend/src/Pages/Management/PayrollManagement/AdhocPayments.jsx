import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

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

const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
  flex-grow: 1;
  margin: 0;
  font-size: 1.5rem;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
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
  &:last-child {
    border-right: none;
  }
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
  border-radius: 8px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #0056b3;
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/AdhocPayments")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data from server");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      name: formData.name,
      dept: formData.department,
      type: formData.type,
      amt: parseFloat(formData.amount),
      mon: formData.month,
      year: parseInt(formData.year),
    };

    axios
      .post("http://127.0.0.1:8000/AdhocPayments/", newData, {
        withCredentials: true,
      })
      .then((response) => {
        setData([...data, response.data]);
        closePopup();
        alert("Data submitted successfully");
        setFormData({
          name: "",
          department: "",
          type: "",
          amount: "",
          month: "",
          year: "",
        });
        fetchData();
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <>
      <Layout>
        <Header title="Adhoc Payments" />
        <Container>
          <WhiteContainer>
            <Headers>
              <Title>Adhoc Payments</Title>
              <AddButton onClick={openPopup}>Add</AddButton>
            </Headers>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : data.length === 0 ? (
              <p>No data available</p>
            ) : (
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
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.dept}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.amt}</TableCell>
                        <TableCell>{item.mon}</TableCell>
                        <TableCell>{item.year}</TableCell>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </TableContainer>
            )}
            {isPopupOpen && (
              <>
                <Overlay onClick={closePopup} />
                <PopupContainer>
                  <h2>Add Allowance or Deduction</h2>
                  <FormField>
                    <Label htmlFor="name">Enter Name:</Label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <ErrorText>{errors.name}</ErrorText>}
                  </FormField>
                  <FormField>
                    <Label htmlFor="department">Enter Department:</Label>
                    <Input
                      type="text"
                      id="department"
                      value={formData.department}
                      onChange={handleChange}
                    />
                    {errors.department && (
                      <ErrorText>{errors.department}</ErrorText>
                    )}
                  </FormField>
                  <FormField>
                    <Label htmlFor="type">Enter Type:</Label>
                    <Input
                      type="text"
                      id="type"
                      value={formData.type}
                      onChange={handleChange}
                    />
                    {errors.type && <ErrorText>{errors.type}</ErrorText>}
                  </FormField>
                  <FormField>
                    <Label htmlFor="amount">Enter Amount:</Label>
                    <Input
                      type="text"
                      id="amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    {errors.amount && <ErrorText>{errors.amount}</ErrorText>}
                  </FormField>
                  <FormField>
                    <Label htmlFor="month">Enter Month:</Label>
                    <Input
                      type="text"
                      id="month"
                      value={formData.month}
                      onChange={handleChange}
                    />
                    {errors.month && <ErrorText>{errors.month}</ErrorText>}
                  </FormField>
                  <FormField>
                    <Label htmlFor="year">Enter Year:</Label>
                    <Input
                      type="text"
                      id="year"
                      value={formData.year}
                      onChange={handleChange}
                    />
                    {errors.year && <ErrorText>{errors.year}</ErrorText>}
                  </FormField>
                  <div>
                    <Button onClick={insertData}>Submit</Button>
                    <Button onClick={closePopup}>Cancel</Button>
                  </div>
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
