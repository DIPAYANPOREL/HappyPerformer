import React from "react";
import styled from "styled-components";

// Styled components
const ImageA = styled.img`
  height: 100px;
  width: 100%;
  max-height: 70vh;
  object-fit: cover;
`;

const ImageB = styled.img`
  width: 50px;
  height: 80px;
  margin-right: 10px;
`;

const CardSection = styled.div`
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 3rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 300px;
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

const CardHeading = styled.div`
  display: flex;
  align-items: center;
`;

const Card = ({ cardData }) => {
  return (
    <CardSection>
      {cardData.map((card, index) => (
        <CardBody key={index}>
          <CardHeading>
            <ImageB src={card.image_url1} />
            <CardTitle>{card.title1}</CardTitle>
            <ImageB src={card.image_url_arrow} />
          </CardHeading>
          <ImageA src={card.image_url2} />
        </CardBody>
      ))}
    </CardSection>
  );
};

export default Card;
