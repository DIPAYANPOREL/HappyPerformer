import styled from "styled-components";

const Container = styled.div`
  max-width: 1290px;
  margin: 0.5rem auto;
  padding: 0.7rem auto;
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem auto;
  }
`;
const HighlightText = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const Content = styled.p`
  font-size: 1.15rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem 2rem;
    text-align: justify;
  }
`;
const Break = styled.br`
  margin: 1 0;
`;
const InfoTemplate = (props) => {
  return (
    <>
      <Container>
        <HighlightText>{props.title}</HighlightText>
        <Content>{props.content}</Content>
        <Break />
      </Container>
    </>
  );
};

export default InfoTemplate;
