import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
                  <td>ABC123.salahkaar@gmail.com</td>
                  <td>
                      <span className="actions">
                          <Link to="/del">
                              <BsFillTrashFill className="delete-btn"/>
                          </Link>
                          <Link to="/ed">
                              <BsFillPencilFill/>
                          </Link>
                      </span>
                  </td>
              </tr>
              <tr>
                  <td>JavaScript for Beginners </td>
                  <td>ABC123.salahkaar@gmail.com</td>
                  <td>
                      <span className="actions">
                          <Link to="/delete">
                              <BsFillTrashFill className="delete-btn"/>
                          </Link>
                          <Link to="/edit">
                              <BsFillPencilFill/>
                          </Link>
                      </span>
                  </td>
              </tr>
              <tr>
                  <td>HTML Full Crash Course</td>
                  <td>shawn22.salahkaar@gmail.com</td>
                  <td>
                      <span className="actions">
                          <Link to="/delete">
                              <BsFillTrashFill className="delete-btn"/>
                          </Link>
                          <Link to="/edit">
                              <BsFillPencilFill/>
                          </Link>
                      </span>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  );
};

export default Table;
