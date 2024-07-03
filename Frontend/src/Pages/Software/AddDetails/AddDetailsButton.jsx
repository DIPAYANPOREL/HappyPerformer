import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddDetailsButton = ({ onClick, showForm }) => {
  return (
    <Button onClick={onClick}>{showForm ? "Close Form" : "Add Details"}</Button>
  );
};

export default AddDetailsButton;
