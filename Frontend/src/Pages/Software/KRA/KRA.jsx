import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import styled from "styled-components";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0; /* Background color of the outer container */
  overflow-x: auto; /* Enable horizontal scrolling if needed */
`;

const InnerContainer = styled.div`
  background-color: white; /* White background for the inner container */
  padding: 20px;
  border-radius: 10px; /* Optional: adds rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a subtle shadow */
  width: 100%;
  max-width: 800px; /* Optional: sets a max-width for the inner container */
  overflow-x: auto; /* Enable horizontal scrolling if needed */
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: black;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto; /* Allow columns to automatically adjust their width */
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: bold;
  color: #000; /* Change the color to black or any other color you prefer */
  background-color: #f9f9f9; /* Change the background to match tbody */
  white-space: nowrap; /* Prevent the header text from wrapping */
`;

const TableData = styled.td`
  padding: 12px 15px;
  color: #000; /* Ensure the text color matches */
  background-color: #f9f9f9; /* Ensure the background color matches */
  border: 1px solid #ddd; /* Add borders around the TableData cells */
  white-space: nowrap; /* Prevent the data text from wrapping */
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 4px 2px;
  cursor: pointer;
`;

const KRA = () => {
  const [KRAs, setKRAs] = useState([]);

  useEffect(() => {
    // Fetch KRAs data when the component mounts
    axios
      .get("http://127.0.0.1:8000/kra_list/")
      .then((response) => {
        console.log("Fetched KRAs:", response.data); // Log fetched data
        setKRAs(response.data); // Update state with fetched KRAs
      })
      .catch((error) => {
        console.error("Error fetching KRAs:", error);
      });
  }, []); // Empty dependency array to run only once when the component mounts

  const handleClick = (kra_id) => {
    // Add logic to redirect to the link
    console.log(`Clicked on KRA ID: ${kra_id}`);
  };

  return (
    <Layout>
      <OuterContainer>
        <InnerContainer>
          <Title>Your KRA's List:</Title>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>ID</TableHeader>
                <TableHeader>KRA</TableHeader>
                <TableHeader>Weightage</TableHeader>
                <TableHeader>KPI</TableHeader>
                <TableHeader>Target</TableHeader>
                <TableHeader>Ratings Scale</TableHeader>
                <TableHeader>Ratings</TableHeader>
                <TableHeader>Self Ratings</TableHeader>
                <TableHeader>Remarks</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Email ID</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {KRAs.map((kra, index) => (
                <TableRow key={index}>
                  <TableData>{kra.kra_no}</TableData>
                  <TableData>{kra.KRA}</TableData>
                  <TableData>{kra.Weightage}</TableData>
                  <TableData>{kra.KPI}</TableData>
                  <TableData>{kra.Target}</TableData>
                  <TableData>{kra.ratingsscale}</TableData>
                  <TableData>{kra.ratings}</TableData>
                  <TableData>{kra.selfratings}</TableData>
                  <TableData>{kra.remarks}</TableData>
                  <TableData>{kra.status}</TableData>
                  <TableData>{kra.email_id}</TableData>
                  <TableData>
                    <Button onClick={() => handleClick(kra.kra_no)}>Click Me</Button>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </InnerContainer>
      </OuterContainer>
    </Layout>
  );
};

export default KRA;
