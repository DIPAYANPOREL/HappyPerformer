import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Profile from "./Pages/Software/Profile/Profile";
import Login from "./Pages/Software/Login";
import PersonalInfo from "./Components/Software Components/Profile/PersonalInfo";
import EmergencyContact from "./Components/Software Components/Profile/EmergencyContact";
import FamilyInformation from "./Components/Software Components/Profile/FamilyInformation";
import Experience from "./Components/Software Components/Profile/Experience";
import EducationalInformation from "./Components/Software Components/Profile/EducationalInformation";
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
        </Routes>
    </>
  );

}

export default App;
