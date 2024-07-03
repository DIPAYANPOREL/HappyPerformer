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
//   width: 95%; /* Adjusted width to 90% */
//   max-width: 900px; /* Set a max-width for responsiveness */
//   margin: 0 auto; /* Center the form horizontally */
//   padding: 10px; /* Adjusted padding */
// `;

// const UIDivider = styled.div`
//   margin-top: -80px; /* Adjusted margin */
// `;

// const UIForm = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   padding: 1.5rem; /* Adjusted padding */
//   width: 80%; /* Adjusted width to make the card smaller */
//   margin: 0 auto; /* Center the card horizontally */
// `;

// const Title = styled.h1`
//   margin-bottom: 30px; /* Adjusted margin */
// `;

// const CaseField = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin-bottom: 1.5rem; /* Adjusted margin */
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 0.5rem; /* Adjusted margin */
//   width: 45%; /* Adjusted width for labels */
// `;

// const Input = styled.input`
//   width: 50%; /* Adjusted width for two columns */
//   padding: 0.75rem; /* Adjusted padding */
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
// `;

// const Select = styled.select`
//   width: 50%; /* Adjusted width for two columns */
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

// const BankDetails = () => {
//   return (
//     <>
//     <Nav/>
//     <CaseContainer>
//       <Form>
//         <UIDivider />
//         <UIForm>
//           <Title style={{ textAlign: 'center'}}>Bank Details </Title>
//           <CaseField>
//             <Label>Account Holder's Name</Label>
//             <Input
//               type="text"
//               name="AccountName"
//               placeholder="Account Holder's Name"
//               style={{ width: '100%' }} // Full width for Account Holder's Name
//             />
//           </CaseField>
//           <CaseField>
//             <Label>Name Of Bank</Label>
//             <Input type="text" name="bankName" placeholder="Name Of Bank" />
//             <Label>Account Number</Label>
//             <Input type="text" name="accountNumber" placeholder="Account Number" />
//           </CaseField>
//           <CaseField>
//             <Label>Branch (City)</Label>
//             <Input type="text" name="branch" placeholder="Branch" />
//             <Label>Bank Account Type</Label>
//             <Select name="casetype">
//               <option value="case-dropdown" selected disabled>
//                 Select
//               </option>
//               <option value="">Savings Account</option>
//               <option value="">Current Accounts</option>
//               <option value="">Fixed Deposit Account</option>
//               <option value="">Recurring Deposit Account</option>
//             </Select>
//           </CaseField>
//           <CaseField>
//             <Label>Branch Code (IFSC) Number</Label>
//             <Input type="text" name="branchcode" placeholder="Branch Code (IFSC) Number" />
//             <Label>PAN Number</Label>
//             <Input type="text" name="panNumber" placeholder="Pan Number" />
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

// export default BankDetails;

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
  width: 95%; /* Adjusted width to 90% */
  max-width: 900px; /* Set a max-width for responsiveness */
  margin: 0 auto; /* Center the form horizontally */
  padding: 10px; /* Adjusted padding */
`;

const UIDivider = styled.div`
  margin-top: -80px; /* Adjusted margin */
`;

const UIForm = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem; /* Adjusted padding */
  width: 80%; /* Adjusted width to make the card smaller */
  margin: 0 auto; /* Center the card horizontally */
`;

const Title = styled.h1`
  margin-bottom: 30px; /* Adjusted margin */
`;

const CaseField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem; /* Adjusted margin */
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem; /* Adjusted margin */
  width: 45%; /* Adjusted width for labels */
`;

const Input = styled.input`
  width: 50%; /* Adjusted width for two columns */
  padding: 0.75rem; /* Adjusted padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 50%; /* Adjusted width for two columns */
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

const BankDetails = () => {
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
            <Title style={{ textAlign: "center" }}>Bank Details</Title>
            <CaseField>
              <Label>
                Account Holder's Name <Mandatory>*</Mandatory>
              </Label>
              <Input
                type="text"
                name="accountName"
                placeholder="Account Holder's Name"
                style={{ width: "100%" }} // Full width for Account Holder's Name
              />
              {formErrors.accountName && (
                <Error>{formErrors.accountName}</Error>
              )}
            </CaseField>
            <CaseField>
              <Label>
                Name Of Bank <Mandatory>*</Mandatory>
              </Label>
              <Input type="text" name="bankName" placeholder="Name Of Bank" />
              {formErrors.bankName && <Error>{formErrors.bankName}</Error>}
              <Label>
                Account Number <Mandatory>*</Mandatory>
              </Label>
              <Input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
              />
              {formErrors.accountNumber && (
                <Error>{formErrors.accountNumber}</Error>
              )}
            </CaseField>
            <CaseField>
              <Label>
                Branch (City) <Mandatory>*</Mandatory>
              </Label>
              <Input type="text" name="branch" placeholder="Branch" />
              {formErrors.branch && <Error>{formErrors.branch}</Error>}
              <Label>
                Bank Account Type <Mandatory>*</Mandatory>
              </Label>
              <Select name="accountType">
                <option value="" disabled selected>
                  Select
                </option>
                <option value="Savings Account">Savings Account</option>
                <option value="Current Accounts">Current Accounts</option>
                <option value="Fixed Deposit Account">
                  Fixed Deposit Account
                </option>
                <option value="Recurring Deposit Account">
                  Recurring Deposit Account
                </option>
              </Select>
              {formErrors.accountType && (
                <Error>{formErrors.accountType}</Error>
              )}
            </CaseField>
            <CaseField>
              <Label>
                Branch Code (IFSC) Number <Mandatory>*</Mandatory>
              </Label>
              <Input
                type="text"
                name="branchCode"
                placeholder="Branch Code (IFSC) Number"
              />
              {formErrors.branchCode && <Error>{formErrors.branchCode}</Error>}
              <Label>
                PAN Number <Mandatory>*</Mandatory>
              </Label>
              <Input type="text" name="panNumber" placeholder="Pan Number" />
              {formErrors.panNumber && <Error>{formErrors.panNumber}</Error>}
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

export default BankDetails;
