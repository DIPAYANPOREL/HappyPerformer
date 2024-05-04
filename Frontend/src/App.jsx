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
import Attendance from "./Pages/Software/Attendance/Attendance";
import EmployeeDetails from "./Pages/Management/Attendance Management/EmployeeDetails";
import AttendanceDetails from "./Pages/Management/Attendance Management/AttendanceDetails";
import SocialPage from "./Pages/Software/Social/Social";
import AssignQuiz from "./Pages/Management/AssignQuiz";
import AllQuizzes from "./Components/Software Components/AssignQuiz/AllQuizzes";
import LeaveDashboard from "./Pages/Management/Leave Management/LeaveDashboard";
import LeaveDetails from "./Components/Software Components/LeaveManagement/LeaveDetails";
import ManageLeaveTypes from "./Pages/Management/Leave Management/ManageLeaveTypes";
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
          <Route path="/SocialPage" element={<SocialPage/>} />
          <Route path="/AssignQuiz" element={<AssignQuiz/>} />
          <Route path="/AllQuizzes" element={<AllQuizzes/>} />
          <Route path="/LeaveDashboard" element={<LeaveDashboard/>} />
          <Route path="/LeaveDetails" element={<LeaveDetails/>} />
          <Route path="/ManageLeaveTypes" element={<ManageLeaveTypes/>} />

       
        </Routes>
    </>
  );

}

export default App;
