import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';

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
  border-radius: 4px;
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
  background-color: ${(props) => (props.status === 'New' ? 'red' : 'green')};
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [cases, setCases] = useState([
    {
      title: 'Travel Trip',
      type: 'Travel and Expense',
      created: 'About 1 month ago',
      assignedTo: 'Elvis Presley',
      status: 'New',
    },
    {
      title: 'Project Proposal',
      type: 'Project Management',
      created: '2 weeks ago',
      assignedTo: 'Lenny Kravitz',
      status: 'In Progress',
    },
    {
      title: 'Notification System',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Rick Sanchez',
      status: 'Pending',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Rick Rubin',
      status: 'Resolved',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Elvis Presley',
      status: 'New',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Dirk Nowitzki',
      status: 'In Progress',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Rick Rubin',
      status: 'New',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Rick Rubin',
      status: 'Pending',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Magic Johnson',
      status: 'Resolved',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Derrick Rose',
      status: 'Pending',
    },
    {
      title: 'Not identified',
      type: 'Software Development',
      created: '3 days ago',
      assignedTo: 'Dirk Nowitzki',
      status: 'Resolved',
    },
  ]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCases = cases.filter(
    (caseItem) =>
      caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
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
                  <TableCell>{caseItem.title}</TableCell>
                  <TableCell>{caseItem.type}</TableCell>
                  <TableCell>{caseItem.created}</TableCell>
                  <TableCell>{caseItem.assignedTo}</TableCell>
                  <TableCell>
                    <StatusBadge status={caseItem.status}>{caseItem.status}</StatusBadge>
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

export default App;
