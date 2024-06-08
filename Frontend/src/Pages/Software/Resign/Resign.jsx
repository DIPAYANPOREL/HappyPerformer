import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import ResignForm from "../../../Components/Software Components/Resign/ResignForm";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/resign", {
          withCredentials: true,
        });
        const data = response.data;

        // Assuming the backend sends joiningDate in the format 'YYYY-MM-DD'
        setJoiningDate(data.joiningDate);

        // Calculating years of service from the joining date
        const currentYear = new Date().getFullYear();
        const joiningYear = new Date(data.joiningDate).getFullYear();
        const years = currentYear - joiningYear;
        setYearsOfService(years);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
