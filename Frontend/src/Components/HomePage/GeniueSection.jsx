import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
height:100vh;
display:flex;
justify-content:space-evenly;
align-items:center;
`;

const Content = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;

`
const VideoSection = styled.div`
flex:1;
display:flex;
justify-content:space-evenly;
align-items:center;
`

const ContentHeader = styled.h1`
font-weight:700;
margin:30px 0px;
`
const ContentPara = styled.p`
text-align:center;
margin:0px 25%;
`

const StartedBtn = styled.button`
  font-size: 14px;
  margin-left: 25px;
  background-color:white;
border:none;
 background-color:red;
 padding:10px 15px;
border-radius:11px;
color:white;
font-weight:500;
cursor:pointer;
margin:30px 0px;
`

const GeniueSection = () => {
  return (
    <Container>
<Content>
    <ContentHeader>Your Growth Genie Has Arrived!</ContentHeader>
<ContentPara>We present HappyPerfomer.com, the world’s first software aimed to bring skyrocketing growth for all stakeholders. The software optimizes business profits, employee’s performances & their happiness.</ContentPara>
<StartedBtn>GET STARTED</StartedBtn>
</Content>
<VideoSection>Shalav D</VideoSection>
    </Container>
  )
}

export default GeniueSection
