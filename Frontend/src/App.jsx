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
import EnrollEmployee from "./Pages/Management/EnrollEmployee";
import Profile from "./Pages/Software/AddDetails/Personaldetails";
import Attendance from "./Pages/Software/Attendance/Attendance";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Training from "./Pages/Training";
import FAQ from "./Pages/Software/DashBoard/FAQ";
import LoanPayments from "./Pages/Software/DashBoard/LoanPayments";
import Quiz from "./Pages/Software/DashBoard/Quiz";
import EmployeeMaster from "./Pages/Software/EmployeeMaster/EmployeeMaster";
import SopForm from "./Pages/Software/EmployeesJobs/SopForm";
import { default as Login, default as Resign } from "./Pages/Software/Login";
import PHPTutorials from "./Pages/Software/PHPTutorials/PHPTutorials";
import Setting from "./Pages/Software/Profile/Settings/Setting";
import WorkExperience from "./Pages/Software/AddDetails/WorkExperience"
import IdentityDetials from "./Pages/Software/AddDetails/IdentityDetials";
import BankDetails from "./Pages/Software/AddDetails/BankDetails";
import CreateCase1 from "./Pages/Software/Case Management/CreateCase1";
import DependentDetails from "./Pages/Software/AddDetails/DependentDetails";
import JobDetails from "./Pages/Software/AddDetails/JobDetails";
import PersonalDetails from "./Pages/Software/AddDetails/Personaldetails";
import QualificationDetails from "./Pages/Software/AddDetails/QualificationDetails";
import FamilyDetails from "./Pages/Software/AddDetails/FamilyDetails";
import ITdeclaration from "./Pages/ITdeclaration";
import LeaveEncashment from "./Pages/Software/Payroll Management/LeaveEncashment";
import OffcyclePayment from "./Pages/Software/Payroll Management/OffcyclePayment";
import BulkUpload from "./Pages/Management/BulkUpload";
import ViewEncashment from "./Pages/Software/Payroll Management/ViewEncashment";
import MyCase from "./Pages/Software/Case Management/MyCase";
import DelUpdateRegistry from "./Pages/Software/RegisterEmployee/DelUpdateRegistry";
import HoldSalary from "./Pages/Software/Payroll Management/HoldSalary";
import Poi from "./Pages/Software/Payroll Management/Poi";
import AttritionReport from "./Pages/Management/AttritionReport";
import SideBar from "./Components/Software Components/Dashboard/SideBar";
function App() {
  return (
    <>
      <Routes>
        {/* Landing Pages */}
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
        <Route path="/workexperience" element={<WorkExperience/>} />
        <Route path="/identitydetails" element={<IdentityDetials/>} />
        <Route path="/bankdetails" element={<BankDetails/>} />
        <Route path="/createcase1" element={<CreateCase1/>} />
        <Route path="/dependentdetails" element={<DependentDetails/>} />
        <Route path="/jobdetails" element={<JobDetails/>} />
        <Route path="/personaldetails" element={<PersonalDetails/>} />
        <Route path="/qualificationdetails" element={<QualificationDetails/>} />
        <Route path="/familydetails" element={<FamilyDetails/>} />
        <Route path="/itdeclaration" element={<ITdeclaration/>} />
        <Route path="/leaveencashment" element={<LeaveEncashment/>} />
        <Route path="/offcyclepayment" element={<OffcyclePayment/>} />
        <Route path="/bulkupload" element={<BulkUpload/>} />
        <Route path="/viewencashment" element={<ViewEncashment/>} />
        <Route path="/mycase" element={<MyCase/>} />
        <Route path="/delupdateregistry" element={<DelUpdateRegistry/>} />
        <Route path="/holdsalary" element={<HoldSalary/>} />
        <Route path="/poi" element={<Poi/>} />
        <Route path="/attritionreport" element={<AttritionReport/>} />
        <Route path="/sidebar" element={<SideBar/>} />
      </Routes>
    </>
  );
}

export default App;
