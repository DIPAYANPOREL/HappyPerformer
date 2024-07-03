import axios from "axios";
import React, { useState, useEffect } from "react";
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
  const [resignationData, setResignationData] = useState({});
  const [joiningDate, setJoiningDate] = useState("");
  const [yearsOfService, setYearsOfService] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/Resign", {
          withCredentials: true,
        });
        const data = response.data;

        // Set resignation data received from the server
        setResignationData(data);

        // Extract joining date from resignation data
        const joiningDate = data[0]?.submit_date || "";
        setJoiningDate(joiningDate);

        // Calculating years of service from the joining date
        const currentYear = new Date().getFullYear();
        const joiningYear = new Date(joiningDate).getFullYear();
        const years = currentYear - joiningYear;
        setYearsOfService(years);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
            resignationData={resignationData}
            joiningDate={joiningDate}
            yearsOfService={yearsOfService}
          />
        </Form>
      </Container>
    </Layout>
  );
};

export default Resign;
