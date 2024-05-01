import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import CreateCase from "./Pages/Software/CaseManagement/CreateCase";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Profile from "./Pages/Software/Profile/Profile";
import Login from "./Pages/Software/Login";
import PersonalInfo from "./Components/Software Components/Profile/PersonalInfo";
import EmergencyContact from "./Components/Software Components/Profile/EmergencyContact";
import FamilyInformation from "./Components/Software Components/Profile/FamilyInformation";
import Experience from "./Components/Software Components/Profile/Experience";
import EducationalInformation from "./Components/Software Components/Profile/EducationalInformation";
import Setting from "./Pages/Software/Profile/Settings/Setting";
import Training from "./Pages/Software/Training";
import EnrollEmployee from "./Pages/Management/EnrollEmployee";
import Table from "./Components/Software Components/Table";
import ApplyforLeave from "./Pages/Leave Management/ApplyforLeave";
import LeaveHistory from "./Pages/Leave Management/LeaveHistory";
import SopForm from "./Pages/Software/EmployeesJobs/SopForm";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/EmergencyContact" element={<EmergencyContact/>} />
          <Route path="/PersonalInfo" element={<PersonalInfo/>} />
          <Route path="/FamilyInformation" element={<FamilyInformation/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/EducationalInformation" element={<EducationalInformation/>} />
          <Route path="/Setting" element={<Setting/>} />
          <Route path="/Training" element={<Training/>} />
          <Route path="/EnrollEmployee" element={<EnrollEmployee/>} />
          <Route path="/Table" element={<Table/>} />
          <Route path="/ApplyforLeave" element={<ApplyforLeave/>} />
          <Route path="/LeaveHistory" element={<LeaveHistory/>} />
          <Route path="/SopForm" element={<SopForm/>} />
       
        </Routes>
    </>
  );

}

export default App;
