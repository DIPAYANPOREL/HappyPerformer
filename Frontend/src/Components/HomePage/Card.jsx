import React from "react";
import styled from "styled-components";

const ImageA = styled.img`
  width: 100%;
  height: 70vh;
  width: 40vw;
  object-fit: fit;
    
`

const ImageB = styled.img`
  width: 16.1vw;
  height: 80px;
`

const CardSection = styled.div`
padding: 1rem;
margin: 1rem;
`

const CardBody = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
padding: 1rem;
margin: 1rem;


`

const CardTitle = styled.div`
display: flex;
font-size: 1rem;
align-items: center;
`

const CardHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CardData = [
  {
    image_url1: "123.jpg",
    title1: "Get Started",
    image_url_arrow: "123.jpg",
    image_url2: "123.jpg",
  },
  {
    image_url1: "123.jpg",
    title1: "Get Started",
    image_url_arrow: "123.jpg",
    image_url2: "123.jpg",
  },{
    image_url1: "123.jpg",
    title1: "Get Started",
    image_url_arrow: "123.jpg",
    image_url2: "123.jpg",
  },{
    image_url1: "123.jpg",
    title1: "Get Started",
    image_url_arrow: "123.jpg",
    image_url2: "123.jpg",
  },
];

const Card = () => {
  return (
    <CardSection>
      {CardData.map((card, index) => (
        <CardBody key={index}>
          {" "}
          <CardHeading>
            <ImageB src={card.image_url1} />
            <CardTitle>
                <h2>{card.title1}</h2>
            </CardTitle>
            <ImageB src={card.image_url_arrow} />
          </CardHeading>
          <ImageA src={card.image_url2} />
        </CardBody>
      ))}{" "}
    </CardSection>
  );
};

export default Card;
