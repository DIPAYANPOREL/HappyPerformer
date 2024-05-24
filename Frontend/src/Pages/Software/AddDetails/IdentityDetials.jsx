import React, { useState } from 'react'
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const IdentityDetials = () => {
  const [identityDetails, setIdentityDetails] = React.useState([
    {
      identityType: 'Aadhar Card',
      identityNumber: '123456789012',
      id: 1
    },
    {
      identityType: 'Driving License',
      identityNumber: 'DL12345',
      id: 2
    },
    {
      identityType: 'PAN Card',
      identityNumber: 'PAN1234567890',
      id: 4
    }
  ])
  const [addCase, setAddCase] = useState(false)

  const handleDelete = (id) => {
    const newList = identityDetails.filter((item) => item.id !== id)
    setIdentityDetails(newList)
  }

  const handleAdd = () => {
    setAddCase(true)
  }

  const handleAddCase = (e) => {
    e.preventDefault()
    setAddCase(false)
  }

  return (
    <>
    <Nav/>
    <div className='identity-details-container'>
      <style>
        {`
        .identity-details-container{
          display: flex;
          flex-direction: column;
          height: 60vh;
          width: 80%;
          margin: 0 auto;

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
            padding: 10px;
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

          .identity-details-action{
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

          .add-case-form{
            display: ${addCase ? 'block' : 'none'}
          }
        `}
      </style>
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
                <button className='identity-details-button' onClick={handleAdd}>Add</button>
                <button
                  className='identity-details-button'
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleAddCase} className='add-case-form' style={{
        display: addCase ? 'block' : 'none',
        marginTop: '15px',
        padding: '20px',
        border: '1px solid lightgrey',
        borderRadius: '5px',
        backgroundColor: 'white'
      }}>
        <div className='ui-divider'></div>
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h3>Employee Identity</h3>

        </div>
        <h4 style={{
          marginBottom: '10px'
        }}>Identity Type</h4>
        <h5 style={{
          marginBottom: '10px'
        }}>Aadhar Card</h5>
        <div className='identityfield' style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '20px'
        }}>
          <label style={{
            marginBottom: '5px'
          }}>ADHAAR CARD NUMBER <span className='Mandatory'>*</span></label>
          <input
            type='text'
            name='adhaarcardnumber'
            style={{
              padding: '10px',
              border: '1px solid lightgrey',
              borderRadius: '5px'
            }}
            required
          ></input>
          <span className='Error' style={{
            color: 'red',
            fontSize: '12px'
          }}>This field is mandatory</span>
        </div>
        <div className='identityfield' style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '20px'
        }}>
          <label style={{
            marginBottom: '5px'
          }}>NAME ON ADHAAR CARD</label>
          <input
            type='text'
            name='casetitle'
            style={{
              padding: '10px',
              border: '1px solid lightgrey',
              borderRadius: '5px'
            }}
          ></input>
        </div>
        <div className='identityfield' style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '20px'
        }}>
          <label style={{
            marginBottom: '5px'
          }}>ADHAAR ENROLLMENT NUMBER</label>
          <input
            type='text'
            name='description'
            style={{
              padding: '10px',
              border: '1px solid lightgrey',
              borderRadius: '5px'
            }}
          ></input>
        </div>
        <div className='identityfield' style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '20px'
        }}>
          <label style={{
            marginBottom: '5px'
          }}>ATTACH DOCUMENT TYPE <span className='Mandatory'>*</span></label>
          <input
            type='file'
            name='document'
            style={{
              padding: '10px',
              border: '1px solid lightgrey',
              borderRadius: '5px'
            }}
            required
          ></input>
          <span className='Error' style={{
            color: 'red',
            fontSize: '12px'
          }}>This field is mandatory</span>
        </div>
        <button className='casebtn' style={{
          padding: '10px 20px',
          backgroundColor: '#FB9B50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Save Details</button>
      </form>
    </div>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  )
}

export default IdentityDetials
