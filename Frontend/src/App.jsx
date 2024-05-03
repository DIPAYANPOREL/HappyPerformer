import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import CreateCase from "./Pages/Software/CaseManagement/CreateCase";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
<<<<<<< HEAD
import EmployeeMaster from "./Pages/Software/EmployeeMaster/EmployeeMaster";
import PHPTutorials from "./Pages/Software/PHPTutorials/PHPTutorials";
import LoanPayments from "./Pages/Software/DashBoard/LoanPayments";
import { Quiz } from "./Pages/Software/DashBoard/Quiz";
import { FAQ } from "./Pages/Software/DashBoard/FAQ";
import { default as Login, default as Resign } from "./Pages/Software/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-master" element={<EmployeeMaster />} />
        <Route path="/resign" element={<Resign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phptutorials" element={<PHPTutorials />} />
        <Route path="/loanpayments" element={<LoanPayments />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
=======
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
import Attendance from "./Pages/Software/Attendance/Attendance";
import EmployeeDetails from "./Pages/Management/Attendance Management/EmployeeDetails";
import AttendanceDetails from "./Pages/Management/Attendance Management/AttendanceDetails";
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
          <Route path="/Attendance" element={<Attendance/>} />
          <Route path="/EmployeeDetails" element={<EmployeeDetails/>} />
          <Route path="/AttendanceDetails" element={<AttendanceDetails/>} />
       
        </Routes>
>>>>>>> 2b6bc4f0a2250f1b43c55e71efff9474c1329baf
    </>
  );

}

export default App;
