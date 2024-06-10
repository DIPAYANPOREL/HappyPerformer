import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const CaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

const Form = styled.form`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
`;

const UIDivider = styled.div`
  margin-top: -80px;
`;

const UIForm = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const CaseField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
  width: 45%;
`;

const Input = styled.input`
  width: 50%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 50%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Error = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const BankDetails = () => {
  const [formData, setFormData] = useState({
    holder_name: '',
    bank_name: '',
    acc_no: '',
    branch: '',
    acc_type: '',
    ifsc: '',
    Pan_no: '',
  });

  const [errors, setErrors] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    fetch('/api/bank-details/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setFormData(data.data);
          setIsEditable(data.data.edit === 'enable');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error('Error fetching bank details:', error));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const acc_no_regex = /(^$)|(^[0-9]{9,18}$)/;
    const ifsc_regex = /(^$)|(^[A-Z]{4}0[A-Z0-9]{6}$)/;
    const pan_no_regex = /(^$)|([A-Z]{5}[0-9]{4}[A-Z]{1}$)/;

    if (!formData.acc_no.match(acc_no_regex)) {
      newErrors.acc_no = 'Invalid Account Number';
    }

    if (!formData.ifsc.match(ifsc_regex)) {
      newErrors.ifsc = 'Invalid IFSC Code';
    }

    if (!formData.Pan_no.match(pan_no_regex)) {
      newErrors.Pan_no = 'Invalid PAN Number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    fetch('/api/bank-details/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          alert('Details Updated Successfully');
        } else {
          alert('Error updating details');
        }
      })
      .catch((error) => console.error('Error updating bank details:', error));
  };

  return (
    <>
      <Nav />
      <CaseContainer>
        <Form name="profile" onSubmit={handleSubmit}>
          <UIDivider />
          <UIForm>
            <Title style={{ textAlign: 'center' }}>Bank Details</Title>
            <CaseField>
              <Label>Account Holder's Name</Label>
              <Input
                type="text"
                name="holder_name"
                placeholder="Account Holder's Name"
                value={formData.holder_name}
                onChange={handleChange}
                disabled={!isEditable}
                style={{ width: '100%' }} 
              />
              {errors.holder_name && (
                <Error>{errors.holder_name}</Error>
              )}
            </CaseField>
            <CaseField>
              <Label>Name Of Bank</Label>
              <Input
                type="text"
                name="bank_name"
                placeholder="Name Of Bank"
                value={formData.bank_name}
                onChange={handleChange}
                disabled={!isEditable}
              />
              {errors.bank_name && (
                <Error>{errors.bank_name}</Error>
              )}
              <Label>Account Number</Label>
              <Input
                type="text"
                name="acc_no"
                placeholder="Account Number"
                value={formData.acc_no}
                onChange={handleChange}
                disabled={!isEditable}
              />
              {errors.acc_no && (
                <Error>{errors.acc_no}</Error>
              )}
            </CaseField>
            <CaseField>
              <Label>Branch (City)</Label>
              <Input
                type="text"
                name="branch"
                placeholder="Branch"
                value={formData.branch}
                onChange={handleChange}
                disabled={!isEditable}
              />
              {errors.branch && (
                <Error>{errors.branch}</Error>
              )}
              <Label>Bank Account Type</Label>
              <Select
                name="acc_type"
                value={formData.acc_type}
                onChange={handleChange}
                disabled={!isEditable}
              >
                <option value="" disabled>Select</option>
                <option value="Savings Account">Savings Account</option>
                <option value="Current Account">Current Account</option>
                <option value="Fixed Deposit Account">Fixed Deposit Account</option>
                <option value="Recurring Deposit Account">Recurring Deposit Account</option>
              </Select>
              {errors.acc_type && (
                <Error>{errors.acc_type}</Error>
              )}
            </CaseField>
            <CaseField>
              <Label>Branch Code (IFSC) Number</Label>
              <Input
                type="text"
                name="ifsc"
                placeholder="Branch Code (IFSC) Number"
                value={formData.ifsc}
                onChange={handleChange}
                disabled={!isEditable}
              />
              {errors.ifsc && (
                <Error>{errors.ifsc}</Error>
              )}
              <Label>PAN Number</Label>
              <Input
                type="text"
                name="Pan_no"
                placeholder="Pan Number"
                value={formData.Pan_no}
                onChange={handleChange}
                disabled={!isEditable}
              />
              {errors.Pan_no && (
                <Error>{errors.Pan_no}</Error>
              )}
            </CaseField>
            <SubmitButton type="submit" disabled={!isEditable}>
              {isEditable ? 'Save Details' : 'Disabled By HR'}
            </SubmitButton>
          </UIForm>
        </Form>
      </CaseContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

export default BankDetails;
