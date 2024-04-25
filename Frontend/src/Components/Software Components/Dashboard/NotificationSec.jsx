import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 5px;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 20px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

const NotificationSec = () => {
  return <Container>Notification will be here..</Container>;
};

export default NotificationSec;
