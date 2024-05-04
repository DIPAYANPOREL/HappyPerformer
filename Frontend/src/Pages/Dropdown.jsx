import React from 'react'
// import Footer from "../../Components/Software Components/Footer.jsx";

const Dropdown = () => {
  return (
    <div className='dropdown'>
        <div className='dropdown-btn'>--select a course--</div>
        <div className="dropdown-content">
        <div className="dropdown-item">
            React
        </div>
        <div className="dropdown-item">
        JavaScript for Beginners
        </div>
        <div className="dropdown-item">
        PHP Full Crash Course
        </div>
        <div className="dropdown-item">
        HTML Full Crash Course
        </div>
        </div>
    </div>
  )
}

export default Dropdown
