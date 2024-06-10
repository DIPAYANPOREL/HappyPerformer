import React, { useState, useEffect } from 'react';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './Modal';

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const IdentityDetailsContainer = styled.div`
  overflow-y: auto;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const IdentityDetailsTable = styled.table`
  margin-top: 50px;
  width: 100%;
  align-items: center;
  border-collapse: collapse;
  text-align: center;
`;

const IdentityDetailsHeader = styled.th`
  background-color: #2C599D;
  color: white;
  padding: 15px;
`;

const IdentityDetailsRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

const IdentityDetailsCell = styled.td`
  padding: 15px;
  border: 1px solid #ddd;
`;

const IdentityDetailsButton = styled.button`
  background-color: #2C599D;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  width: 70px;
  margin-bottom: 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #FB9B50;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const AddCaseForm = styled.form`
  margin-top: 15px;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;
`;

const IdentityField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Mandatory = styled.span`
  color: red;
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

const CaseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  color: white;
  background-color: #2C599D;

  &:hover {
    background-color: #FB9B50;
    color: white;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const EmptyListMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  color: gray;
`;

const IdentityDetails = () => {
  const [identityDetails, setIdentityDetails] = useState([
    { id: 1, identityType: 'ADHAAR', identityNumber: '', details: null },
    { id: 2, identityType: 'DRIVING LICENSE', identityNumber: '', details: null },
    { id: 3, identityType: 'PASSPORT', identityNumber: '', details: null },
    { id: 4, identityType: 'PAN CARD', identityNumber: '', details: null },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  const handleDelete = async (id) => {
    try {
      const identityType = identityDetails.find(item => item.id === id).identityType;
      await axios.delete(`http://127.0.0.1:8000/Update${identityType}`); // Adjusted endpoint
      setIdentityDetails(identityDetails.map(item =>
        item.id === id ? { ...item, details: null } : item
      ));
    } catch (error) {
      console.error('Error deleting identity detail:', error);
    }
  };

  const handleEdit = (id) => {
    const selected = identityDetails.find(item => item.id === id);
    setSelectedIdentity(selected);
    setShowModal(true);
  };

  const handleView = (id) => {
    const selected = identityDetails.find(item => item.id === id);
    if (selected.details) {
      alert(`Details: ${JSON.stringify(selected.details)}`);
    } else {
      alert('No details available');
    }
  };

  const handleAddCase = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let newDetails = {};

    switch (selectedIdentity.identityType) {
      case 'ADHAAR':
        newDetails = {
          adhaar_no: formData.get('aadharCardNumber'),
          adhaar_name: formData.get('aadharCardName'),
          enroll_no: formData.get('aadharCardEnrollNumber'),
          adhaar_pic: formData.get('aadharCardScan')
        };
        break;
      case 'DRIVING LICENSE':
        newDetails = {
          licence_no: formData.get('drivingLicenseNumber'),
          licence_name: formData.get('drivinglicenseName'),
          expiry_date: formData.get('validdate'),
          licence_pic: formData.get('drivinglicenseScan')
        };
        break;
      case 'PAN CARD':
        newDetails = {
          pan_no: formData.get('panCardNumber'),
          pan_name: formData.get('panCardName'),
          pan_pic: formData.get('panCardScan')
        };
        break;
      case 'PASSPORT':
        newDetails = {
          passport_no: formData.get('passportNumber'),
          passport_name: formData.get('passportName'),
          passport_validity: formData.get('validPassportdate'),
          passport_pic: formData.get('passportScan')
        };
        break;
      default:
        console.error('Invalid identity type');
        return;
    }

    try {
      let response;
      if (selectedIdentity.details) {
        response = await axios.put(`http://127.0.0.1:8000/Update${selectedIdentity.identityType}`, newDetails);
        setIdentityDetails(identityDetails.map(item =>
          item.id === selectedIdentity.id ? { ...item, details: response.data } : item
        ));
      } else {
        response = await axios.post(`http://127.0.0.1:8000/Update${selectedIdentity.identityType}`, newDetails);
        setIdentityDetails(identityDetails.map(item =>
          item.id === selectedIdentity.id ? { ...item, details: response.data } : item
        ));
      }
      setShowModal(false);
    } catch (error) {
      console.error('Error saving identity detail:', error);
    }
  };

  const handleCloseForm = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchIdentityDetails = async () => {
      try {
        const adhaarResponse = await axios.get('http://127.0.0.1:8000/UpdateAdhaar');
        const licenceResponse = await axios.get('http://127.0.0.1:8000/UpdateLicence');
        const passportResponse = await axios.get('http://127.0.0.1:8000/UpdatePassport');
        const panResponse = await axios.get('http://127.0.0.1:8000/UpdatePan');

        const updatedDetails = identityDetails.map(item => {
          let details;
          switch (item.identityType) {
            case 'ADHAAR':
              details = adhaarResponse.data;
              break;
            case 'DRIVING LICENSE':
              details = licenceResponse.data;
              break;
            case 'PASSPORT':
              details = passportResponse.data;
              break;
            case 'PAN CARD':
              details = panResponse.data;
              break;
            default:
              details = null;
          }
          return {
            ...item,
            details: details || null
          };
        });
        setIdentityDetails(updatedDetails);
      } catch (error) {
        console.error('Error fetching identity details:', error);
      }
    };

    fetchIdentityDetails();
  }, []);

  return (
    <>
      <Nav />
      <IdentityDetailsContainer>
        <h1 style={{ marginTop: '30px' }}>Identity Details</h1>
        {identityDetails.length === 0 ? (
          <EmptyListMessage>No identity details available.</EmptyListMessage>
        ) : (
          <IdentityDetailsTable>
            <thead>
              <tr>
                <IdentityDetailsHeader>Identity Type</IdentityDetailsHeader>
                <IdentityDetailsHeader>Identity Number</IdentityDetailsHeader>
                <IdentityDetailsHeader>Actions</IdentityDetailsHeader>
              </tr>
            </thead>
            <tbody>
              {identityDetails.map((item) => (
                <IdentityDetailsRow key={item.id}>
                  <IdentityDetailsCell>{item.identityType}</IdentityDetailsCell>
                  <IdentityDetailsCell>{item.details ? item.details.identityNumber : 'N/A'}</IdentityDetailsCell>
                  <IdentityDetailsCell>
                    <IdentityDetailsButton onClick={() => handleView(item.id)}>View</IdentityDetailsButton>
                    <IdentityDetailsButton onClick={() => handleEdit(item.id)}>Edit</IdentityDetailsButton>
                    <IdentityDetailsButton onClick={() => handleDelete(item.id)}>Delete</IdentityDetailsButton>
                  </IdentityDetailsCell>
                </IdentityDetailsRow>
              ))}
            </tbody>
          </IdentityDetailsTable>
        )}
      </IdentityDetailsContainer>
      <Footer />

      <Modal show={showModal} onClose={handleCloseForm}>
        <AddCaseForm onSubmit={handleAddCase}>
          {selectedIdentity && selectedIdentity.identityType === 'ADHAAR' && (
            <IdentityField>
              <label>ADHAAR CARD NUMBER <Mandatory>*</Mandatory></label>
              <input type='number' name='aadharCardNumber' defaultValue={selectedIdentity.details ? selectedIdentity.details.adhaar_no : ''} required />
              <Error>This field is mandatory</Error>
              <label style={{ marginTop: '14px' }}>NAME ON ADHAAR</label>
              <input type='text' name='aadharCardName' defaultValue={selectedIdentity.details ? selectedIdentity.details.adhaar_name : ''} />
              <label style={{ marginTop: '14px' }}>ENROLLMENT NUMBER</label>
              <input type='number' name='aadharCardEnrollNumber' defaultValue={selectedIdentity.details ? selectedIdentity.details.enroll_no : ''} />
              <label style={{ marginTop: '14px' }}>ADHAAR CARD SCAN</label>
              <input type='file' name='aadharCardScan' accept='image/*' />
            </IdentityField>
          )}
          {selectedIdentity && selectedIdentity.identityType === 'DRIVING LICENSE' && (
            <IdentityField>
              <label>DRIVING LICENSE NUMBER <Mandatory>*</Mandatory></label>
              <input type='number' name='drivingLicenseNumber' defaultValue={selectedIdentity.details ? selectedIdentity.details.licence_no : ''} required />
              <Error>This field is mandatory</Error>
              <label style={{ marginTop: '14px' }}>NAME ON DRIVING LICENSE</label>
              <input type='text' name='drivinglicenseName' defaultValue={selectedIdentity.details ? selectedIdentity.details.licence_name : ''} />
              <label style={{ marginTop: '14px' }}>VALID UPTO</label>
              <input type='date' name='validdate' defaultValue={selectedIdentity.details ? selectedIdentity.details.expiry_date : ''} />
              <label style={{ marginTop: '14px' }}>DRIVING LICENSE SCAN</label>
              <input type='file' name='drivinglicenseScan' accept='image/*' />
            </IdentityField>
          )}
          {selectedIdentity && selectedIdentity.identityType === 'PAN CARD' && (
            <IdentityField>
              <label>PAN CARD NUMBER <Mandatory>*</Mandatory></label>
              <input type='number' name='panCardNumber' defaultValue={selectedIdentity.details ? selectedIdentity.details.pan_no : ''} required />
              <Error>This field is mandatory</Error>
              <label style={{ marginTop: '14px' }}>NAME ON PAN CARD</label>
              <input type='text' name='panCardName' defaultValue={selectedIdentity.details ? selectedIdentity.details.pan_name : ''} />
              <label style={{ marginTop: '14px' }}>PAN CARD SCAN</label>
              <input type='file' name='panCardScan' accept='image/*' />
            </IdentityField>
          )}
          {selectedIdentity && selectedIdentity.identityType === 'PASSPORT' && (
            <IdentityField>
              <label>PASSPORT NUMBER <Mandatory>*</Mandatory></label>
              <input type='number' name='passportNumber' defaultValue={selectedIdentity.details ? selectedIdentity.details.passport_no : ''} required />
              <Error>This field is mandatory</Error>
              <label style={{ marginTop: '14px' }}>NAME ON PASSPORT</label>
              <input type='text' name='passportName' defaultValue={selectedIdentity.details ? selectedIdentity.details.passport_name : ''} />
              <label style={{ marginTop: '14px' }}>VALID UPTO</label>
              <input type='date' name='validPassportdate' defaultValue={selectedIdentity.details ? selectedIdentity.details.passport_validity : ''} />
              <label style={{ marginTop: '14px' }}>PASSPORT SCAN</label>
              <input type='file' name='passportScan' accept='image/*' />
            </IdentityField>
          )}
          <CaseButton type='submit'>Save</CaseButton>
        </AddCaseForm>
      </Modal>
    </>
  );
};

export default IdentityDetails;
