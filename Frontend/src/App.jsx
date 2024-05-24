import { Route, Routes } from "react-router-dom";
// Landing Pages
import AboutUs from "./Pages/Landing Page/AboutUs";
import ContactUs from "./Pages/Landing Page/ContactUs";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import PrivacyPolicy from "./Pages/Landing Page/PrivacyPolicy";
import TermsAndConditions from "./Pages/Landing Page/TermsAndConditions";
import Update_Delete_Media from "./Pages/Software/Courses/Update_Delete_Media";
import Update_Media from "./Pages/Software/Courses/Update_Media";
// Management
// Cases
import AllCases from "./Pages/Software/CaseManagement/AllCases";
import CreateCase from "./Pages/Software/CaseManagement/CreateCase";
// BankTransfer
import EmployeeDetails from "./Pages/Management/Attendance Management/EmployeeDetails";
import BankTransferDetails from "./Pages/Management/BankTransfers/BankTransferDetails";
import BankTransferPayout from "./Pages/Management/BankTransfers/BankTransferPayout";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Login from "./Pages/Software/Login";

import SopPolicies from "./Pages/Software/Sop&Policies/SopPolicies";

// Courses
import Add_Courses from "./Pages/Software/Courses/Add_Courses";
import Add_Media_Content from "./Pages/Software/Courses/Add_Media_Content";
import Upload_Media from "./Pages/Software/Courses/Upload_Media";
import NewEmployeeRegistry from "./Pages/Software/RegisterEmployee/NewEmployeeRegistry";

function App() {
  return (
    <>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/meettheteam" element={<MeetTheTeam />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        {/* Management */}

        {/* BankTransfers */}
        <Route path="/banktransferdetails" element={<BankTransferDetails />} />
        <Route path="/banktransferpayout" element={<BankTransferPayout />} />
        <Route path="/UpdateMedia/:course_id" element={<Update_Media />} />
        <Route path="/updatedeletemedia/" element={<Update_Delete_Media />} />
        <Route path="/employeedetails/" element={<EmployeeDetails />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/Dashboard/" element={<Dashboard />} />

        {/* Cases */}
        <Route path="allcases" element={<AllCases />} />
        <Route path="createcase" element={<CreateCase />} />

        {/* SOP and JDS */}
        <Route path="/sop" element={<SopPolicies />} />

        {/* Courses */}
        <Route path="/addcourse" element={<Add_Courses />} />
        <Route path="/uploadmedia" element={<Upload_Media />} />
        <Route path="/addmedia" element={<Add_Media_Content />} />
        <Route path="/updelmedia" element={<Update_Delete_Media />} />
        <Route path="/updatemedia" element={<Update_Media />} />

        {/* Employees */}
        <Route path="/newemp" element={<NewEmployeeRegistry />} />

        {/* Case Management */}
        <Route path="/createcase" element={<CreateCase />} />
      </Routes>
    </>
  );
}

export default App;
