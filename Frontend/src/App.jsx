import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import InfoCard from "./Components/Software Components/Dashboard/InfoCard";
import Personalinfo from "./Components/Software Components/Dashboard/Personalinfo";
import SettingsPage from "./Pages/SettingsPage";
import Training from "./Pages/Training";
import EnrollEmployee from "./Pages/EnrollEmployee";
import Modal from "./Components/Modal";
import CreateCase from "./Pages/Software/AddDetails/CreateCase";
import JobDetails from "./Pages/Software/AddDetails/JobDetails";
import BankDetails from "./Pages/Software/AddDetails/BankDetails";
import WorkExperience from "./Pages/Software/AddDetails/WorkExperience";
import Profile from "./Pages/Software/AddDetails/Profile";
import DependentDetails from "./Pages/Software/AddDetails/DependentDetails";
import IdentityDetials from "./Pages/Software/AddDetails/IdentityDetials";


function App() {

//   const [modalOpen, setModalOpen] = useState(false)

//   const [rows, setRows] = useState ([
//     {coursetitle:"Demo", email:"anuja@gmail.com"},
//     {coursetitle:"JavaScript for Beginners", email:"xyz.salahkaar@gmail.com"},
//     {coursetitle:"PHP Course", email:"abc123@gmail.com"}
//   ]);

//   const [rowToEdit, setRowToEdit] = useState(null);

//   const handleDeleteRow = (targetIndex) =>{
//     setRows(rows.filter((_, idx) => idx !== targetIndex));
//   };

//   const handleEditRow = (idx) => {
//     setRowToEdit(idx);
//     setModalOpen(true);
//   }
//   const handleSubmit = (newRow) => {
//     rowToEdit === null 
//     ? setRows([...rows, newRow])
//     : setRows(
//       rows.map((currRow, idx) => {
//       if(idx !== rowToEdit ) return  currRow;
//       return newRow;
//     })
//   );
//  };

  return (
    <>
       { <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/infocard" element={<InfoCard />} />
          <Route path="/personalinfo" element={<Personalinfo/>} />
          <Route path="/settingspage" element={<SettingsPage/>} />
          <Route path="/training" element={<Training/>} />
          <Route path="/enrollemployee" element={<EnrollEmployee/>} />
          <Route path="/modal" element={<Modal/>} />
          <Route path="/createcase" element={<CreateCase/>} />
          <Route path="/jobdetails" element={<JobDetails/>} />
          <Route path="/bankdetails" element={<BankDetails/>} />
          <Route path="/workexperience" element={<WorkExperience/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/dependentdetails" element={<DependentDetails/>} />
          <Route path="/identitydetails" element={<IdentityDetials/>} />
        </Routes> }

{/*         
        <div className="Demo">
          <Table rows= {rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        <EnrolEmployeeEdit/>
        <button className="btn" onClick={() => setModalOpen(true)}>
          Add
        </button>
         {modalOpen && (
         <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
        </div> */}
    </>
  );
}

export default App;
