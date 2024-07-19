// import React, { useRef } from 'react';
// import styled from 'styled-components';
// import Footer from '../../../Components/Software Components/Footer'
// import Nav from '../../../Components/Software Components/Dashboard/Nav'

// const ProfileCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
//   background-color: #f5f5f5;
// `;

// const ProfileContainer = styled.div`
//   width: 90%; /* Adjusted width */
//   max-width: 900px; /* Reduced max-width */
//   height: 92vh; /* Reduced height */
//   margin-top: auto;
// `;

// const ProfileForm = styled.div`
//   background-color: #fff;
//   border: 1px solid #ccc;
//   padding: 10px; /* Adjusted padding */
//   border-radius: 8px;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// `;

// const UIDivider = styled.div`
//   margin-top: 10px; /* Adjusted margin-top */
// `;

// const UIForm = styled.div``;

// const Title = styled.h1`
//   margin-bottom: 30px; /* Adjusted margin */
//   font-size: 1.5rem; /* Reduced font-size */
//   text-align: center;
// `;

// const ProfileField = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;
//   height: 65px; /* Reduced height */
//   padding: 8px; /* Adjusted padding */
//   border-radius: 5px;
//   background-color: #fff;
//   margin-bottom: 15px; /* Reduced margin-bottom */
// `;

// const FieldContainer = styled.div`
//   width: 48%;
// `;

// const Label = styled.label`
//   font-size: 1em; /* Reduced font-size */
//   font-weight: bold;
//   margin-bottom: 3px; /* Reduced margin-bottom */
// `;

// const Input = styled.input`
//   width: 100%;
//   height: 35px; /* Reduced height */
//   font-size: 1em; /* Reduced font-size */
//   padding: 6px; /* Reduced padding */
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   background-color: #007bff;
//   color: white;
//   padding: 12px 16px; /* Reduced padding */
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 1em; /* Reduced font-size */

//   &:hover {
//     background-color: #0056b3;
//   }
//   `;

// const Personaldetails = () => {
//   const formRef = useRef(null);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     alert('Details Updated Successfully');
//     formRef.current.reset();
//   };

//   return (
//     <>
//     <Nav/>
//     <ProfileCard>
//       <ProfileContainer>
//         <ProfileForm>
//           <UIDivider />
//           <UIForm>
//             <Title>Personal Details</Title>
//             <form ref={formRef} onSubmit={submitHandler}>
//               <ProfileField>
//                 <FieldContainer>
//                   <Label>First Name</Label>
//                   <Input type="text" name="firstname" placeholder="First Name" />
//                 </FieldContainer>
//                 <FieldContainer>
//                   <Label>Last Name</Label>
//                   <Input type="text" name="lastname" placeholder="Last Name" />
//                 </FieldContainer>
//               </ProfileField>
//               <ProfileField>
//                 <FieldContainer>
//                   <Label>State</Label>
//                   <Input type="text" name="state" placeholder="State" />
//                 </FieldContainer>
//                 <FieldContainer>
//                   <Label>City</Label>
//                   <Input type="text" name="city" placeholder="City" />
//                 </FieldContainer>
//               </ProfileField>
//               <ProfileField>
//                 <FieldContainer>
//                   <Label>District</Label>
//                   <Input type="text" name="district" placeholder="District" />
//                 </FieldContainer>
//                 <FieldContainer>
//                   <Label>Post Code</Label>
//                   <Input type="number" name="postcode" placeholder="Post Code" />
//                 </FieldContainer>
//               </ProfileField>
//               <ProfileField>
//                 <FieldContainer>
//                   <Label>Contact Number</Label>
//                   <Input type="text" name="contactnumber" placeholder="Contact Number" />
//                 </FieldContainer>
//                 <FieldContainer>
//                   <Label>Birth Date</Label>
//                   <Input type="date" name="birthdate" placeholder="dd-mm-yyyy" />
//                 </FieldContainer>
//               </ProfileField>
//               <ProfileField>
//                 <FieldContainer>
//                   <Label>Email</Label>
//                   <Input type="email" name="email" placeholder="Email" />
//                 </FieldContainer>
//                 <FieldContainer>
//                   <Label>Gender</Label>
//                   <Input type="text" name="gender" />
//                 </FieldContainer>
//               </ProfileField>
//               <ProfileField>
//                 <FieldContainer>
//                   <Label>Emergency Contact Name</Label>
//                   <Input type="text" name="emergencycontactname" placeholder="Emergency Contact Name" />
//                 </FieldContainer>
//                 <FieldContainer>
//                   <Label>Emergency Contact Number</Label>
//                   <Input type="text" name="emergencycontactnumber" placeholder="Emergency Contact Number" />
//                 </FieldContainer>
//               </ProfileField>
//               <SubmitButton type="submit">Save Details</SubmitButton>
//             </form>
//           </UIForm>
//         </ProfileForm>
//       </ProfileContainer>
//     </ProfileCard>
//     <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
//       <Footer/>
//     </div>
//     </>
//   );
// };

// export default Personaldetails;

import axios from "axios";
import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ProfileContainer = styled.div`
  width: 90%;
  max-width: 900px;
  height: 92vh;
  margin-top: auto;
`;

const ProfileForm = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const UIDivider = styled.div`
  margin-top: 10px;
`;

const UIForm = styled.div``;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 1.5rem;
  text-align: center;
`;

const ProfileField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  padding: 8px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 15px;
`;

const FieldContainer = styled.div`
  width: 48%;
`;

const Label = styled.label`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 3px;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  font-size: 1em;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

const Personaldetails = () => {
  const formRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      await axios.post("http://127.0.0.1:8000/UpdatePersonalDetails/", data);
      alert("Details Updated Successfully");
      formRef.current.reset();
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <>
      <Nav />
      <ProfileCard>
        <ProfileContainer>
          <ProfileForm>
            <UIDivider />
            <UIForm>
              <Title>Personal Details</Title>
              <form ref={formRef} onSubmit={submitHandler}>
                <ProfileField>
                  <FieldContainer>
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>State</Label>
                    <Input type="text" name="state" placeholder="State" />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>City</Label>
                    <Input type="text" name="city" placeholder="City" />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>District</Label>
                    <Input type="text" name="district" placeholder="District" />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Post Code</Label>
                    <Input
                      type="number"
                      name="postcode"
                      placeholder="Post Code"
                    />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>Contact Number</Label>
                    <Input
                      type="text"
                      name="contactnumber"
                      placeholder="Contact Number"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Birth Date</Label>
                    <Input
                      type="date"
                      name="birthdate"
                      placeholder="dd-mm-yyyy"
                    />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Email" />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Gender</Label>
                    <Input type="text" name="gender" />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>Emergency Contact Name</Label>
                    <Input
                      type="text"
                      name="emergencycontactname"
                      placeholder="Emergency Contact Name"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Emergency Contact Number</Label>
                    <Input
                      type="text"
                      name="emergencycontactnumber"
                      placeholder="Emergency Contact Number"
                    />
                  </FieldContainer>
                </ProfileField>
                <SubmitButton type="submit">Save Details</SubmitButton>
              </form>
            </UIForm>
          </ProfileForm>
        </ProfileContainer>
      </ProfileCard>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Personaldetails;
