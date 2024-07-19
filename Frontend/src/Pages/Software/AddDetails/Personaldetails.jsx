import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "../../../Components/Software Components/Footer";
import Nav from "../../../Components/Software Components/Dashboard/Nav";

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
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    // Fetch initial personal details
    axios.get("http://127.0.0.1:8000/UpdatePersonalDetails/")
      .then(response => {
        if (response.data.status === 'success') {
          setInitialData(response.data.data);
        }
      })
      .catch(error => console.error("Error fetching initial data:", error));
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!initialData) return; // Prevent submission if initialData is not available

    const formData = new FormData(formRef.current);
    const updatedData = { ...initialData }; // Start with initial data

    formData.forEach((value, key) => {
      // Update only the fields that are changed
      updatedData[key] = value;
    });

    console.log('Updated Data:', updatedData); // Debug log

    try {
      await axios.put("http://127.0.0.1:8000/UpdatePersonalDetails/", updatedData);
      alert("Details Updated Successfully");
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
                      name="first_name"
                      defaultValue={initialData?.first_name}
                      placeholder="First Name"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      name="last_name"
                      defaultValue={initialData?.last_name}
                      placeholder="Last Name"
                    />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>State</Label>
                    <Input
                      type="text"
                      name="state"
                      defaultValue={initialData?.state}
                      placeholder="State"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>City</Label>
                    <Input
                      type="text"
                      name="city"
                      defaultValue={initialData?.city}
                      placeholder="City"
                    />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>District</Label>
                    <Input
                      type="text"
                      name="district"
                      defaultValue={initialData?.district}
                      placeholder="District"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Post Code</Label>
                    <Input
                      type="number"
                      name="post_code"
                      defaultValue={initialData?.post_code}
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
                      defaultValue={initialData?.Contact}
                      placeholder="Contact Number"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Birth Date</Label>
                    <Input
                      type="date"
                      name="birth_date"
                      defaultValue={initialData?.birth_date}
                    />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="emp_emailid"
                      defaultValue={initialData?.emp_emailid}
                      placeholder="Email"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Gender</Label>
                    <Input
                      type="text"
                      name="gender"
                      defaultValue={initialData?.gender}
                    />
                  </FieldContainer>
                </ProfileField>
                <ProfileField>
                  <FieldContainer>
                    <Label>Emergency Contact Name</Label>
                    <Input
                      type="text"
                      name="emergency_name"
                      defaultValue={initialData?.emergency_name}
                      placeholder="Emergency Contact Name"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Emergency Contact Number</Label>
                    <Input
                      type="text"
                      name="emergency_contact"
                      defaultValue={initialData?.emergency_contact}
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
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default Personaldetails;
