import React from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Title = styled.h1`
  margin-bottom: 2rem;
`;
const DownloadButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Responses = () => {
  const handleDownload = () => {
    const printWindow = window.open('about:blank', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Preview</title>
        </head>
        <body>
          <h1>Form Responses</h1>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <>
        <Nav />
    <Container>
      <Title>Form Responses</Title>
      <DownloadButton onClick={handleDownload}>Download</DownloadButton>
    </Container>
    <Footer />
    </>
  );
};

export default Responses;