import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Footer from "../../../Components/Software Components/Footer.jsx";
import Nav from "../../../Components/Software Components/Dashboard/Nav.jsx";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
`;

const Detail = styled.div`
  margin-bottom: 20px;
`;

const DetailLabel = styled.span`
  font-weight: bold;
`;

const LeaveDetails = () => {
  const { id } = useParams();
  const [leaveDetails, setLeaveDetails] = useState(null);

  useEffect(() => {
    fetchLeaveDetails();
  }, [id]);

  const fetchLeaveDetails = async () => {
    try {
      const response = await axios.get(`YOUR_API_ENDPOINT/leave/${id}`);
      setLeaveDetails(response.data);
    } catch (error) {
      console.error("Error fetching leave details:", error);
    }
  };

  return (
    <>
      <Nav />
      <Container>
        <Header>
          <Title>Leave Details</Title>
        </Header>
        {leaveDetails ? (
          <>
            <Detail>
              <DetailLabel>Employee Name: </DetailLabel>
              {leaveDetails.employeeName}
            </Detail>
            <Detail>
              <DetailLabel>Leave Type: </DetailLabel>
              {leaveDetails.leaveType}
            </Detail>
            <Detail>
              <DetailLabel>Posting Date: </DetailLabel>
              {leaveDetails.postingDate}
            </Detail>
            <Detail>
              <DetailLabel>Status: </DetailLabel>
              {leaveDetails.status}
            </Detail>
            <Detail>
              <DetailLabel>Reason: </DetailLabel>
              {leaveDetails.reason}
            </Detail>
            {/* Add more details as needed */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default LeaveDetails;
