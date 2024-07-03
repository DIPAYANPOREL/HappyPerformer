import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import axios from "axios";

const Container = styled.div`
  flex: 1;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 20px auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
`;

const TableHead = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 4px 8px;
  }
`;

const SubmitButton = styled(Button)`
  display: block;
  margin: 20px auto 0;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: visibility 0.3s, opacity 0.3s;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const PopupTitle = styled.h2`
  margin-bottom: 20px;
`;

const YesButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color: darkblue;
  }
`;

const KRAForm = () => {
  const [employees] = useState([
    "Aadarsh Rajput",
    "Abhishek Hule",
    "Derek D'souza",
    "Shawn Pinto",
    "Anuja Sakulkar",
    "Akshita ",
    "Priyank Jain",
    "Insert Name",
    "Insert Name",
    "Insert Name",
    "Insert Name",
    "Akshay Sharma",
    "",
  ]);
  const [formData, setFormData] = useState([
    { KRA: "", KPI: "", Target: "", Weightage: "", Rating: "" },
  ]);
  const [date, setDate] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleAddRow = () => {
    setFormData([
      ...formData,
      { KRA: "", KPI: "", Target: "", Weightage: "", Rating: "" },
    ]);
  };

  const handleDeleteRow = (index) => {
    const newFormData = formData.filter((_, i) => i !== index);
    setFormData(newFormData);
  };

  const handleChange = (index, field, value) => {
    const newFormData = formData.map((row, i) => {
      if (i === index) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setFormData(newFormData);
  };

  const handleSubmit = () => {
    setPopupVisible(true);
  };

  const handleConfirm = () => {
    setPopupVisible(false);
    console.log("Form submitted", { employees, date, formData });

    const payload = {
      employees,
      date,
      formData,
    };

    axios
      .post("/api/your-endpoint", payload) // gotta Change "/api/your-endpoint" to the actual API endpoint
      .then((response) => {
        console.log("Response:", response.data);
        // Handle success response
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  };

  return (
    <Layout>
      <Container>
        <Title>KRA Form</Title>
        <FormGroup>
          <Label>Select Single/Multiple Employees:</Label>
          <Select multiple>
            {employees.map((employee) => (
              <option key={employee} value={employee}>
                {employee}
              </option>
            ))}
          </Select>
          <small>
            Hold down the Ctrl (windows) / Command (Mac) button to select
            multiple employees.
          </small>
        </FormGroup>
        <FormGroup>
          <Label>Date:</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>S.No:</TableHeader>
              <TableHeader>KRA:</TableHeader>
              <TableHeader>KPI:</TableHeader>
              <TableHeader>Target:</TableHeader>
              <TableHeader>Weightage:</TableHeader>
              <TableHeader>Ratings Scale:</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {formData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Input
                    value={row.KRA}
                    onChange={(e) => handleChange(index, "KRA", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.KPI}
                    onChange={(e) => handleChange(index, "KPI", e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={row.Target}
                    onChange={(e) =>
                      handleChange(index, "Target", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={row.Weightage}
                    onChange={(e) =>
                      handleChange(index, "Weightage", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={row.Rating}
                    onChange={(e) =>
                      handleChange(index, "Rating", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <DeleteButton onClick={() => handleDeleteRow(index)}>
                    Delete
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleAddRow}>Clone Last Row And Add At End</Button>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        <PopupOverlay visible={popupVisible}>
          <PopupContainer>
            <PopupTitle>Confirmation!</PopupTitle>
            <p>Click "Yes" for Confirmation!</p>
            <YesButton onClick={handleConfirm}>Yes</YesButton>
          </PopupContainer>
        </PopupOverlay>
      </Container>
    </Layout>
  );
};

export default KRAForm;
