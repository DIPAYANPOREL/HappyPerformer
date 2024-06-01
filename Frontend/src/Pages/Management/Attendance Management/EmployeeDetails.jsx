import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const MainContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

const TableHead = styled.thead`
  background-color: #f7f7f7;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3498db;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 200px;
`;

const EntriesSelect = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #fff;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? '#4caf50' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#45a049' : '#f2f2f2')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: 'asc',
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  const totalPages = Math.ceil(employees.length / entriesPerPage);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  const sortedEmployees = (column, direction) => {
    const sorted = [...employees].sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  };

  const currentEntries = sortedEmployees(sortOrder.column, sortOrder.direction)
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstEntry, indexOfLastEntry);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    setSortOrder({
      column,
      direction: sortOrder.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  return (
    <>
    <Nav/>
      <MainContainer>
        <h2>Employee Details</h2>
        <ControlsContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div>
            Show
            <EntriesSelect value={entriesPerPage} onChange={handleEntriesChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </EntriesSelect>
            entries
          </div>
        </ControlsContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader onClick={() => handleSort('email')}>Employee id</TableHeader>
              <TableHeader onClick={() => handleSort('name')}>Name</TableHeader>
              <TableHeader onClick={() => handleSort('role')}>Role</TableHeader>
              <TableHeader onClick={() => handleSort('phone')}>Phone no</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {currentEntries.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>
                  <EditButton>Edit</EditButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <PaginationContainer>
          <PaginationButton disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>
            Previous
          </PaginationButton>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <PaginationButton
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </PaginationButton>
          ))}
          <PaginationButton disabled={currentPage === totalPages} onClick={() => changePage(currentPage + 1)}>
            Next
          </PaginationButton>
        </PaginationContainer>
      </MainContainer>
      <Footer/>
    </>
  );
};

export default EmployeeDetails;