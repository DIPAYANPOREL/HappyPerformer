import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import ResignForm from "../../../Components/Software Components/Resign/ResignForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 30px;
  flex-wrap: wrap;
`;

const JoinDate = styled.div`
  margin: 10px;
`;

const YearsOfService = styled.div`
  margin: 10px;
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Resign = () => {
  const [joiningDate, setJoiningDate] = useState("");
  const [yearsOfService, setYearsOfService] = useState(0);

  const handleJoiningDateChange = (event) => {
    setJoiningDate(event.target.value);
  };

  const handleYearsOfServiceChange = (event) => {
    setYearsOfService(event.target.value);
  };

  return (
    <Layout>
      <Header title="Resign" />
      <Container>
        <InfoSection>
          <JoinDate>Joining Date: {joiningDate}</JoinDate>
          <YearsOfService>Years of Service: {yearsOfService}</YearsOfService>
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
    </Layout>
  );
};

export default Resign;
