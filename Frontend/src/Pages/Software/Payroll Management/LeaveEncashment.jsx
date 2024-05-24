import React, { useRef } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const LeaveEncashmentCard = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LeaveEncashmentContainer = styled.div`
  width: 100%; /* Adjusted width */
  max-width: 960px; /* Reduced max-width */
  height: 95vh; /* Reduced height */
  margin-top: auto;
`;

const LeaveEncashmentForm = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px; /* Adjusted padding */
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const UIDivider = styled.div`
  margin-top: 20px; /* Adjusted margin-top */
`;

const UIForm = styled.div``;

const Title = styled.h1`
  margin-bottom: 35px; /* Adjusted margin */
  font-size: 1.5rem; /* Reduced font-size */
  text-align: center;
`;

const LeaveEncashmentField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 65px; /* Reduced height */
  padding: 10px; /* Adjusted padding */
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 15px; /* Reduced margin-bottom */
`;

const FieldContainer = styled.div`
  width: 48%;
`;

const Label = styled.label`
  font-size: 1em; /* Reduced font-size */
  font-weight: bold;
  margin-bottom: 5px; /* Reduced margin-bottom */
`;

const Input = styled.input`
  width: 100%;
  height: 35px; /* Reduced height */
  font-size: 1em; /* Reduced font-size */
  padding: 6px; /* Reduced padding */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  margin-top: 35px;
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px 16px; /* Reduced padding */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em; /* Reduced font-size */

  &:hover {
    background-color: #0056b3;
  }
  `;

const LeaveEncashment = () => {
    const formRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Details Updated Successfully');
    formRef.current.reset();
  };
  return (
    <>
    <Nav/>
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
                  <Input type="date" name="txndate" placeholder="dd-mm-yy" />
                </FieldContainer>
                <FieldContainer>
                  <Label>Reference Number</Label>
                  <Input type="number" name="referencenum" placeholder="Enter Reference Number" />
                </FieldContainer>
              </LeaveEncashmentField>
              <LeaveEncashmentField>
                <FieldContainer>
                  <Label>Effective Date</Label>
                  <Input type="date" name="effectivedate" placeholder="dd-mm-yyyy" />
                </FieldContainer>
                <FieldContainer>
                  <Label>Employee</Label>
                  <Input type="text" name="empname" placeholder="Enter Employee Name" />
                </FieldContainer>
              </LeaveEncashmentField>
              <hr style={{ border: 'none', height: '1px', backgroundColor: 'black', marginTop: '30px' }} />
              <h2 style={{ marginTop: '25px', marginBottom:'20px',fontSize:'20px' }}>General</h2>
              <LeaveEncashmentField>
                <FieldContainer>
                  <Label>Leave Type</Label>
                  <Input type="text" name="leaveType" placeholder="Enter Leave Type" />
                </FieldContainer>
                <FieldContainer>
                  <Label>Leaves Allowed</Label>
                  <Input type="number" name="leavesallowed" placeholder="Enter Leaves Allowed" />
                </FieldContainer>
              </LeaveEncashmentField>
              <LeaveEncashmentField>
                <FieldContainer>
                  <Label>Leaves Taken</Label>
                  <Input type="number" name="totalleaves" placeholder="Enter Leaves Taken" />
                </FieldContainer>
                <FieldContainer>
                  <Label>Salary</Label>
                  <Input type="number" name="salary" placeholder="Enter Salary" />
                </FieldContainer>
              </LeaveEncashmentField>
              <SubmitButton type="submit">Save Details</SubmitButton>
            </form>
          </UIForm>
        </LeaveEncashmentForm>
      </LeaveEncashmentContainer>
    </LeaveEncashmentCard>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  );
};

export default LeaveEncashment;
