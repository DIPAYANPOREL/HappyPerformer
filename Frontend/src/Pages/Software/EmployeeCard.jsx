import { DeleteOutlineOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  margin: 10px;
  min-width: 420px;
  background-color: #e6e6e6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.009);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }
`;
const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;
const Department = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;
const Phone = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;
const Email = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;
const Options = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 15px;
`;
const Btn = styled(Link)`
  border: none;
  font-size: 12px;
  background-color: #8576ff;
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
  }
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

const EmployeeCard = (props) => {
  return (
    <Container>
      <Left>
        <ProfilePic src={props.img} />
      </Left>
      <Right>
        <Name>{props.name}</Name>
        <Department>{props.department}</Department>
        <Phone>{props.phone}</Phone>
        <Email> {props.mail}</Email>
        <Options>
          <Btn to="/employeeinfo">See Details</Btn>
          <DeleteOutlineOutlined style={{ fontSize: 30, cursor: "pointer" }} />
        </Options>
      </Right>
    </Container>
  );
};

export default EmployeeCard;
