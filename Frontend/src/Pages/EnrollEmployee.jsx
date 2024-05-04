import React, { useState } from 'react'

const EnrollEmployee = () => {
    const[value, setValue] = useState('')
    const[submitted, setSubmitted] = useState(false)
    const options = [
        {label:"Demo", value:1},
        {label:"JavaScript for Beginners", value:2},
        {label:"PHP Full Crash Course", value:3},
        {label:"HTML Full Crash Course", value:4},
    ]
    function handleSelect(event){
        setValue(event.target.value)

    }
    function handleSubmit(event){
        event.preventDefault();
        setSubmitted(true)
        localStorage.setItem('course',value)
        localStorage.setItem('email','john.doe@gmail.com')
    }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:'80vh'}}>
      <div className='w-50 p-3 border rounded' style={{backgroundColor:'white'}}>
        <div className='d-flex justify-content-center'>
          <h4>Course Title</h4>
        </div>
        <select className='form-select' onChange={handleSelect}
        value={value}
        defaultValue={'-- select a course--'}
        style={{width:'100%'}}
        >
            <option value="--select a course--">-- select a course --</option>

            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
            </select>
            <button className='btn btn-primary mt-3' onClick={handleSubmit}>Submit</button>
            {submitted && <div className='alert alert-success mt-3'>Course Enrolled</div>}
      </div>
    </div>
  )
}

export default EnrollEmployee
