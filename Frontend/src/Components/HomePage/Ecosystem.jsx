import React from 'react';
import styled from 'styled-components';
import Card from './Card';

// Styled components
const Container = styled.div`
  width: 300p;
  height: 100vh;
  display: flex;
  align-items:center;
justify-content:center;
flex-wrap:wrap;
`;

const Card = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  margin:50px;
  height:350px;
  width:350px;
`;
const Ecosystem = () => {
  return (
    <Container>

      <Card {} />
{/*
<Card>1</Card>
<Card>1</Card>
<Card>1</Card>
<Card>1</Card>
<Card>1</Card> */}

    </Container>
  );
};

export default Ecosystem;
