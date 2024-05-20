import { Route, Routes } from "react-router-dom";
// Landing Pages
import AboutUs from "./Pages/Landing Page/AboutUs";
import ContactUs from "./Pages/Landing Page/ContactUs";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import PrivacyPolicy from "./Pages/Landing Page/PrivacyPolicy";
import TermsAndConditions from "./Pages/Landing Page/TermsAndConditions";

// Management
// BankTransfer
import BankTransferDetails from "./Pages/Management/BankTransfers/BankTransferDetails";
import BankTransferPayout from "./Pages/Management/BankTransfers/BankTransferPayout";

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
      </Routes>
    </>
  );
}

export default App;
