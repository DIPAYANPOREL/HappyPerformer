// import React from 'react';
// import styled from 'styled-components';
// import Footer from '../../Components/Software Components/Footer';
// import Nav from '../../Components/Software Components/Dashboard/Nav';


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 100vh;
// `;

// const LeaveHistoryContainer = styled.div`
//   max-width: 80%;
//   padding: 20px;
//   margin-top: 20px;
//   background-color: #fff;
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
  
// `;

// const Th = styled.th`
//   padding: 10px;
//   text-align: left;
//   border-bottom: 1px solid #ddd;
//   background-color: #f2f2f2;
// `;

// const Td = styled.td`
//   padding: 10px;
//   text-align: left;
//   border-bottom: 1px solid #ddd;
// `;

// const LeaveHistory = () => {
//   const leaveData = [
//     {
//       id: 1,
//       leaveType: 'Medical Leave',
//       from: '2024-04-10',
//       to: '2024-04-19',
//       description: 'MCL Injury',
//       postingDate: '2024-04-28 11:26:30',
//       adminRemark: 'Waiting for Approval',
//       status: 'Waiting for Approval',
//     },
//     {
//       id: 2,
//       leaveType: 'Vacation Leave',
//       from: '2024-05-01',
//       to: '2024-05-05',
//       description: 'going on a vacation',
//       postingDate: '2024-04-30 09:15:00',
//       adminRemark: 'Approved',
//       status: 'Approved',
//     },
//   ];

//   return (
//     <>
//     <Nav/>
//     <Container>
//       <LeaveHistoryContainer>
//         <h2>Leave History</h2>
//         <Table>
//           <thead>
//             <tr>
//               <Th>#</Th>
//               <Th>Leave Type</Th>
//               <Th>From</Th>
//               <Th>To</Th>
//               <Th>Description</Th>
//               <Th>Posting Date</Th>
//               <Th>Admin Remark</Th>
//               <Th>Status</Th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaveData.map((leave) => (
//               <tr key={leave.id}>
//                 <Td>{leave.id}</Td>
//                 <Td>{leave.leaveType}</Td>
//                 <Td>{leave.from}</Td>
//                 <Td>{leave.to}</Td>
//                 <Td>{leave.description}</Td>
//                 <Td>{leave.postingDate}</Td>
//                 <Td>{leave.adminRemark}</Td>
//                 <Td>{leave.status}</Td>
//               </tr>
              
//             ))}
//           </tbody>
//         </Table>
//       </LeaveHistoryContainer>
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// export default LeaveHistory;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../Components/Software Components/Footer';
import Nav from '../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const LeaveHistoryContainer = styled.div`
  max-width: 80%;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const LeaveHistory = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaveData();
  }, []);

  const fetchLeaveData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/LeaveHistory/'); // Replace with your API endpoint
      if (Array.isArray(response.data)) {
        setLeaveData(response.data);
      } else {
        setLeaveData([]);
      }
    } catch (error) {
      console.error('Error fetching leave data:', error);
      setError('Error fetching leave data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Nav />
        <Container>
          <LeaveHistoryContainer>
            <h2>Loading...</h2>
          </LeaveHistoryContainer>
        </Container>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav />
        <Container>
          <LeaveHistoryContainer>
            <h2>{error}</h2>
          </LeaveHistoryContainer>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <Container>
        <LeaveHistoryContainer>
          <h2>Leave History</h2>
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Leave Type</Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th>Description</Th>
                <Th>Posting Date</Th>
                <Th>Admin Remark</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {leaveData.length > 0 ? (
                leaveData.map((leave) => (
                  <tr key={leave.id}>
                    <Td>{leave.id}</Td>
                    <Td>{leave.leaveType}</Td>
                    <Td>{leave.from}</Td>
                    <Td>{leave.to}</Td>
                    <Td>{leave.description}</Td>
                    <Td>{leave.postingDate}</Td>
                    <Td>{leave.adminRemark}</Td>
                    <Td>{leave.status}</Td>
                  </tr>
                ))
              ) : (
                <tr>
                  <Td colSpan="8">No leave records found.</Td>
                </tr>
              )}
            </tbody>
          </Table>
        </LeaveHistoryContainer>
      </Container>
      <Footer />
    </>
  );
};

export default LeaveHistory;