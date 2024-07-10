import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const jobs = [
  { id: 1, date: "2024-07-10", link: "/detail/1" },
  { id: 2, date: "2024-07-11", link: "/detail/2" },
  { id: 3, date: "2024-07-11", link: "/detail/3" },
  { id: 4, date: "2024-07-11", link: "/detail/4" },
  { id: 5, date: "2024-07-11", link: "/detail/5" },
  { id: 6, date: "2024-07-11", link: "/detail/6" },
  { id: 7, date: "2024-07-11", link: "/detail/7" },
  { id: 8, date: "2024-07-11", link: "/detail/8" },
  { id: 9, date: "2024-07-11", link: "/detail/9" },
];

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-family: "Poppins", sans-serif;

  th {
    padding: 30px;
    border: none;
    font-size: 23px;
  }

  td {
    padding: 30px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-left: none;
    border-right: none;
    font-family: "Ubuntu", sans-serif;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;

  &:hover {
    color: darkblue;
  }
`;

const JDList = () => {
  return (
    <Container>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.date}</td>
              <td>
                <StyledLink to={job.link}>Details</StyledLink>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default JDList;
