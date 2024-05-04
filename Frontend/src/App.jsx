import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../src/Pages/Software/Register";
import EducationalInformation from "./Components/Software Components/Profile/EducationalInformation";
import EmergencyContact from "./Components/Software Components/Profile/EmergencyContact";
import Experience from "./Components/Software Components/Profile/Experience";
import FamilyInformation from "./Components/Software Components/Profile/FamilyInformation";
import PersonalInfo from "./Components/Software Components/Profile/PersonalInfo";
import Table from "./Components/Software Components/Table";
import AboutUs from "./Pages/Landing Page/AboutUs";
import ContactUs from "./Pages/Landing Page/ContactUs";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import TermsAndConditions from "./Pages/Landing Page/TermsAndConditions";
import ApplyforLeave from "./Pages/Leave Management/ApplyforLeave";
import LeaveHistory from "./Pages/Leave Management/LeaveHistory";
import AttendanceDetails from "./Pages/Management/Attendance Management/AttendanceDetails";
import EmployeeDetails from "./Pages/Management/Attendance Management/EmployeeDetails";
import EnrollEmployee from "./Pages/Management/EnrollEmployee";
import Attendance from "./Pages/Software/Attendance/Attendance";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import FAQ from "./Pages/Software/DashBoard/FAQ";
import LoanPayments from "./Pages/Software/DashBoard/LoanPayments";
import Quiz from "./Pages/Software/DashBoard/Quiz";
import EmployeeMaster from "./Pages/Software/EmployeeMaster/EmployeeMaster";
import SopForm from "./Pages/Software/EmployeesJobs/SopForm";
import { default as Login, default as Resign } from "./Pages/Software/Login";
import PHPTutorials from "./Pages/Software/PHPTutorials/PHPTutorials";
import Profile from "./Pages/Software/Profile/Profile";
import Setting from "./Pages/Software/Profile/Settings/Setting";
import Training from "./Pages/Software/Training";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-master" element={<EmployeeMaster />} />
        <Route path="/resign" element={<Resign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phptutorials" element={<PHPTutorials />} />
        <Route path="/loanpayments" element={<LoanPayments />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/EmergencyContact" element={<EmergencyContact />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/FamilyInformation" element={<FamilyInformation />} />
        <Route path="/Experience" element={<Experience />} />
        <Route
          path="/EducationalInformation"
          element={<EducationalInformation />}
        />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/EnrollEmployee" element={<EnrollEmployee />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/ApplyforLeave" element={<ApplyforLeave />} />
        <Route path="/LeaveHistory" element={<LeaveHistory />} />
        <Route path="/SopForm" element={<SopForm />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/EmployeeDetails" element={<EmployeeDetails />} />
        <Route path="/AttendanceDetails" element={<AttendanceDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
