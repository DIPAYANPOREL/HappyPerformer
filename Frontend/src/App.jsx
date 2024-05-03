import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
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
    </>
  );
}

export default App;
