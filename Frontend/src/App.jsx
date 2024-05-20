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
// BankTransfer
import BankTransferDetails from "./Pages/Management/BankTransfers/BankTransferDetails";
import BankTransferPayout from "./Pages/Management/BankTransfers/BankTransferPayout";
import EmployeeDetails from "./Pages/Management/Attendance Management/EmployeeDetails"

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
      </Routes>
    </>
  );
}

export default App;
