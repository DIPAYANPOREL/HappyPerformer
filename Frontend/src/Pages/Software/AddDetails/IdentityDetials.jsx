import React from 'react'


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

  const handleDelete = (id) => {
    const newList = identityDetails.filter((item) => item.id !== id)
    setIdentityDetails(newList)
  }

  return (
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
            background-color: #04AA6D;
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
            background-color: #04AA6D;
            color: white;
            border-radius: 5px;
            padding: 8px 10px;
            width: 70px;
            margin-bottom: 10px;
            margin-right: 10px;
            text-decoration: none;
            display: inline-block;
            font-size: 15px;
            cursor: pointer;
          }


          .identity-details-button:hover {
            background-color: #04AA6D;
          }

          .identity-details-button:active {
            position: relative;
            top: 1px;
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
                <button className='identity-details-button'>Edit</button>
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
    </div>
  )
}

export default IdentityDetials
