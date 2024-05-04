import React, { useState } from 'react';

const DependentDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [dependentDetails, setDependentDetails] = useState([]);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newDetails = {
      name: formData.get('depname'),
      dependentgender: formData.get('depgender'),
      date: formData.get('depdob'),
      relation: formData.get('deprelation'),
      description: formData.get('depdescription'),
    };

    setDependentDetails((prevState) => [...prevState, newDetails]);
    alert('Details Updated Successfully');

    event.target.reset();
  };

  const deleteItem = (index) => {
    const newList = [...dependentDetails];
    newList.splice(index, 1);
    setDependentDetails(newList);
  };

  return (
    <div className="workcontainer">
      <table className="tbl-work">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Relation</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dependentDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.name}</td>
              <td>{detail.dependentgender}</td>
              <td>{detail.date}</td>
              <td>{detail.relation}</td>
              <td>{detail.description}</td>
              <td>
                <button
                  onClick={() => {
                    const newDetails = { ...detail };
                    alert(JSON.stringify(newDetails));
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="btn-right"
        style={{ width: '15%', marginLeft: '25px', marginTop: '20px' }}
        onClick={toggleForm}
      >
        {showForm ? 'Close Form' : 'Add Details'}
      </button>
      {showForm && (
        <div
          className="dependentform"
          style={{
            position: 'absolute',
            top: '50%',
            left: '20%',
            transform: 'translateY(-50%)',
            width: '60%',
            borderRadius: '5px',
            boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
          }}
        >
          <form onSubmit={saveDetails}>
            <h1 className="text-center" style={{ marginBottom: '40px' }}>
              Dependent Details
            </h1>
            <div className='casefield' style={{ marginBottom: '30px' }}>
              <label>Name <span className='Mandatory'>*</span></label>
              <input type='text' name='depname' placeholder='Name of Dependent' required></input>
              <span className='Error'>This field is mandatory</span>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Dependent Gender </label>
              <select name='depgender' style={{ width: "41rem", height:"2.6rem", borderRadius: "4px", marginBottom:'8px'}} >
                <option value="" disabled selected hidden>Please Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Dependent DOB</label>
              <input type='date' name='depdob' placeholder='dd-mm-yyyy'></input>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Relation</label>
              <input type='text' name='deprelation' placeholder='Relation with Dependent'></input>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Description</label>
              <input type='text' name='depdescription' placeholder='Description'></input>
            </div>
            <button
              className="btn"
              style={{ width: '100%' }}
              type='submit'
            >
              Save Details
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DependentDetails;