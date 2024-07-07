import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../Components/Software Components/Footer';
import Nav from '../../Components/Software Components/Dashboard/Nav';
import Layout from '../../Components/Software Components/Dashboard/Layout';

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f0f0f0; /* Ensure a background color for the whole page */
`;

const LeaveHistoryContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* Ensure the container doesn't get too wide */
  padding: 20px;
  background-color: #fff;
  border-radius: 10px; /* Add rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  overflow-x: auto; /* Enable horizontal scrolling if needed */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
  white-space: nowrap; /* Prevent text from wrapping */
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Prevent text from wrapping */
`;

const LeaveHistory = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaveData();
  }, []);

  const fetchLeaveData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/LeaveHistory/'); // Replace with your API endpoint
      if (response.data.Leaves) {
        setLeaveData(response.data.Leaves);
      } else {
        setLeaveData([]);
      }
    } catch (error) {
      console.error('Error fetching leave data:', error);
      setError('Error fetching leave data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Nav />
        <Container>
          <LeaveHistoryContainer>
            <h2>Loading...</h2>
          </LeaveHistoryContainer>
        </Container>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav />
        <Container>
          <LeaveHistoryContainer>
            <h2>{error}</h2>
          </LeaveHistoryContainer>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Layout>
      <Container>
        <LeaveHistoryContainer>
          <h2>Leave History</h2>
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Leave Type</Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th>Posting Date</Th>
                <Th>Admin Remark</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {leaveData.length > 0 ? (
                leaveData.map((leave) => (
                  <tr key={leave.id}>
                    <Td>{leave.id}</Td>
                    <Td>{leave.LeaveType__LeaveType}</Td>
                    <Td>{leave.FromDate}</Td>
                    <Td>{leave.ToDate}</Td>
                    <Td>{leave.PostingDate}</Td>
                    <Td>{leave.AdminRemark}</Td>
                    <Td>{leave.Status}</Td>
                  </tr>
                ))
              ) : (
                <tr>
                  <Td colSpan="7">No leave records found.</Td>
                </tr>
              )}
            </tbody>
          </Table>
        </LeaveHistoryContainer>
      </Container>
      </Layout>
    </>
  );
};

export default LeaveHistory;
