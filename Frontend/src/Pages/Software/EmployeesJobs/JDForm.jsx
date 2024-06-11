import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  flex: 1;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const WhiteContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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
`;

const TableCell = styled.td`
  padding: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  border-radius: 8px;
  text-align: center;
`;

const PopupTitle = styled.h2`
  margin-bottom: 20px;
`;

const YesButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color: #007bff;
  }
`;

const JDForm = () => {
  const [jdName, setJdName] = useState("");
  const [date, setDate] = useState("");
  const [responsibilities, setResponsibilities] = useState([
    { id: 1, value: "" },
  ]);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleAddRow = () => {
    setResponsibilities([
      ...responsibilities,
      { id: responsibilities.length + 1, value: "" },
    ]);
  };

  const handleDeleteRow = (id) => {
    setResponsibilities(responsibilities.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, value) => {
    const newResponsibilities = responsibilities.map((row) => {
      if (row.id === id) {
        return { ...row, value: value };
      }
      return row;
    });
    setResponsibilities(newResponsibilities);
  };

  const handleSubmit = () => {
    setPopupVisible(true);
  };

  const handleConfirm = () => {
    setPopupVisible(false);

    const payload = {
      jdName,
      date,
      responsibilities: responsibilities.map(
        (responsibility) => responsibility.value
      ),
    };

    axios
      .post("/api/jd-form", payload) //check with backend
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the form:", error);
      });
  };

  return (
    <Layout>
      <Container>
        <WhiteContainer>
          <Title>JD Form</Title>
          <FormGroup>
            <Label>Select Single/Multiple Employees</Label>
            <Select multiple>
              <option>Aadarsh Rajput</option>
              <option>Abhishek Hule</option>
              <option>Anuja Sakulkar</option>
              <option>Chirag Panchal</option>
              <option>Derek D'souza</option>
              <option>Vijay Varia</option>
              <option>Priyank Jain</option>
              <option>Vedant Mahalkar</option>
            </Select>
            <small>
              Hold down the Ctrl (windows) / Command (Mac) button to select
              multiple employees.
            </small>
          </FormGroup>
          <FormGroup>
            <Label>JD Name</Label>
            <Input
              type="text"
              value={jdName}
              onChange={(e) => setJdName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Date</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormGroup>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>S.No.</TableHeader>
                <TableHeader>Responsibilities</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {responsibilities.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      value={row.value}
                      onChange={(e) =>
                        handleInputChange(row.id, e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <DeleteButton onClick={() => handleDeleteRow(row.id)}>
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
              <p>Click yes for Confirmation!</p>
              <YesButton onClick={handleConfirm}>Yes</YesButton>
            </PopupContainer>
          </PopupOverlay>
        </WhiteContainer>
      </Container>
    </Layout>
  );
};

export default JDForm;
