import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import CreateCase from "./Pages/Software/CaseManagement/CreateCase";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";

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
        <Route path="/register-employee" element={<NewEmployeeRegistry />} />
        <Route path="/create-case" element={<CreateCase />} />
      </Routes>
    </>
  );
}

export default App;
