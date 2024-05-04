import React from 'react'
// import Footer from "../../Components/Software Components/Footer.jsx";
// import Navbar from "../../Components/Software Components/Navbar.jsx";
const JobDetails = () => {
  return (
    // <>
    // <Navbar/>
    <div>
      <div className='jobcontainer'>
    <form>
      <div className='ui-divider' style={{marginTop:'15px'}}></div>
      <div className='ui-form'>
        <h1 className='text-center'style={{marginBottom:'40px'}}>Job Details</h1>
        <div className='casefield' style={{marginBottom:'30px'}}>
            <label>Title</label>
            <input type='text' name='title' placeholder='Job Title' ></input>
        </div>
        <div className='casefield' style={{ width: "25rem", borderRadius: "4px", marginBottom:'20px'}}>

            <label>Department</label>
            <select name='casetype' style={{ width: "41rem", height:"2.6rem", borderRadius: "4px", marginBottom:'20px'}} >
                <option value='case-dropdown' selected disabled>Select Department</option>
                <option value='Emoployee'>Employee</option>
                <option value='Manager'>Manager</option>
                <option value='HR'>HR </option>
          </select>
        </div>
        <div className='casefield' style={{ width: "25rem", borderRadius: "4px", marginBottom:'15px'}}>
            <label>Working Type</label>
            <select name='casetype' style={{ width: "41rem", height:"2.6rem", borderRadius: "4px", marginBottom:'20px'}} >
                <option value='case-dropdown' selected disabled>Select Type</option>
                <option value='FullTime'>Full Time</option>
                <option value='PartTime'>Part Time</option>
                <option value='Remote'>Remote </option>
          </select>
        </div>
        <div className='casefield' style={{ marginBottom:'50px'}}>
            <label>Start Date</label>
            <input type='date' name='startdate' placeholder='dd-mm-yyyy'></input>
        </div>

        <button className='casebtn' onClick={() => alert("Details Updated Successfully ")}>Save Details</button>
      </div>
      </form>
    </div>
    </div>
    // {/* <Footer/>
    // </> */}
  )
}

export default JobDetails
