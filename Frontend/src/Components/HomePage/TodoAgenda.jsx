import { AssignmentIndOutlined, CalendarMonth, FindInPageOutlined, StorageOutlined, TodayOutlined, VerifiedOutlined } from '@mui/icons-material';

import zoho_ss   from '../../assets/zoho_ss.png';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%%;
height:100vh;
margin:20px 10%;
`;

const TextArea=styled.h1`
margin: 30px 50px 10% 50px;

`
const MiniContainer=styled.div`
  width: 100%;
height:50vh;
display:flex;
align-items:center;

`
const ImageSection=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;

`
const PointsSection=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin:30px 0px;
flex:1;
`
const FunctionTD=styled.div`
display:flex;

margin-top:15px ;
margin-right:10%;
font-size:1rem;
`
const MiniText=styled.div`
margin-left:10%;
margin-bottom:40px;
font-size:1.30rem;

`

const FunctionsContainer=styled.div`
margin:10px 55% 10px 0px;
display:flex;
flex-direction:column;

`

// const FunctionsContainer = styled.div`
//   margin: 15% 10% 0px 0px ;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(2, auto);
//   gap: 20px;
//   justify-content: center;
// `;

const ImageA=styled.img`  width: 100%;
  height: 70vh;
width:40vw;
  object-fit: fit;`;
const TodoAgenda = () => {
  return (
    <Container>
<TextArea>Our revolutionary technology has solved the puzzle of resolving day-to-day employee’s issues and has automated the desired outcomes</TextArea>
<MiniContainer>
        <ImageSection>

<ImageA src={zoho_ss} />

        </ImageSection>
    <PointsSection>
<MiniText>By analyzing data patterns and employee feedback, it automatically generates tailored solutions to resolve these issues efficiently. From scheduling conflicts to performance concerns, our system streamlines the process, ensuring that employees receive timely support and organizations achieve desired outcomes with minimal manual intervention.
</MiniText>
<FunctionsContainer>
    <FunctionTD> <FindInPageOutlined /> Job Descriptions</FunctionTD>
<FunctionTD> <AssignmentIndOutlined /> KRA/KPI</FunctionTD>
<FunctionTD><VerifiedOutlined/>  SOP</FunctionTD>
<FunctionTD><StorageOutlined/> TO-DO-LIST </FunctionTD>
<FunctionTD><CalendarMonth/> Calendar </FunctionTD>
</FunctionsContainer>

</PointsSection>

</MiniContainer>

    </Container>
  )
}

export default TodoAgenda
