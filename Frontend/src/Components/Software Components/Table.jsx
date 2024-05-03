import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
    <table className='table'>
        <thead>
            <tr>
                <th className="expand">Course-Title</th>
                <th className="expand">Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Demo</td>
                <td>anuja123.salahkaar@gmail.com</td>
                <td>
                    <span className="actions">
                        <BsFillTrashFill className="delete-btn"/>
                        <BsFillPencilFill/>
                    </span>
                </td>
            </tr>
            <tr>
                <td>JavaScript for Beginners </td>
                <td>derek77.salahkaar@gmail.com</td>
                <td>
                    <span className="actions">
                    <BsFillTrashFill className="delete-btn"/>
                    <BsFillPencilFill/>
                    </span>
                </td>
            </tr>
            <tr>
                <td>HTML Full Crash Course</td>
                <td>shawn22.salahkaar@gmail.com</td>
                <td>
                    <span className="actions">
                    <BsFillTrashFill className="delete-btn"/>
                    <BsFillPencilFill/>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  );
};
export default Table;