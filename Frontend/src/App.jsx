import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Landing Page/Home";
import SideBar from "./Components/Software Components/Dashboard/SideBar";
import LeaveEncashment from "./Pages/Software/Payroll Management/LeaveEncashment";
import CreateCase1 from "./Pages/Software/Case Management/CreateCase1";
import IdentityDetials from "./Pages/Software/AddDetails/IdentityDetials";
import QualificationDetails from "./Pages/Software/AddDetails/QualificationDetails";
import FamilyDetails from "./Pages/Software/AddDetails/FamilyDetails";
import DelUpdateRegistry from "./Pages/Software/RegisterEmployee/DelUpdateRegistry";
import BulkUpload from "./Pages/Management/BulkUpload";
import ViewEncashment from "./Pages/Software/Payroll Management/ViewEncashment";
import OffcyclePayment from "./Pages/Software/Payroll Management/OffcyclePayment";
import Poi from "./Pages/Software/Payroll Management/Poi";
import HoldSalary from "./Pages/Software/Payroll Management/HoldSalary";
import Training from "./Pages/Software/Training";
import AllCases from "./Pages/Software/CaseManagement/AllCases";
import BankDetails from "./Pages/Software/AddDetails/BankDetails";
import DependentDetails from "./Pages/Software/AddDetails/DependentDetails";
import JobDetails from "./Pages/Software/AddDetails/JobDetails";
import Personaldetails from "./Pages/Software/AddDetails/Personaldetails";
import WorkExperience from "./Pages/Software/AddDetails/WorkExperience";
import ITdeclaration from "./Pages/ITdeclaration";

// Landing Pages

function App() {
  return (
    <>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Home />} />
        <Route path="sidebar" element={<SideBar/>} />
        <Route path="leaveencashment" element={<LeaveEncashment/>} />
        <Route path="createcase1" element={<CreateCase1/>} />
        <Route path="identitydetails" element={<IdentityDetials/>} />
        <Route path="qualificationdetails" element={<QualificationDetails/>} />
        <Route path="familydetails" element={<FamilyDetails/>} />
        <Route path="delupdateregistry" element={<DelUpdateRegistry/>} />
        <Route path="bulkupload" element={<BulkUpload/>} />
        <Route path="viewencashment" element={<ViewEncashment/>} />
        <Route path="offcyclepayment" element={<OffcyclePayment/>} />
        <Route path="poi" element={<Poi/>} />
        <Route path="holdsalary" element={<HoldSalary/>} />
        <Route path="training" element={<Training/>} />
        <Route path="allcases" element={<AllCases/>} />
        <Route path="bankdetails" element={<BankDetails/>} />
        <Route path="dependentdetails" element={<DependentDetails/>} />
        <Route path="jobdetails" element={<JobDetails/>} />
        <Route path="personaldetails" element={<Personaldetails/>} />
        <Route path="workexperience" element={<WorkExperience/>} />
        <Route path="itdeclaration" element={<ITdeclaration/>} />
      </Routes>
    </>
  );
}

export default App;
