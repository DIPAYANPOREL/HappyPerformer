// import React from 'react';
// import { useParams } from 'react-router-dom';

// // Dummy variable to check if the user is a manager
// const isManager = false; // This should be determined by your authentication logic

// const JDDetail = () => {
//   const { id } = useParams();

//   return (
//     <div style={{ width: '80%', margin: '0 auto', padding: '20px' }}>
//       <h2>Job Detail for ID: {id}</h2>
//       <table border="1" style={{ width: '100%', textAlign: 'left' }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Email</th>
//             <th>Responsibilities</th>
//             <th>Self Rating</th>
//             <th>Manager Rating</th>
//             <th>Manager Remark</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{id}</td>
//             <td>example@example.com</td>
//             <td>Some responsibilities...</td>
//             <td>
//               <select>
//                 {[0, 1, 2, 3, 4].map(rating => (
//                   <option key={rating} value={rating}>{rating}</option>
//                 ))}
//               </select>
//             </td>
//             <td>
//               <select>
//                 {[0, 1, 2, 3, 4].map(rating => (
//                   <option key={rating} value={rating}>{rating}</option>
//                 ))}
//               </select>
//             </td>
//             <td>
//               {isManager ? (
//                 <input type="text" placeholder="Manager Remark" />
//               ) : (
//                 'Restricted'
//               )}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default JDDetail;

import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Dummy variable to check if the user is a manager
const isManager = false; // This should be determined by your authentication logic

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-family: "Poppins", sans-serif;

  th {
    padding: 25px;
    font-weight: bold;
    border: none;
    font-size: 20px;
  }

  td {
    /* background-color: #f2f2f2; */
    font-family: "Ubuntu", sans-serif;
    padding: 25px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }

  tr:hover {
    background-color: #f9f9f9;
  }

  select,
  input {
    width: 100%;
    padding: 8px;
    margin: 4px 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  input[type="text"] {
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const JDDetail = () => {
  const { id } = useParams();

  return (
    <Container>
      <h2>Job Detail for ID: {id}</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Responsibilities</th>
            <th>Self Rating</th>
            <th>Manager Rating</th>
            <th>Manager Remark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>example@example.com</td>
            <td>Some responsibilities...</td>
            <td>
              <select>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <select>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </td>
            <td>
              {isManager ? (
                <input type="text" placeholder="Manager Remark" />
              ) : (
                "Restricted"
              )}
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default JDDetails;
