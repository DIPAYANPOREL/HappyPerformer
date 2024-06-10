import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const LeaveEncashmentCard = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LeaveEncashmentContainer = styled.div`
  width: 100%;
  max-width: 960px;
  height: 95vh;
  margin-top: auto;
`;

const LeaveEncashmentForm = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const UIDivider = styled.div`
  margin-top: 20px;
`;

const UIForm = styled.div``;

const Title = styled.h1`
  margin-bottom: 35px;
  font-size: 1.5rem;
  text-align: center;
`;

const LeaveEncashmentField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  padding: 10px;
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
  margin-bottom: 5px;
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
  margin-top: 35px;
  width: 20%;
  margin-left: 39%;
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

const LeaveEncashment = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    txndate: '',
    referencenum: '',
    effectivedate: '',
    empname: '',
    leaveType: '',
    leavesallowed: '',
    totalleaves: '',
    salary: '',
  });

  useEffect(() => {
    const fetchLeaveEncashmentData = async () => {
      try {
        const response = await axios.get('https://your-backend-url.com/leave-encashment'); // Replace with backend URL
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchLeaveEncashmentData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-backend-url.com/leave-encashment', formData); // Replace with backend URL
      alert('Details Updated Successfully');
      formRef.current.reset();
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to update details');
    }
  };

  return (
    <>
      <Nav />
      <LeaveEncashmentCard>
        <LeaveEncashmentContainer>
          <LeaveEncashmentForm>
            <UIDivider />
            <UIForm>
              <Title>Leave Encashment</Title>
              <form ref={formRef} onSubmit={submitHandler}>
                <LeaveEncashmentField>
                  <FieldContainer>
                    <Label>Txn Date</Label>
                    <Input
                      type="date"
                      name="txndate"
                      value={formData.txndate}
                      onChange={handleChange}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Reference Number</Label>
                    <Input
                      type="number"
                      name="referencenum"
                      value={formData.referencenum}
                      onChange={handleChange}
                      placeholder="Enter Reference Number"
                    />
                  </FieldContainer>
                </LeaveEncashmentField>
                <LeaveEncashmentField>
                  <FieldContainer>
                    <Label>Effective Date</Label>
                    <Input
                      type="date"
                      name="effectivedate"
                      value={formData.effectivedate}
                      onChange={handleChange}
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Employee</Label>
                    <Input
                      type="text"
                      name="empname"
                      value={formData.empname}
                      onChange={handleChange}
                      placeholder="Enter Employee Name"
                    />
                  </FieldContainer>
                </LeaveEncashmentField>
                {/* <h2 style={{ marginTop: '25px', marginBottom: '20px', fontSize: '20px', marginRight:'auto',marginLeft:'auto'}}>General</h2> */}
                <LeaveEncashmentField>
                  <FieldContainer>
                    <Label>Leave Type</Label>
                    <Input
                      type="text"
                      name="leaveType"
                      value={formData.leaveType}
                      onChange={handleChange}
                      placeholder="Enter Leave Type"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Leaves Allowed</Label>
                    <Input
                      type="number"
                      name="leavesallowed"
                      value={formData.leavesallowed}
                      onChange={handleChange}
                      placeholder="Enter Leaves Allowed"
                    />
                  </FieldContainer>
                </LeaveEncashmentField>
                <LeaveEncashmentField>
                  <FieldContainer>
                    <Label>Leaves Taken</Label>
                    <Input
                      type="number"
                      name="totalleaves"
                      value={formData.totalleaves}
                      onChange={handleChange}
                      placeholder="Enter Leaves Taken"
                    />
                  </FieldContainer>
                  <FieldContainer>
                    <Label>Salary</Label>
                    <Input
                      type="number"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="Enter Salary"
                    />
                  </FieldContainer>
                </LeaveEncashmentField>
                <SubmitButton type="submit">Save Details</SubmitButton>
              </form>
            </UIForm>
          </LeaveEncashmentForm>
        </LeaveEncashmentContainer>
      </LeaveEncashmentCard>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default LeaveEncashment;
