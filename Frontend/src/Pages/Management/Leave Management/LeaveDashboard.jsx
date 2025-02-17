import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
// import Footer from '../../Components/Software Components/Footer';
// import Nav from '../../Components/Software Components/Dashboard/Nav';
import Header from "../../../Components/Software Components/Dashboard/Header";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const Statistic = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  flex: 1;
  margin: 0 10px 20px;
  @media (max-width: 768px) {
    margin: 0 5px 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const TableHeader = styled.th`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  background-color: #666;
  font-weight: bold;
  color: #f8f8f8;
  text-align: center;
`;

const StatusSpan = styled.span`
  color: ${({ status }) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Pending":
        return "blue";
      case "Rejected":
        return "red";
      default:
        return "inherit";
    }
  }};
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LeaveDashboard = () => {
  const [registeredEmployees, setRegisteredEmployees] = useState(0);
  const [departments, setDepartments] = useState(0);
  const [leaveTypes, setLeaveTypes] = useState(0);
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setRegisteredEmployees(60);
      setDepartments(10);
      setLeaveTypes(5);
      setLeaveApplications([
        {
          id: 1,
          employeeName: "Shawn Pinto",
          leaveType: "Medical Leave",
          postingDate: "2023-05-01",
          status: "Approved",
        },
        {
          id: 2,
          employeeName: "Arthur Morgan",
          leaveType: "Casual Leave",
          postingDate: "2023-04-15",
          status: "Pending",
        },
        {
          id: 3,
          employeeName: "Michael Jackson",
          leaveType: "Medical Leave",
          postingDate: "2023-03-20",
          status: "Rejected",
        },
        {
          id: 4,
          employeeName: "Peter Griffin",
          leaveType: "Medical Leave",
          postingDate: "2023-03-20",
          status: "Rejected",
        },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {/* <Nav /> */}
      <Layout>
        <Header title="Leaves" />
        <Container>
          <StatisticsContainer>
            <Statistic>
              <h3>Total Registered Employees</h3>
              <p>{registeredEmployees}</p>
            </Statistic>
            <Statistic>
              <h3>Listed Departments</h3>
              <p>{departments}</p>
            </Statistic>
            <Statistic>
              <h3>Listed Leave Types</h3>
              <p>{leaveTypes}</p>
            </Statistic>
          </StatisticsContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Employee Name</TableHeader>
                <TableHeader>Leave Type</TableHeader>
                <TableHeader>Posting Date</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Details</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {leaveApplications.map((application, index) => (
                <TableRow key={application.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{application.employeeName}</TableCell>
                  <TableCell>{application.leaveType}</TableCell>
                  <TableCell>{application.postingDate}</TableCell>
                  <TableCell>
                    <StatusSpan status={application.status}>
                      {application.status}
                    </StatusSpan>
                  </TableCell>
                  <TableCell>
                    <Link to={`/LeaveDetails/${application.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Container>
      </Layout>

      {/* < Footer /> */}
    </>
  );
};

export default LeaveDashboard;
