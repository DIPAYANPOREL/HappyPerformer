// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FormContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: aquamarine;
//   /* margin-top: 20px; */

// `;

// const StyledForm = styled.form`
//   width: 300px; /* Adjust width as needed */
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #f9f9f9;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const FormGroup = styled.div`
//   margin-bottom: 10px;
// `;

// const Label = styled.label`
//   font-weight: bold;
//   display: block;
//   margin-bottom: 5px;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   background-color: purple;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 10px 20px;
//   cursor: pointer;
//   font-size: 16px;
// `;

// const EnrollForm = () => {
//   const [courseTitle, setCourseTitle] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send data to backend)
//     console.log('Course Title:', courseTitle);
//     console.log('Email:', email);
//     // Reset form fields after submission
//     setCourseTitle('');
//     setEmail('');
//   };

//   return (
//     <FormContainer>
//       <StyledForm onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="course-title">Course Title:</Label>
//           <Select
//             id="course-title"
//             value={courseTitle}
//             onChange={(e) => setCourseTitle(e.target.value)}
//             required
//           >
//             <option value="">Select an option</option>
//             <option value="HTML">HTML</option>
//             <option value="CSS">CSS</option>
//             <option value="Bootstrap">Bootstrap</option>
//             <option value="Tailwind">Tailwind</option>
//             <option value="Styled Components">Styled Components</option>
//             <option value="React">React</option>
//             <option value="JavaScript">JavaScript</option>
//           </Select>
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="email">Email:</Label>
//           <Input
//             type="email"
//             id="email"
//             placeholder="Enter Email ID"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </FormGroup>
//         <Button type="submit">Submit</Button>
//       </StyledForm>
//     </FormContainer>
//   );
// };

// export default EnrollForm;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FormContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const EnrollForm = () => {
//   const [courseTitle, setCourseTitle] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send data to backend)
//     console.log('Course Title:', courseTitle);
//     console.log('Email:', email);
//     // Reset form fields after submission
//     setCourseTitle('');
//     setEmail('');
//   };

//   return (
//     <FormContainer>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="course-title">Course Title:</label>
//           <select
//             id="course-title"
//             value={courseTitle}
//             onChange={(e) => setCourseTitle(e.target.value)}
//             required
//           >
//             <option value="">Select an option</option>
//             <option value="HTML">HTML</option>
//             <option value="CSS">CSS</option>
//             <option value="Bootstrap">Bootstrap</option>
//             <option value="Tailwind">Tailwind</option>
//             <option value="Styled Components">Styled Components</option>
//             <option value="React">React</option>
//             <option value="JavaScript">JavaScript</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter Email ID"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </FormContainer>
//   );
// };

// export default EnrollForm;

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const CenteredContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const FormContainer = styled.div`
//   width: 100%;
//   max-width: 2000px;
//   margin: 20px;
//   padding: 20px;
//   border-radius: 10px;
// `;

// const StyledForm = styled.form`
//   background-color: #f0f0f0;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px; /* Limiting maximum width for better readability on larger screens */
// `;

// const EnrollForm = () => {
//   const [courseTitle, setCourseTitle] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send data to backend)
//     console.log('Course Title:', courseTitle);
//     console.log('Email:', email);
//     // Reset form fields after submission
//     setCourseTitle('');
//     setEmail('');
//   };

//   return (
//     <CenteredContainer>
//     <FormContainer>
//       <StyledForm onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="course-title">Course Title:</label>
//           <select
//             id="course-title"
//             value={courseTitle}
//             onChange={(e) => setCourseTitle(e.target.value)}
//             required
//           >
//             <option value="">Select an option</option>
//             <option value="HTML">HTML</option>
//             <option value="CSS">CSS</option>
//             <option value="Bootstrap">Bootstrap</option>
//             <option value="Tailwind">Tailwind</option>
//             <option value="Styled Components">Styled Components</option>
//             <option value="React">React</option>
//             <option value="JavaScript">JavaScript</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter Email ID"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <br />
//         <button type="submit">Submit</button>
//       </StyledForm>
//     </FormContainer>
//     </CenteredContainer>
//   );
// };

// export default EnrollForm;

import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Software Components/Dashboard/Header";
import Layout from "../../Components/Software Components/Dashboard/Layout";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; Centers the form vertically on the screen */
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px; /* Limits the form width */
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0077b6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  /* 
  &:hover {
    background-color:palevioletred;
  } */
`;

const EnrollForm = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log("Course Title:", courseTitle);
    console.log("Email:", email);
    // Reset form fields after submission
    setCourseTitle("");
    setEmail("");
  };

  return (
    <Layout>
      <Header title="Enroll Employee Course" />
      <CenteredContainer>
        <FormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="course-title">Course Title:</Label>
              <SelectField
                id="course-title"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="Tailwind">Tailwind</option>
                <option value="Styled Components">Styled Components</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
              </SelectField>
            </FormField>
            <FormField>
              <Label htmlFor="email">Email:</Label>
              <InputField
                type="email"
                id="email"
                placeholder="Enter Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </StyledForm>
        </FormContainer>
      </CenteredContainer>
    </Layout>
  );
};

export default EnrollForm;
