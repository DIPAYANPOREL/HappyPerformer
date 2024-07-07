import React, { useState } from 'react';
import styled from 'styled-components';
import Lama from "../../../assets/Lama.png";
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
const Sidebar = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;
const Main = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;
const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 1rem;
  overflow: hidden;
`;
const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const FeedbacksSection = styled.div`
  margin-bottom: 2rem;
`;
const Feedback = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f7f7f7;
`;
const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
const FeedbackBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FeedbackButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #283593;
  }
`;
const LeaveFeedbackSection = styled.div`
  margin-bottom: 2rem;
`;
const FeedbackTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;
const FeedbackSubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #283593;
  }
`
const CategoriesSection = styled.div`
  margin-bottom: 2rem;
`;
const CategoryCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const CategoryLabel = styled.label`
  margin-left: 0.5rem;
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
`;
const ReasonInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;
const SaveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #283593;
  }
`;
const SelectContainer = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;
const EmployeeSelect = styled(SelectContainer)``;

const Social = () => {
  const [feedback, setFeedback] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [reason, setReason] = useState('');
  const [selectedEmployee2, setSelectedEmployee2] = useState('');

  const employees = [
    { id: 1, name: 'Shawn Pinto' },
    { id: 2, name: 'Mary Jane' },
  ];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === '' || selectedEmployee === '') {
      alert('Please enter feedback and select an employee.');
      return;
    }
    console.log('Submitted feedback:', feedback);
    console.log('Selected categories:', selectedCategories);
    console.log('Selected employee:', selectedEmployee);
    console.log('Selected employee 2:', selectedEmployee2);
    setFeedback('');
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const handleEmployeeChange2 = (e) => {
    setSelectedEmployee2(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSave = () => {
    console.log('Reason:', reason);
    setReason('');
  };

  const feedbackCategories = [
    'Customer Focus',
    'Accountability',
    'Adaptability',
    'Organizational Knowledge',
    'Teamwork',
    'Problem Solving',
    'Communication',
    'Initiative',
    'Work Quality',
    'Leadership',
    'Ethics & Integrity',
    'Attention to Detail',
    'Result Focus',
    'Product Development',
    'Process Knowledge',
  ];

  const Feedbacks = [
    {
      name: 'Spider Man',
      date: '2024-05-18',
      feedback: 'Feedback for You',
    },
    {
      name: 'Mary Jane',
      date: '2024-05-17',
      feedback: 'Great work on the project!',
    },
  ];

  return (
    <>
    <Nav/>
    <Container>
      <Sidebar>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Profile Details</h2>
        <ProfileSection>
          <Avatar>
          <img src={Lama} alt="Profile Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Avatar>
          <ProfileDetails>
            <h3>Shawn Pinto</h3>
            <p>HR</p>
          </ProfileDetails>
        </ProfileSection>
        <h4 style={{ marginBottom: '1rem' }}>Positive Feedback by manager</h4>
        <br />
        <h4 style={{ marginBottom: '1rem' }}>Workforce Feedback</h4>
        <SelectContainer>
          <Select value={selectedEmployee2} onChange={handleEmployeeChange2}>
            <option value="">--Select an Employee--</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <CategoriesSection>
          <h5 style={{ marginBottom: '1rem' }}>Categories</h5>
          {feedbackCategories.map((category, index) => (
            <CategoryCheckbox key={index}>
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <CategoryLabel htmlFor={category}>{category}</CategoryLabel>
            </CategoryCheckbox>
          ))}
          <ReasonInput
            type="text"
            placeholder="Reason..."
            value={reason}
            onChange={handleReasonChange}
          />
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </CategoriesSection>
      </Sidebar>
      <Main>
        <LeaveFeedbackSection>
          <FeedbacksSection>
            <h4 style={{ marginBottom: '1rem' }}>Feedbacks for You</h4>
            {Feedbacks.map((feedback, index) => (
              <Feedback key={index}>
                <FeedbackHeader>
                  <div>{feedback.name}</div>
                  <div>{feedback.date}</div>
                </FeedbackHeader>
                <FeedbackBody>
                  <div>{feedback.feedback}</div>
                  <div>
                    <FeedbackButton>Customer Focus</FeedbackButton>
                    <FeedbackButton>Adaptability</FeedbackButton>
                    <FeedbackButton>Teamwork</FeedbackButton>
                    <FeedbackButton>Leadership</FeedbackButton>
                    <FeedbackButton>Ethics & Integrity</FeedbackButton>
                  </div>
                </FeedbackBody>
              </Feedback>
            ))}
          </FeedbacksSection>
          <h5 style={{ marginBottom: '1rem' }}>Express your feelings to someone...</h5>
          <form onSubmit={handleFeedbackSubmit}>
            <EmployeeSelect>
              <Select value={selectedEmployee} onChange={handleEmployeeChange}>
                <option value="">--Select an Employee--</option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </Select>
            </EmployeeSelect>
            <FeedbackTextarea
              placeholder="Type your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <FeedbackSubmitButton type="submit">Submit</FeedbackSubmitButton>
          </form>
        </LeaveFeedbackSection>
      </Main>
    </Container>
    <Footer/>
    </>
  );
};

export default Social;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios'; // Import Axios
// import Lama from "../../../assets/Lama.png";
// import Footer from '../../../Components/Software Components/Footer';
// import Nav from '../../../Components/Software Components/Dashboard/Nav';

// const Container = styled.div`
//   display: flex;
//   min-height: 100vh;
//   background-color: #f5f5f5;
//   padding: 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     padding: 1rem;
//   }
// `;
// const Sidebar = styled.div`
//   width: 300px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   margin-right: 2rem;

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-right: 0;
//     margin-bottom: 1rem;
//   }
// `;
// const Main = styled.div`
//   flex: 1;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
// const ProfileSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 2rem;
// `;
// const Avatar = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   background-color: #ccc;
//   margin-bottom: 1rem;
//   overflow: hidden;
// `;
// const ProfileDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;
// const FeedbacksSection = styled.div`
//   margin-bottom: 2rem;
// `;
// const Feedback = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   padding: 1rem;
//   margin-bottom: 1rem;
//   background-color: #f7f7f7;
// `;
// const FeedbackHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 0.5rem;
//   font-weight: bold;
// `;
// const FeedbackBody = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const FeedbackButton = styled.button`
//   margin-left: 0.5rem;
//   padding: 0.5rem;
//   border: none;
//   border-radius: 4px;
//   background-color: #3f51b5;
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #283593;
//   }
// `;
// const LeaveFeedbackSection = styled.div`
//   margin-bottom: 2rem;
// `;
// const FeedbackTextarea = styled.textarea`
//   width: 100%;
//   height: 100px;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   resize: none;
// `;
// const FeedbackSubmitButton = styled.button`
//   padding: 0.5rem 1rem;
//   background-color: #3f51b5;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #283593;
//   }
// `
// const CategoriesSection = styled.div`
//   margin-bottom: 2rem;
// `;
// const CategoryCheckbox = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 0.5rem;
// `;
// const CategoryLabel = styled.label`
//   margin-left: 0.5rem;
//   font-weight: bold;
//   color: #007bff;
//   cursor: pointer;
// `;
// const ReasonInput = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 1rem;
// `;
// const SaveButton = styled.button`
//   padding: 0.5rem 1rem;
//   background-color: #3f51b5;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #283593;
//   }
// `;
// const SelectContainer = styled.div`
//   margin-bottom: 1rem;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
// const Select = styled.select`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 100%;
// `;
// const EmployeeSelect = styled(SelectContainer)``;

// const Social = () => {
//   const [feedback, setFeedback] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState('');
//   const [reason, setReason] = useState('');
//   const [selectedEmployee2, setSelectedEmployee2] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch employees
//     axios.get('/api/employees')
//       .then(response => {
//         if (response.data.length === 0) {
//           setError('No employees found.');
//         } else {
//           setEmployees(response.data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching employees:', error);
//         setError('An error occurred while fetching employees.');
//       });

//     // Fetch feedbacks
//     axios.get('/api/feedbacks')
//       .then(response => {
//         if (response.data.length === 0) {
//           setError('No feedbacks found.');
//         } else {
//           setFeedbacks(response.data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching feedbacks:', error);
//         setError('An error occurred while fetching feedbacks.');
//       });
//   }, []);

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     if (feedback.trim() === '' || selectedEmployee === '') {
//       alert('Please enter feedback and select an employee.');
//       return;
//     }
//     axios.post('/api/feedbacks', {
//       feedback,
//       employee_id: selectedEmployee,
//       categories: selectedCategories
//     })
//     .then(response => {
//       console.log('Submitted feedback:', response.data);
//       setFeedback('');
//       setSelectedCategories([]);
//       setSelectedEmployee('');
//     })
//     .catch(error => {
//       console.error('Error submitting feedback:', error);
//       alert('An error occurred while submitting feedback.');
//     });
//   };

//   const toggleCategory = (category) => {
//     setSelectedCategories((prevCategories) =>
//       prevCategories.includes(category)
//         ? prevCategories.filter((c) => c !== category)
//         : [...prevCategories, category]
//     );
//   };

//   const handleEmployeeChange = (e) => {
//     setSelectedEmployee(e.target.value);
//   };

//   const handleEmployeeChange2 = (e) => {
//     setSelectedEmployee2(e.target.value);
//   };

//   const handleReasonChange = (e) => {
//     setReason(e.target.value);
//   };

//   const handleSave = () => {
//     axios.post('/api/save_reason', { reason, employee_id: selectedEmployee2 })
//       .then(response => {
//         console.log('Reason saved:', response.data);
//         setReason('');
//       })
//       .catch(error => {
//         console.error('Error saving reason:', error);
//         alert('An error occurred while saving the reason.');
//       });
//   };

//   const feedbackCategories = [
//     'Customer Focus',
//     'Accountability',
//     'Adaptability',
//     'Organizational Knowledge',
//     'Teamwork',
//     'Problem Solving',
//     'Communication',
//     'Initiative',
//     'Work Quality',
//     'Leadership',
//     'Ethics & Integrity',
//     'Attention to Detail',
//     'Result Focus',
//     'Product Development',
//     'Process Knowledge',
//   ];

//   return (
//     <>
//     <Nav/>
//     <Container>
//       <Sidebar>
//         <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Profile Details</h2>
//         <ProfileSection>
//           <Avatar>
//           <img src={Lama} alt="Profile Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//           </Avatar>
//           <ProfileDetails>
//             <h3>Shawn Pinto</h3>
//             <p>HR</p>
//           </ProfileDetails>
//         </ProfileSection>
//         <h4 style={{ marginBottom: '1rem' }}>Positive Feedback by manager</h4>
//         <br />
//         <h4 style={{ marginBottom: '1rem' }}>Workforce Feedback</h4>
//         <SelectContainer>
//           <Select value={selectedEmployee2} onChange={handleEmployeeChange2}>
//             <option value="">--Select an Employee--</option>
//             {employees.map((employee) => (
//               <option key={employee.id} value={employee.id}>
//                 {employee.name}
//               </option>
//             ))}
//           </Select>
//         </SelectContainer>
//         <CategoriesSection>
//           <h5 style={{ marginBottom: '1rem' }}>Categories</h5>
//           {feedbackCategories.map((category, index) => (
//             <CategoryCheckbox key={index}>
//               <input
//                 type="checkbox"
//                 id={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => toggleCategory(category)}
//               />
//               <CategoryLabel htmlFor={category}>{category}</CategoryLabel>
//             </CategoryCheckbox>
//           ))}
//           <ReasonInput
//             type="text"
//             placeholder="Reason..."
//             value={reason}
//             onChange={handleReasonChange}
//           />
//           <SaveButton onClick={handleSave}>Save</SaveButton>
//         </CategoriesSection>
//       </Sidebar>
//       <Main>
//         <LeaveFeedbackSection>
//           <FeedbacksSection>
//             <h4 style={{ marginBottom: '1rem' }}>Feedbacks for You</h4>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {feedbacks.map((feedback, index) => (
//               <Feedback key={index}>
//                 <FeedbackHeader>
//                   <div>{feedback.name}</div>
//                   <div>{feedback.date}</div>
//                 </FeedbackHeader>
//                 <FeedbackBody>
//                   <div>{feedback.feedback}</div>
//                   <div>
//                     {feedback.categories.map((category, idx) => (
//                       <FeedbackButton key={idx}>{category}</FeedbackButton>
//                     ))}
//                   </div>
//                 </FeedbackBody>
//               </Feedback>
//             ))}
//           </FeedbacksSection>
//           <h5 style={{ marginBottom: '1rem' }}>Express your feelings to someone...</h5>
//           <form onSubmit={handleFeedbackSubmit}>
//             <EmployeeSelect>
//               <Select value={selectedEmployee} onChange={handleEmployeeChange}>
//                 <option value="">--Select an Employee--</option>
//                 {employees.map((employee) => (
//                   <option key={employee.id} value={employee.id}>
//                     {employee.name}
//                   </option>
//                 ))}
//               </Select>
//             </EmployeeSelect>
//             <FeedbackTextarea
//               placeholder="Type your feedback here..."
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//             />
//             <FeedbackSubmitButton type="submit">Submit</FeedbackSubmitButton>
//           </form>
//         </LeaveFeedbackSection>
//       </Main>
//     </Container>
//     <Footer/>
//     </>
//   );
// };

// export default Social;
