import React, { useState } from 'react';

const WorkExperience = () => {
  const [showForm, setShowForm] = useState(false);
  const [workExperienceDetails, setWorkExperienceDetails] = useState([]);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newDetails = {
      duration: `${formData.get('startDate')} - ${formData.get('endDate')}`,
      company: formData.get('companyName'),
      location: formData.get('location'),
      designation: formData.get('designation'),
      grossSalary: formData.get('grossSalary'),
      reasonForLeaving: formData.get('reasonForLeaving'),
    };

    setWorkExperienceDetails((prevState) => [...prevState, newDetails]);
    alert('Details Updated Successfully');

    event.target.reset();
  };

  const deleteItem = (index) => {
    const newList = [...workExperienceDetails];
    newList.splice(index, 1);
    setWorkExperienceDetails(newList);
  };

  return (
    <div className="workcontainer">
      <table className="tbl-work">
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Company</th>
            <th>Location</th>
            <th>Designation</th>
            <th>Gross Salary</th>
            <th>Reason for Leaving</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {workExperienceDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.duration.split(' - ')[0]}</td>
              <td>{detail.duration.split(' - ')[1]}</td>
              <td>{detail.company}</td>
              <td>{detail.location}</td>
              <td>{detail.designation}</td>
              <td>{detail.grossSalary}</td>
              <td>{detail.reasonForLeaving}</td>
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
          className="workform"
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
              Work Experience Details
            </h1>
            <div className='casefield' style={{ marginBottom: '30px' }}>
              <label>Duration <span className='Mandatory'>*</span></label>
              <input type='date' name='startDate' placeholder='dd-mm-yyyy' required style={{ marginBottom: '15px', marginRight: '15px' }}></input>
              <input type='date' name='endDate' placeholder='dd-mm-yyyy' required></input>

              <span className='Error'>This field is mandatory</span>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Company Name</label>
              <input type='text' name='companyName' placeholder='Company Name' required></input>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Location</label>
              <input type='text' name='location' placeholder='Location'></input>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Designation</label>
              <input type='text' name='designation' placeholder='Designation'></input>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Last Gross Salary</label>
              <input type='text' name='grossSalary' placeholder='Gross Salary'></input>
            </div>
            <div className='casefield' style={{ marginBottom: '25px' }}>
              <label>Reason For Leaving</label>
              <input type='text' name='reasonForLeaving' placeholder='Reason For Leaving'></input>
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
export default WorkExperience;