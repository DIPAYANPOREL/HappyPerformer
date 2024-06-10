import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnrollEmployee = () => {
    const [course, setCourse] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const options = [
        { label: "Demo", value: 1 },
        { label: "JavaScript for Beginners", value: 2 },
        { label: "PHP Full Crash Course", value: 3 },
        { label: "HTML Full Crash Course", value: 4 },
        { label: "PHP for Newbies", value: 5 },
        { label: "New Course", value: 6 },
    ];

    const handleCourseSelect = (event) => {
        setCourse(event.target.value);
    }

    const handleEmailSelect = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        localStorage.setItem('course', course);
        localStorage.setItem('email', email);
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className='col-lg-6 col-md-8 col-sm-10 col-12 p-3 border rounded shadow'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <h2 className='text-center mb-4'>Enroll Employee</h2>
                                <label htmlFor="courseSelect" className="form-label">Course Title</label>
                                <select
                                    id="courseSelect"
                                    className='form-select'
                                    onChange={handleCourseSelect}
                                    value={course}
                                >
                                    <option value="">-- select a course --</option>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailSelect" className="form-label">Email ID</label>
                                <select
                                    id="emailSelect"
                                    className='form-select'
                                    onChange={handleEmailSelect}
                                    value={email}
                                >
                                    <option value="">-- select an email --</option>
                                    <option value="shawnpinto.salahkaar@gmail.com">shawnpinto.salahkaar@gmail.com</option>
                                    <option value="derekdesouza.salahkaar@gmail.com">derekdesouza.salahkaar@gmail.com</option>
                                    <option value="anuja123.salahkaar@gmail.com">anuja123.salahkaar@gmail.com</option>
                                    {/* Add more email options if needed */}
                                </select>
                            </div>
                            <div className="mb-3 d-flex justify-content-center flex-column align-items-center">
                                <button type="submit" className='btn btn-primary me-2'>Submit</button>
                                <Link to="/Table">
                                    <button className='btn btn-secondary' style={{ marginLeft: '10px' }}>View All Enrollments</button>
                                </Link>
                                {submitted && <div className='alert alert-success' style={{ marginTop: '30px' }}>Course Enrolled</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollEmployee;
