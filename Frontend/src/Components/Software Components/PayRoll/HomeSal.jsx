import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 40px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TableWrapper = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #0077b6;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: left;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  border: 1px solid #dddddd;
  text-align: left;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  background-color: ${(props) => (props.primary ? "#0077b6" : "#ffbf00")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const HomeSal = () => {
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      designation: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      designation: "Software Engineer",
    },
  ];

  const [lines, setLines] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectChange = (e) => {
    setLines(parseInt(e.target.value));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = dummyData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Select value={lines} onChange={handleSelectChange}>
          <option value="10">10 lines</option>
          <option value="20">20 lines</option>
          <option value="30">30 lines</option>
        </Select>
      </Container>
      <TableWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Designation</TableHeadCell>
              <TableHeadCell>Actions</TableHeadCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {filteredData.slice(0, lines).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell>
                  <ActionButton primary>Add Salary</ActionButton>
                  <ActionButton>Revision History</ActionButton>
                  <ActionButton primary>Display Details</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
};

export default HomeSal;
