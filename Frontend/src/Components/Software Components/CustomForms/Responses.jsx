// import React from 'react';
// import styled from 'styled-components';
// import Footer from '../../../Components/Software Components/Footer';
// import Nav from '../../../Components/Software Components/Dashboard/Nav';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
// `;
// const Title = styled.h1`
//   margin-bottom: 2rem;
// `;
// const DownloadButton = styled.button`
//   padding: 0.5rem 1rem;
//   font-size: 1rem;
//   background-color: #3f51b5;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;
// const Responses = () => {
//   const handleDownload = () => {
//     const printWindow = window.open('about:blank', '_blank');
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print Preview</title>
//         </head>
//         <body>
//           <h1>Form Responses</h1>
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <>
//         <Nav />
//     <Container>
//       <Title>Form Responses</Title>
//       <DownloadButton onClick={handleDownload}>Download</DownloadButton>
//     </Container>
//     <Footer />
//     </>
//   );
// };

// export default Responses;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "../../../Components/Software Components/Footer";
import Nav from "../../../Components/Software Components/Dashboard/Nav";

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

const ResponseList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
`;

const ResponseItem = styled.li`
  background-color: #f0f0f0;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
`;

const EmptyMessage = styled.p`
  color: #999;
  font-size: 1rem;
`;

const Responses = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const response = await axios.get("YOUR_API_ENDPOINT/responses"); // Replace with your API endpoint
      if (response.data && Array.isArray(response.data)) {
        setResponses(response.data);
      } else {
        console.log("No responses found");
        setResponses([]); // Ensure responses is set to an empty array
      }
    } catch (error) {
      console.error("Error fetching responses:", error);
      setResponses([]); // Ensure responses is set to an empty array in case of error
    }
  };

  const handleDownload = () => {
    const printWindow = window.open("about:blank", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Preview</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { text-align: center; }
            ul { list-style-type: none; padding: 0; }
            li { background-color: #f0f0f0; margin-bottom: 0.5rem; padding: 1rem; border-radius: 4px; }
          </style>
        </head>
        <body>
          <h1>Form Responses</h1>
          <ul>
            ${responses.map((response) => `<li>${response}</li>`).join("")}
          </ul>
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
        {responses.length > 0 ? (
          <>
            <ResponseList>
              {responses.map((response, index) => (
                <ResponseItem key={index}>{response}</ResponseItem>
              ))}
            </ResponseList>
            <DownloadButton onClick={handleDownload}>Download</DownloadButton>
          </>
        ) : (
          <EmptyMessage>No responses available.</EmptyMessage>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Responses;
