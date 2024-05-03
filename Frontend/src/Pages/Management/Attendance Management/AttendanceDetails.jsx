import React, { useState } from 'react';
import styled from 'styled-components';



const MainContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`; 
const employees = [
  { id: 1, email: '123@gmail.com', name: 'John', date: 'September 07, 2023', time: '11:46 pm' },
  { id: 2, email: 'a123.salahkaar@gmail.com', name: 'Shawn', date: 'July 03, 2023', time: '12:46 pm' },
  { id: 3, email: '3214@gmail.com', name: 'Clive', date: 'July 12, 2023', time: '12:46 pm' },
  { id: 4, email: '4566@gmail.com', name: 'Derek', date: 'October 13 , 2023', time: '12:46 pm' },
  { id: 5, email: '54344@gmail.com', name: 'Nathan', date: 'July 11, 2023', time: '12:46 pm' },
  { id: 6, email: '432@gmail.com', name: 'Muhammad', date: 'August 11, 2023', time: '10:46 pm' },
  { id: 7, email: '3456@gmail.com', name: 'Prashant', date: 'June 06, 2023', time: '11:46 pm' },
  { id: 8, email: '98776@gmail.com', name: 'Dirk', date: 'January 04, 2023', time: '12:46 pm'},
  { id: 9, email: '6544@gmail.com', name: 'Giannis', date: 'April 12, 2023', time: '11:46 pm' },
  { id: 10, email: '34566@gmail.com', name: 'Wajid', date: 'June 16, 2023', time: '10:46 pm'},
  { id: 11, email: '6776@gmail.com', name: 'Herbert', date: 'November 26, 2023', time: '08:46 pm' },
  { id: 12, email: '65443@gmail.com', name: 'Jordan', date: 'August 23, 2023', time: '09:46 pm' },
  { id: 13, email: '8565545@gmail.com', name: 'Paula', date: 'September 30, 2023', time: '11:46 pm' },
  { id: 14, email: '0987@gmail.com', name: 'Peter', date: 'February 08  , 2023', time: '09:46 pm'},
  { id: 15, email: '2468@gmail.com', name: 'David', date: 'June 09, 2023', time: '09:46 pm' },
  { id: 16, email: '06345@gmail.com', name: 'Nancy', date: 'March 13, 2023', time: '10:46 pm' },
  { id: 17, email: '30980@gmail.com', name: 'Helen', date: 'October 11, 2023', time: '08:46 pm'},
  { id: 18, email: '095432@gmail.com', name: 'Noor', date: 'May 28, 2023', time: '11:46 pm'},
  { id: 19, email: '23487@gmail.com', name: 'Abdullah', date: 'June 05, 2023', time: '10:46 pm' },
  { id: 20, email: '09090@gmail.com', name: 'Anthony', date: 'July 17, 2023', time: '08:46 pm' },
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
    <div>
      <MainContainer>
      <h2>Attendance Details</h2>
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
              <TableHeader onClick={() => handleSort('date')}>Date</TableHeader>
              <TableHeader onClick={() => handleSort('time')}>Time</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {currentEntries.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell>{employee.time}</TableCell>
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
    </div>
  );
};
export default EmployeeTable;
