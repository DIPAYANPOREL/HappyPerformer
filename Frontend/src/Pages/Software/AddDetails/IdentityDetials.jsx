import React, { useState, useEffect } from 'react';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';
import axios from 'axios';

const IdentityDetails = () => {
  const [identityDetails, setIdentityDetails] = useState([]);
  const [addCase, setAddCase] = useState(false);
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/identity-details/${id}`);
      const newList = identityDetails.filter((item) => item.id !== id);
      setIdentityDetails(newList);
    } catch (error) {
      console.error('Error deleting identity detail:', error);
    }
  };

  const handleAdd = (id) => {
    const selectedIdentity = identityDetails.find((item) => item.id === id);
    setAddCase(true);
    setSelectedIdentity(selectedIdentity);
  };

  const handleAddCase = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newDetails = {
      identityType: selectedIdentity.identityType,
      identityNumber: formData.get('identityNumber'),
      ...(selectedIdentity.identityType === 'ADHAAR' && {
        aadharCardNumber: formData.get('aadharCardNumber'),
        aadharCardName: formData.get('aadharCardName'),
        aadharCardEnrollNumber: formData.get('aadharCardEnrollNumber'),
        aadharCardScan: formData.get('aadharCardScan'),
      }),
      ...(selectedIdentity.identityType === 'DRIVING LICENSE' && {
        drivingLicenseNumber: formData.get('drivingLicenseNumber'),
        drivinglicenseName: formData.get('drivinglicenseName'),
        validdate: formData.get('validdate'),
        drivinglicenseScan: formData.get('drivinglicenseScan'),
      }),
      ...(selectedIdentity.identityType === 'PAN CARD' && {
        panCardNumber: formData.get('panCardNumber'),
        panCardName: formData.get('panCardName'),
        panCardScan: formData.get('panCardScan'),
      }),
      ...(selectedIdentity.identityType === 'PASSPORT' && {
        passportNumber: formData.get('passportNumber'),
        passportName: formData.get('passportName'),
        validPassportdate: formData.get('validPassportdate'),
        passportScan: formData.get('passportScan'),
      }),
    };

    try {
      let response;
      if (selectedIdentity.id) {
        response = await axios.put(`/api/identity-details/${selectedIdentity.id}`, newDetails);
        const updatedDetails = identityDetails.map((item) =>
          item.id === selectedIdentity.id ? response.data : item
        );
        setIdentityDetails(updatedDetails);
      } else {
        response = await axios.post('/api/identity-details', newDetails);
        setIdentityDetails((prevState) => [...prevState, response.data]);
      }
      setAddCase(false);
      setSelectedIdentity(null);
    } catch (error) {
      console.error('Error saving identity details:', error);
    }
  };

  const handleCloseForm = () => {
    setAddCase(false);
    setSelectedIdentity(null);
  };

  useEffect(() => {
    const fetchIdentityDetails = async () => {
      try {
        const response = await axios.get('/api/identity-details');
        setIdentityDetails(response.data);
      } catch (error) {
        console.error('Error fetching identity details:', error);
      }
    };

    fetchIdentityDetails();
  }, []);

  return (
    <>
      <Nav />
      <div className='identity-details-container' style={{ overflowY: 'auto', height: 'calc(100vh - 100px)' }}>
        <style>
          {`
          .identity-details-container {
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: 0 auto;
            padding-bottom: 100px;
          }

          .identity-details-table {
            margin-top: 50px;
            width: 100%;
            align-items: center;
            border-collapse: collapse;
          }

          .identity-details-header {
            background-color: #2C599D;
            color: white;
            padding: 15px;
          }

          .identity-details-row {
            border-bottom: 1px solid #ddd;
          }

          .identity-details-row:nth-of-type(even) {
            background-color: #f2f2f2;
          }

          .identity-details-cell {
            padding: 5px;
            width: 30%;
          }

          .identity-details-button {
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
            justify-self: center;
          }

          .identity-details-action {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .identity-details-button:hover {
            background-color: #FB9B50;
          }

          .identity-details-button:active {
            position: relative;
            top: 1px;
          }

          .add-case-form {
            display: ${addCase ? 'block' : 'none'};
            margin-top: 15px;
            padding: 20px;
            border: 1px solid lightgrey;
            border-radius: 5px;
            background-color: white;
          }

          .identityfield {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
          }

          .identityfield label {
            margin-bottom: 5px;
          }

          .identityfield input {
            padding: 10px;
            border: 1px solid lightgrey;
            border-radius: 5px;
          }

          .Mandatory {
            color: red;
          }

          .Error {
            color: red;
            font-size: 12px;
          }

          .casebtn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 10px;
            color: white;
            background-color: #2C599D;
          }

          .casebtn:hover {
            background-color: #FB9B50;
            color: white;
          }

          .casebtn:active {
            position: relative;
            top: 1px;
          }

          .empty-list-message {
            text-align: center;
            margin-top: 50px;
            font-size: 20px;
            color: gray;
          }
          `}
        </style>
        {identityDetails.length > 0 ? (
          <table className='identity-details-table'>
            <thead>
              <tr>
                <th className='identity-details-header'>IDENTITY TYPE</th>
                <th className='identity-details-header'>IDENTITY NUMBER</th>
                <th className='identity-details-header'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {identityDetails.map((item) => (
                <tr key={item.id} className='identity-details-row'>
                  <td className='identity-details-cell'>{item.identityType}</td>
                  <td className='identity-details-cell'>{item.identityNumber}</td>
                  <td className='identity-details-cell'>
                    <button className='identity-details-button' onClick={() => handleAdd(item.id)}>Add</button>
                    <button className='identity-details-button' onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className='empty-list-message'>The list is empty.</div>
        )}
        {addCase && selectedIdentity && (
          <form onSubmit={handleAddCase} className='add-case-form'>
            <div className='ui-divider'></div>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3>Employee Identity - {selectedIdentity.identityType}</h3>
            </div>
            {selectedIdentity.identityType === 'ADHAAR' && (
              <div className='identityfield'>
                <label>ADHAAR CARD NUMBER <span className='Mandatory'>*</span></label>
                <input type='number' name='aadharCardNumber' required />
                <span className='Error'>This field is mandatory</span>
                <label style={{marginTop:'14px'}}>NAME ON ADHAAR CARD</label>
                <input type='text' name='aadharCardName'/>
                <label style={{marginTop:'14px'}}>ADHAAR CARD ENROLLMENT NUMBER </label>
                <input type='number' name='aadharCardEnrollNumber'/>
                <label style={{marginTop:'14px'}}>UPLOAD ADHAAR CARD SCAN</label>
                <input type='file' name='aadharCardScan'/>
              </div>
            )}
            {selectedIdentity.identityType === 'DRIVING LICENSE' && (
              <div className='identityfield'>
                <label>Driving License Number <span className='Mandatory'>*</span></label>
                <input type='number' name='drivingLicenseNumber' required />
                <span className='Error'>This field is mandatory</span>
                <label style={{marginTop:'14px'}}>Name On License</label>
                <input type='text' name='drivinglicenseName'/>
                <label style={{marginTop:'14px'}}>Valid Till</label>
                <input type='date' name='validdate'/>
                <label style={{marginTop:'20px'}}>Upload Driving License </label>
                <input type='file' name='drivinglicenseScan'/>
              </div>
            )}
            {selectedIdentity.identityType === 'PAN CARD' && (
              <div className='identityfield'>
                <label>PAN Card Number <span className='Mandatory'>*</span></label>
                <input type='number' name='panCardNumber' required />
                <span className='Error'>This field is mandatory</span>
                <label style={{marginTop:'14px'}}>Name on PAN CARD</label>
                <input type='text' name='panCardName'/>
                <label style={{marginTop:'20px'}}>Upload PAN CARD Scan </label>
                <input type='file' name='panCardScan'/>
              </div>
            )}
            {selectedIdentity.identityType === 'PASSPORT' && (
              <div className='identityfield'>
                <label>Passport Number <span className='Mandatory'>*</span></label>
                <input type='number' name='passportNumber' required />
                <span className='Error'>This field is mandatory</span>
                <label style={{marginTop:'14px'}}>Name on Passport</label>
                <input type='text' name='passportName'/>
                <label style={{marginTop:'14px'}}>Valid Till</label>
                <input type='date' name='validPassportdate'/>
                <label style={{marginTop:'20px'}}>Upload Passport Scan </label>
                <input type='file' name='passportScan'/>
              </div>
            )}
            <button type="submit" className='casebtn'>Save Details</button>
            <button type="button" className='casebtn' onClick={handleCloseForm}>Close</button>
          </form>
        )}
      </div>
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default IdentityDetails;
