import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

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
  const [data, setData] = useState([]);
  const [lines, setLines] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/HomeSalary");
        setData(response.data.employees);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    setLines(parseInt(e.target.value));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(
    (row) =>
      row.emp_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.emp_emailid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.emp_role.toLowerCase().includes(searchQuery.toLowerCase())
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
        {filteredData.length === 0 ? (
          <p>No data available</p>
        ) : (
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
              {filteredData.slice(0, lines).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.emp_name}</TableCell>
                  <TableCell>{row.emp_emailid}</TableCell>
                  <TableCell>{row.emp_role}</TableCell>
                  <TableCell>
                    <ActionButton
                      primary
                      onClick={() => navigate(`/AddSalary/${row.emp_emailid}`)}
                    >
                      Add Salary
                    </ActionButton>
                    <ActionButton
                      onClick={() =>
                        navigate(`/RevisionHistory/${row.emp_emailid}`)
                      }
                    >
                      Revision History
                    </ActionButton>
                    <ActionButton
                      primary
                      onClick={() =>
                        navigate(`/DisplayDetails/${row.emp_emailid}`)
                      }
                    >
                      Display Details
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        )}
      </TableWrapper>
    </Wrapper>
  );
};

export default HomeSal;
