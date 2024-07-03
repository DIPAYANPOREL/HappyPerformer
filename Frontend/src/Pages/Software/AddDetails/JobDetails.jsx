// import React from 'react';
// import styled from 'styled-components';
// import Footer from '../../../Components/Software Components/Footer'
// import Nav from '../../../Components/Software Components/Dashboard/Nav'

// const CaseContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f5f5f5;
// `;

// const Form = styled.form`
//   width: 90%; /* Adjusted width to 90% */
//   max-width: 660px; /* Set a max-width for responsiveness */
//   margin: 0 auto; /* Center the form horizontally */
//   padding: 20px; /* Adjusted padding */
// `;

// const UIDivider = styled.div`
//   margin-top: -80px; /* Adjusted margin */
// `;

// const UIForm = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   padding: 2rem; /* Adjusted padding */
//   width: 100%;
// `;

// const Title = styled.h1`
//   margin-bottom: 30px; /* Adjusted margin */
// `;

// const CaseField = styled.div`
//   margin-bottom: 1.5rem; /* Adjusted margin */
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 0.5rem; /* Adjusted margin */
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem; /* Adjusted padding */
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 0.75rem; /* Adjusted padding */
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
// `;

// const Mandatory = styled.span`
//   color: red;
// `;

// const Error = styled.span`
//   color: red;
//   font-size: 1rem;
//   margin-top: 0.5rem; /* Adjusted margin */
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   padding: 0.75rem 1.5rem; /* Adjusted padding */
//   font-size: 1rem;

//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const JobDetails = () => {
//   return (
//     <>
//     <Nav/>
//     <CaseContainer>
//       <Form>
//         <UIDivider />
//         <UIForm>
//           <Title style={{ textAlign: 'center'}}>Job Details</Title>
//           <CaseField>
//             <Label>
//               Title
//             </Label>
//             <Input
//               type="text"
//               name="title"
//               placeholder="Title"
//             />
//           </CaseField>
//           <CaseField style={{ width: '35rem', borderRadius: '4px' }}>
//             <Label>Department</Label>
//             <Select name="casetype">
//               <option value="case-dropdown" selected disabled>
//                 Select
//               </option>
//               <option value="HR">HR</option>
//               <option value="Manager">Manager</option>
//               <option value="Employee">Employee</option>
//             </Select>
//           </CaseField>
//           <CaseField style={{ width: '35rem', borderRadius: '4px' }}>
//             <Label>Working Type</Label>
//             <Select name="casetype">
//               <option value="case-dropdown" selected disabled>
//                 Select
//               </option>
//               <option value="">Full Time</option>
//               <option value="">Part Time</option>
//               <option value="">Remote</option>
//             </Select>
//           </CaseField>
//           <CaseField>
//             <Label>Start Date</Label>
//             <Input type="date" name="startdate" placeholder="dd-mm-yyyy" />
//           </CaseField>
//           <SubmitButton onClick={() => validateForm()}>Submit</SubmitButton>
//         </UIForm>
//       </Form>
//     </CaseContainer>
//     <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
//       <Footer/>
//     </div>
//     </>
//   );
// };

// function validateForm() {
//   const x = document.forms['myForm']['createcase'].value;
//   if (x === '') {
//     document.getElementsByClassName('Error')[0].style.display = 'block';
//   } else {
//     alert('Form is Valid');
//   }
// }

// export default JobDetails

import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "../../../Components/Software Components/Footer";
import Nav from "../../../Components/Software Components/Dashboard/Nav";

const CaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  width: 90%; /* Adjusted width to 90% */
  max-width: 660px; /* Set a max-width for responsiveness */
  margin: 0 auto; /* Center the form horizontally */
  padding: 20px; /* Adjusted padding */
`;

const UIDivider = styled.div`
  margin-top: -80px; /* Adjusted margin */
`;

const UIForm = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem; /* Adjusted padding */
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 30px; /* Adjusted margin */
`;

const CaseField = styled.div`
  margin-bottom: 1.5rem; /* Adjusted margin */
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem; /* Adjusted margin */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem; /* Adjusted padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem; /* Adjusted padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Mandatory = styled.span`
  color: red;
`;

const Error = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.5rem; /* Adjusted margin */
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem; /* Adjusted padding */
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const JobDetails = () => {
  const formRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData.entries()) {
      if (!value) {
        errors[key] = "This field is required";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData(formRef.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      await axios.post("YOUR_DJANGO_API_URL", data);
      alert("Details Submitted Successfully");
      formRef.current.reset();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <>
      <Nav />
      <CaseContainer>
        <Form ref={formRef} onSubmit={submitHandler}>
          <UIDivider />
          <UIForm>
            <Title style={{ textAlign: "center" }}>Job Details</Title>
            <CaseField>
              <Label>
                Title <Mandatory>*</Mandatory>
              </Label>
              <Input type="text" name="title" placeholder="Title" />
              {formErrors.title && <Error>{formErrors.title}</Error>}
            </CaseField>
            <CaseField style={{ width: "35rem", borderRadius: "4px" }}>
              <Label>
                Department <Mandatory>*</Mandatory>
              </Label>
              <Select name="department">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </Select>
              {formErrors.department && <Error>{formErrors.department}</Error>}
            </CaseField>
            <CaseField style={{ width: "35rem", borderRadius: "4px" }}>
              <Label>
                Working Type <Mandatory>*</Mandatory>
              </Label>
              <Select name="workingType">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote">Remote</option>
              </Select>
              {formErrors.workingType && (
                <Error>{formErrors.workingType}</Error>
              )}
            </CaseField>
            <CaseField>
              <Label>
                Start Date <Mandatory>*</Mandatory>
              </Label>
              <Input type="date" name="startDate" placeholder="dd-mm-yyyy" />
              {formErrors.startDate && <Error>{formErrors.startDate}</Error>}
            </CaseField>
            <SubmitButton type="submit">Submit</SubmitButton>
          </UIForm>
        </Form>
      </CaseContainer>
      <div style={{ position: "fixed", left: 0, bottom: 0, width: "100%" }}>
        <Footer />
      </div>
    </>
  );
};

export default JobDetails;
