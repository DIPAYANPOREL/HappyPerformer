import React, { useState } from 'react';
import styled from 'styled-components';
// import Footer from '../../Components/Software Components/Footer';
// import Nav from '../../Components/Software Components/Dashboard/Nav';


const MainContainer = styled.div`
  max-width: 1000px;
  width: 100%;

  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;
const employees = [
  { id: 1, email: '123@gmail.com', name: 'John', role: 'Employee', phone: 90227789 },
  { id: 2, email: 'a123.salahkaar@gmail.com', name: 'Shawn', role: 'Manager', phone: 9000009794 },
  { id: 3, email: '3214@gmail.com', name: 'Clive', role: 'HR', phone: 88000006204 },
  { id: 4, email: '4566@gmail.com', name: 'Derek', role: 'HR', phone: 10000567890 },
  { id: 5, email: '54344@gmail.com', name: 'Nathan', role: 'Employee', phone: 77700000 },
  { id: 6, email: '432@gmail.com', name: 'Muhammad', role: 'Employee', phone: 7210000 },
  { id: 7, email: '3456@gmail.com', name: 'Prashant', role: 'Employee', phone: 700000005 },
  { id: 8, email: '98776@gmail.com', name: 'Dirk', role: 'Employee', phone: 80000000 },
  { id: 9, email: '6544@gmail.com', name: 'Giannis', role: 'Employee', phone: 95000000 },
  { id: 10, email: '34566@gmail.com', name: 'Wajid', role: 'Employee', phone: 700000000 },
  { id: 11, email: '6776@gmail.com', name: 'Herbert', role: 'Employee', phone: 9020000000 },
  { id: 12, email: '65443@gmail.com', name: 'Jordan', role: 'Manager', phone: 9300000000 },
  { id: 13, email: '8565545@gmail.com', name: 'Paula', role: 'HR', phone: 8800004 },
  { id: 14, email: '0987@gmail.com', name: 'Peter', role: 'HR', phone: 10000000},
  { id: 15, email: '2468@gmail.com', name: 'David', role: 'Employee', phone: 770000000 },
  { id: 16, email: '06345@gmail.com', name: 'Nancy', role: 'Employee', phone: 7000000000 },
  { id: 17, email: '30980@gmail.com', name: 'Helen', role: 'Employee', phone: 7620000990 },
  { id: 18, email: '095432@gmail.com', name: 'Noor', role: 'Employee', phone: 8446090909},
  { id: 19, email: '23487@gmail.com', name: 'Abdullah', role: 'Employee', phone: 9500909090 },
  { id: 20, email: '09090@gmail.com', name: 'Anthony', role: 'Employee', phone: 76909090909 },
  
];
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
    background-color: #3498db; /* Change hover color */
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
const EmployeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: 'asc',
  });

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
    {/* <Nav/> */}
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
            <EntriesSelect
              value={entriesPerPage}
              onChange={handleEntriesChange}
            >
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
          <PaginationButton
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
          >
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
          <PaginationButton
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
          >
            Next
          </PaginationButton>
        </PaginationContainer>
      </MainContainer>
      {/* <Footer /> */}
      </>
  );
};
export default EmployeeTable;
