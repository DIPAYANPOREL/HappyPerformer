import React from 'react'
import styled from 'styled-components'
import Card from '../../../Components/Software Components/Attendance/Card.jsx'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding:10px;
  height: 100vh;
  width: 100%;
  background-color: #f1f2f6;

`;

const Attendance = () => {
  return (
    <Container>

        <Card/>
    </Container>
  )
}

export default Attendance
