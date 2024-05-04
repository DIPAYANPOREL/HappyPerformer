import React from 'react'
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs"

const EnrolEmployeeEdit = ({rows, deleteRow, editRow}) => {
  return (
    <div className='tablewrapper'>
      <table className='tables'>
            <thead>
                <tr>
                    <th className='expand1'>Course Title</th>
                    <th className='expand2'>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row ,idx) => {
                        return (
                        <tr key={idx}>
                            <td>{row.coursetitle}</td>
                            <td className='expand'>{row.email}
                            </td>
                            <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn' onClick={() => deleteRow(idx)}/>
                            <BsFillPencilFill onClick={() => editRow(idx)}/>
                        </span>
                       </td>
                    </tr>
                        )
                    })
                }
                <tr>
                    <td>Demo</td>
                    <td>anuja123.salahkaar@gmail.com</td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn'/>
                            <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>JavaScript for Beginners </td>
                    <td>derek07.salahkaar@gmail.com</td>
                    <td>
                        <span className='actions'>
                        <BsFillTrashFill className='delete-btn'/>
                        <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>HTML Full Crash Course</td>
                    <td>shawn22.salahkaar@gmail.com</td>
                    <td>
                        <span className='actions'>
                        <BsFillTrashFill className='delete-btn'/>
                        <BsFillPencilFill/>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default EnrolEmployeeEdit
