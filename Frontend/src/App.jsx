import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Attendance from "./Pages/Software/Attendance/Attendance";
import SopPolicies from "./Pages/Software/SopPolicies";
// import Profile from "./Pages/Software/Profile/Profile";
import Courses from "./Pages/Software/Courses";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/soppolicies" element={<SopPolicies />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/courses" element={<Courses />} />
        </Routes>
    </>
  );
}

export default App;
