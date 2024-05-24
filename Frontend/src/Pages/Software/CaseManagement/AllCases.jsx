import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  width: 50%;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  flex: 1;
  margin-right: 1rem;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #333;
`;

const TableHeader = styled.th`
  background-color: #666;
  color: #fff;
  padding: 0.5rem;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;

const StatusBadge = styled.span`
  background-color: ${(props) =>
    props.status === "New"
      ? "red"
      : props.status === "In Progress"
      ? "orange"
      : props.status === "Pending"
      ? "blue"
      : "green"};
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const AllCases = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get("http:");
        console.log("Fetched data:", response.data);
        if (Array.isArray(response.data.cases)) {
          setCases(response.data.cases);
        } else {
          console.error("Expected an array of cases, but got:", response.data);
        }
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchCases();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCases = Array.isArray(cases)
    ? cases.filter(
        (caseItem) =>
          caseItem.case_title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          caseItem.case_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          caseItem.case_status.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <Nav />
      <Container>
        <h2>All Cases</h2>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search By Case, Type, Status"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </SearchContainer>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>Case</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Created</TableHeader>
                <TableHeader>Assigned To</TableHeader>
                <TableHeader>Status</TableHeader>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((caseItem, index) => (
                <TableRow key={index}>
                  <TableCell>{caseItem.case_title}</TableCell>
                  <TableCell>{caseItem.case_type}</TableCell>
                  <TableCell>{caseItem.case_date}</TableCell>
                  <TableCell>{caseItem.assigned_to}</TableCell>
                  <TableCell>
                    <StatusBadge status={caseItem.case_status}>
                      {caseItem.case_status}
                    </StatusBadge>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </>
  );
};

export default AllCases;
