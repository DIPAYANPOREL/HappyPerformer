import React, { useState } from 'react';
import styled from 'styled-components';
// import NavbarHome from '../../Components/HomePage/NavbarHome';
// import Footer from "../../Components/Software Components/Footer";

const Container = styled.div`
  width: 100%;
`;
const Right = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;
const ProfileContainer = styled.div`
  margin-bottom: 15px;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

const FileInput = styled.input`
  display: none;
`;
const ChooseFileLabel = styled.label`
  display: block;
  margin-top: 5px;
  color: #e74c3c;
  cursor: pointer;
`;
const Label = styled.label`
  display: block;
  font-weight: bold;
`;
const ForgotPass = styled.a`
  color: #e74c3c;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    flex-basis: 48%;
    margin-bottom: 1rem;
  }
`;
const Setting = () => {
  const [formData, setFormData] = useState(
  {
    name: '',
    email: '',
    phone: '',
    skills: '',
    password: '',
    confirmPassword: ''
  });

  const [profilePic, setProfilePic] = useState(null);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 10) {
      validationErrors.password = "Password should be at least 10 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      // You can add further actions here, like submitting the form data
    }
  };
  return (

// </NavbarHome>
<>
 <Container>  
    <form onSubmit={handleSubmit}>
    <Right>
      <ProfileContainer>
        {profilePic ? (
          <ProfileImage src={URL.createObjectURL(profilePic)} alt="Profile" />
        ) : (
          <ProfileImage src="default-profile-pic.jpg" alt="Profile" />
        )}
        <FileInput
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />
        <ChooseFileLabel htmlFor="fileInput">Choose Profile Picture</ChooseFileLabel>
      </ProfileContainer>
  </Right>
      <div className="public-info">
        <h2>Public Information</h2>
      </div>
    <FormContainer>
      <div>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Name" autoComplete="off" onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" name="email" placeholder="Email" autoComplete="off" onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <Label>Phone</Label>
        <Input type="text" name="phone" placeholder="Phone" autoComplete="off" onChange={handleChange} />
      </div>
      <div>
        <Label>Skills</Label>
        <Input type="text" name="skills" placeholder="Skills" autoComplete="off" onChange={handleChange} />
      </div>
      <div className="password-section">
        <h2>Password Section</h2>
      <div/>
        <Label>Password</Label>
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <Label>Confirm Password</Label>
        <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <ForgotPass>Forgot Password?</ForgotPass>
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
    </FormContainer>
      <div>
      <button type="submit">Save Changes</button>
      </div>
    </form>
    {/* <Footer/> */}
  </Container> 
  </>
 );
};
export default Setting;