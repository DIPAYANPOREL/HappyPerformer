import React, { useRef } from 'react'

const Profile = () => {
  const formRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Details Updated Successfully");
    formRef.current.reset()
  }
  return (
    <div className='profilecard'>
       <div className='profilecontainer'>
    <form ref={formRef} onSubmit={submitHandler}>
      <div className='ui-divider' style={{marginTop:'15px'}}></div>
      <div className='ui-form'>
        <h1 className='text-center'style={{marginBottom:'30px'}}>Personal Details</h1>
        <div className='profilefield' style={{display:'flex', flexDirection:'column', width:'100%'}}>
            <label style={{width:'100%'}}>Name</label>
            <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                <input type='text' name='firstname' placeholder='First Name' style={{width:'100%', marginBottom:'25px'}}></input>
                <input type='text' name='lastname' placeholder='Last Name' style={{width:'100%'}}></input>
            </div>
        </div>
        <label style={{width:'100%'}}>Address</label>
            <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                <input type='text' name='state' placeholder='State' style={{width:'100%', marginBottom:'25px'}}></input>
                <input type='text' name='city' placeholder='City' style={{width:'100%', marginBottom:'25px'}}></input>
                <input type='text' name='district' placeholder='District' style={{width:'100%', marginBottom:'25px'}}></input>
                <input type='number' name='postecode' placeholder='Post Code' style={{width:'100%', marginBottom:'25px'}}></input>
            </div>
        <div className='profilefield'>
            <label>Contact Number</label>
            <input type='text' name='contactnumber' placeholder='Contact Number'></input>
        </div>
        <div className='profilefield'>
            <label>Birth Date</label>
            <input type='date' name='birthdate' placeholder='dd-mm-yyyy'></input>
        </div>
        <div className='profilefield'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email'></input>
        </div>
        <div className='profilefield'>
            <label>Gender</label>
            <input type='text' name='gender' ></input>
        </div>
        <label style={{width:'100%'}}>Emergency Details</label>
            <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                <input type='text' name='contactname' placeholder='Emergency Contact Name' style={{width:'100%', marginBottom:'25px'}}></input>
                <input type='text' name='contactnumber' placeholder='Emergency Contact Number' style={{width:'100%', marginBottom:'15px'}}></input>
            </div>
            <button className="profilebtn" style={{ width: '100%' }} type='submit'>Save Details</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Profile