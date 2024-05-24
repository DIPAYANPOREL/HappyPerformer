import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 100%;
  height: 71vh;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
`;
const TableContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow-x: auto;
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  text-align: left;
  white-space: nowrap;
`;
const TableHead = styled.thead`
  background-color: #f5f5f5;
  color: #333;
  border-bottom: 1px solid #ddd;
  text-transform: uppercase;
  font-size: 12px;
`;
const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
const TableHeader = styled.th`
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
const TableBody = styled.tbody``;

const TableData = styled.td`
  padding: 12px 10px;
  border-bottom: 1px solid #ddd;
`;
const NoDataMessage = styled.p`
  text-align: center;
  font-style: italic;
  color: #888;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 80%;
`;
const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  width: 200px;
`;
const EntriesSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 10px;
`;
const PaginationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const PaginationButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${props => props.disabled ? '#f5f5f5' : '#fff'};
  color: ${props => props.disabled ? '#aaa' : '#333'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin: 0 5px;

  &:hover {
    background-color: ${props => !props.disabled && '#f5f5f5'};
  }
`;

const RevisionHistory = () => {
  const [data, setData] = useState([
    {
      id: 1,
      email: 'shawn.37002@.com',
      revisionPercentage: 5,
      effectiveFrom: '2024-05-01',
      basic: 5000,
      hra: 1000,
      conveyance: 500,
      da: 700,
      allowance: 300,
      annualCTC: 25000,
      paymentMethod: 'Bank Transfer',
      notes: 'No notes',
      remarks: 'Good performance',
    },
    {
      id: 2,
      email: '123.salahkaar@gmail.com',
      revisionPercentage: 8,
      effectiveFrom: '2024-06-01',
      basic: 6000,
      hra: 1200,
      conveyance: 600,
      da: 800,
      allowance: 400,
      annualCTC: 30000,
      paymentMethod: 'Cash',
      notes: 'No notes',
      remarks: 'Bad Performance',
    },

  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePreviousPage = () => setCurrentPage(currentPage - 1);
  const handleNextPage = () => setCurrentPage(currentPage + 1);

  return (
    <>
    <Nav/>
    <Container>
      <Title>Display Salary Revision</Title>
      <ControlsContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <EntriesSelect
          value={entriesPerPage}
          onChange={e => setEntriesPerPage(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </EntriesSelect>
      </ControlsContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Id</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Revision %</TableHeader>
              <TableHeader>Effective From</TableHeader>
              <TableHeader>Basic</TableHeader>
              <TableHeader>HRA</TableHeader>
              <TableHeader>Conveyance</TableHeader>
              <TableHeader>DA</TableHeader>
              <TableHeader>Allowance</TableHeader>
              <TableHeader>Annual CTC</TableHeader>
              <TableHeader>Payment Method</TableHeader>
              <TableHeader>Notes</TableHeader>
              <TableHeader>Remarks</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentEntries.length > 0 ? (
              currentEntries.map((item, index) => (
                <TableRow key={index}>
                  <TableData>{item.id}</TableData>
                  <TableData>{item.email}</TableData>
                  <TableData>{item.revisionPercentage}</TableData>
                  <TableData>{item.effectiveFrom}</TableData>
                  <TableData>{item.basic}</TableData>
                  <TableData>{item.hra}</TableData>
                  <TableData>{item.conveyance}</TableData>
                  <TableData>{item.da}</TableData>
                  <TableData>{item.allowance}</TableData>
                  <TableData>{item.annualCTC}</TableData>
                  <TableData>{item.paymentMethod}</TableData>
                  <TableData>{item.notes}</TableData>
                  <TableData>{item.remarks}</TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan={13}>
                  <NoDataMessage>No data available in table</NoDataMessage>
                </TableData>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationButtons>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          disabled={indexOfLastEntry >= filteredData.length}
          onClick={handleNextPage}
        >
          Next
        </PaginationButton>
      </PaginationButtons>
    </Container>
    <Footer/>
    </>
  );
};

export default RevisionHistory;
