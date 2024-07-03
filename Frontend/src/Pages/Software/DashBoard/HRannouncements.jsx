import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const DEPARTMENTS = [
  { id: 205, name: "205 Super Manager" },
  { id: 206, name: "206 Manager" },
  { id: 207, name: "207 HR" },
  { id: 208, name: "208 Employee" },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1000;
  width: 300px;
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const PopupButton = styled(Button)`
  width: 48%;
  margin: 0;
`;

const HRannouncements = () => {
  const [departments, setDepartments] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [ccText, setCcText] = useState("");
  const [sendToAll, setSendToAll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!ccText) newErrors.ccText = "Your Email address is required";
    if (!subject) newErrors.subject = "Subject is required";
    if (!message) newErrors.message = "Message is required";
    if (!sendToAll && departments.length === 0)
      newErrors.departments = "At least one department must be selected";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartments = Array.from(
      event.target.selectedOptions,
      (option) => ({
        id: parseInt(option.value),
        name: option.text,
      })
    );
    setDepartments(selectedDepartments);
  };

  const handleSendToAllChange = () => {
    setSendToAll(!sendToAll);
    if (sendToAll) {
      setDepartments([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setShowPopup(true);
    }
  };

  const handleConfirmSubmit = () => {
    const payload = {
      departments: sendToAll ? "all" : departments,
      subject,
      message,
      ccText,
    };

    axios
      .post("/api/hr-announcements", payload)
      .then((response) => {
        console.log("Announcement sent successfully:", response.data);
        // Reset form fields after successful submission
        setDepartments([]);
        setSubject("");
        setMessage("");
        setCcText("");
        setSendToAll(false);
        setShowPopup(false);
      })
      .catch((error) => {
        console.error("There was an error sending the announcement!", error);
      });
  };

  return (
    <Layout>
      <Container>
        <Box>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="cc">Your Email address:</Label>
              <Input
                type="text"
                value={ccText}
                onChange={(e) => setCcText(e.target.value)}
                placeholder="Email Address"
              />
              {errors.ccText && <p style={{ color: "red" }}>{errors.ccText}</p>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cc">Carbon Copy:</Label>
              <Input
                type="text"
                value={ccText}
                onChange={(e) => setCcText(e.target.value)}
                placeholder="Email Address"
              />
              {errors.ccText && <p style={{ color: "red" }}>{errors.ccText}</p>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="departments">Select departments:</Label>
              <Select
                id="departments"
                multiple
                onChange={handleDepartmentChange}
                disabled={sendToAll}
              >
                {DEPARTMENTS.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </Select>
              {errors.departments && (
                <p style={{ color: "red" }}>{errors.departments}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label>
                <input
                  type="checkbox"
                  checked={sendToAll}
                  onChange={handleSendToAllChange}
                />
                Send announcement to employees of all departments?
              </Label>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject:</Label>
              <Input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && (
                <p style={{ color: "red" }}>{errors.subject}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message:</Label>
              <TextArea
                id="message"
                rows="4"
                cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p style={{ color: "red" }}>{errors.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="attachments">Attach files:</Label>
              <Input id="attachments" type="file" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Container>
      {showPopup && (
        <>
          <Overlay onClick={() => setShowPopup(false)} />
          <Popup>
            <h2>Confirmation!</h2>
            <p>Are you sure you want to submit this question?</p>
            <PopupButtonContainer>
              <PopupButton onClick={handleConfirmSubmit}>Submit</PopupButton>
              <PopupButton onClick={() => setShowPopup(false)}>
                Close
              </PopupButton>
            </PopupButtonContainer>
          </Popup>
        </>
      )}
    </Layout>
  );
};

export default HRannouncements;
