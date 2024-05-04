import React from 'react'
const EnrollEmployeeDisplay = () => {
  return (
    <div>
        Information
        <table className='table'>
            <thead>
                <tr>
                    <th>Course Title</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Demo</td>
                    <td>anuja123.salahkaar@gmail.com</td>
                    <td>
                        <span>Delete</span>
                    </td>
                </tr>
                <tr>
                    <td>JavaScript for Beginners </td>
                    <td>derek07.salahkaar@gmail.com</td>
                    <td>
                        <span>Delete</span>
                    </td>
                </tr>
                <tr>
                    <td>HTML Full Crash Course</td>
                    <td>shawn22.salahkaar@gmail.com</td>
                    <td>
                        <span>Delete</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EnrollEmployeeDisplay
