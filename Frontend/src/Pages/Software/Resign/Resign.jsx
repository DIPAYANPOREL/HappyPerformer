import React from "react";
import styled from "styled-components";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";
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

const Resign = () => {
  const [joiningDate, setJoiningDate] = React.useState("");
  const [yearsOfService, setYearsOfService] = React.useState(0);

  const handleJoiningDateChange = (event) => {
    setJoiningDate(event.target.value);
  };

  const handleYearsOfServiceChange = (event) => {
    setYearsOfService(event.target.value);
  };

  return (
    <>
      <Nav />
      <Container>
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
      </Container>
      <Footer />
    </>
  );
};

export default Resign;
