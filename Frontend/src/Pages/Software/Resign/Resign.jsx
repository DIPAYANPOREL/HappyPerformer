import React from "react";
import styled from "styled-components";
import ResignForm from "../../../Components/Software Components/Resign/ResignForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 30px;
`;
const JoinDate = styled.div``;
const YearsOfService = styled.div``;
const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SaveBtn = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0px;
  cursor: pointer;
`;

const Resign = () => {
  const [joiningDate, setJoiningDate] = React.useState("");
  const [yearsOfService, setYearsOfService] = React.useState(0);

  const handleJoiningDateChange = (event) => {
    setJoiningDate(event.target.value);
  };

  const handleYearsOfServiceChange = (event) => {
    setYearsOfService(event.target.value);
  };

  const handleSave = () => {};

  return (
    <Container>
      {/* That upper section */}
      <InfoSection>
        <JoinDate>Joining Date: {joiningDate}</JoinDate>
        <YearsOfService>Years of services: {yearsOfService}</YearsOfService>
      </InfoSection>
      <Form>
        <ResignForm
          joiningDate={joiningDate}
          onJoiningDateChange={handleJoiningDateChange}
          yearsOfService={yearsOfService}
          onYearsOfServiceChange={handleYearsOfServiceChange}
        />
      </Form>
      <SaveBtn onClick={handleSave}>Save</SaveBtn>
    </Container>
  );
};

export default Resign;
