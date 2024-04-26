import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Attendance from "./Pages/Software/Attendance/Attendance";
import SopPolicies from "./Pages/Software/Sop&Policies/SopPolicies";
// import Profile from "./Pages/Software/Profile/Profile";
import Courses from "./Pages/Software/Courses/Add_Courses";
import Add_Media_Content from "./Pages/Software/Courses/Add_Media_Content";
import Upload_Media from "./Pages/Software/Courses/Upload_Media";
import Update_Delete_Media from "./Pages/Software/Courses/Update_Delete_Media";

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
          <Route path="/add_media" element={<Add_Media_Content />} />
          <Route path="/upload_media" element={<Upload_Media />} />
          <Route path="/update_delete_media" element={<Update_Delete_Media />} />
        </Routes>
    </>
  );
}

export default App;
