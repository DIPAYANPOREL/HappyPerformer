import { Route, Routes } from "react-router-dom";
import Register from "../src/Pages/Software/Register";
import AllQuizzes from "./Components/Software Components/AssignQuiz/AllQuizzes";
import Edit from "./Components/Software Components/CustomForms/Edit";
import Responses from "./Components/Software Components/CustomForms/Responses";
import LeaveDetails from "./Components/Software Components/LeaveManagement/LeaveDetails";
import EducationalInformation from "./Components/Software Components/Profile/EducationalInformation";
import EmergencyContact from "./Components/Software Components/Profile/EmergencyContact";
import Experience from "./Components/Software Components/Profile/Experience";
import FamilyInformation from "./Components/Software Components/Profile/FamilyInformation";
import PersonalInfo from "./Components/Software Components/Profile/PersonalInfo";
import Table from "./Components/Software Components/Table";
import AboutUs from "./Pages/Landing Page/AboutUs";
import ContactUs from "./Pages/Landing Page/ContactUs";
import Home from "./Pages/Landing Page/Home";
import MeetTheTeam from "./Pages/Landing Page/MeetTheTeam";
import TermsAndConditions from "./Pages/Landing Page/TermsAndConditions";
import ApplyforLeave from "./Pages/Leave Management/ApplyforLeave";
import LeaveHistory from "./Pages/Leave Management/LeaveHistory";
import AllEmployeePerformances from "./Pages/Management/AllEmployeePerformances";
import AssignQuiz from "./Pages/Management/AssignQuiz";
import AttendanceDetails from "./Pages/Management/Attendance Management/AttendanceDetails";
import EmployeeDetails from "./Pages/Management/Attendance Management/EmployeeDetails";
import BankTransfer from "./Pages/Management/BankTransfers/BankTransfer";
import BankTransferDetails from "./Pages/Management/BankTransfers/BankTransferDetails";
import BankTransferPayout from "./Pages/Management/BankTransfers/BankTransferPayout";
import CustomForms from "./Pages/Management/CustomForms";
import EnrollEmployee from "./Pages/Management/EnrollEmployee";
import AllLeaves from "./Pages/Management/Leave Management/AllLeaves";
import ApprovedLeaves from "./Pages/Management/Leave Management/ApprovedLeaves";
import LeaveDashboard from "./Pages/Management/Leave Management/LeaveDashboard";
import ManageLeaveTypes from "./Pages/Management/Leave Management/ManageLeaveTypes";
import PendingLeaves from "./Pages/Management/Leave Management/PendingLeaves";
import RejectedLeaves from "./Pages/Management/Leave Management/RejectedLeaves";
import MyPerformance from "./Pages/Management/MyPerformance";
import HomeSalary from "./Pages/Management/PayrollManagement/HomeSalary";
import Resignations from "./Pages/Management/Resignations/Resignations";
import Attendance from "./Pages/Software/Attendance/Attendance";
import AllCases from "./Pages/Software/CaseManagement/AllCases";
import CreateCase from "./Pages/Software/CaseManagement/CreateCase";
import AddCourses from "./Pages/Software/Courses/Add_Courses";
import AddMediaContent from "./Pages/Software/Courses/Add_Media_Content";
import UpdateDeleteMedia from "./Pages/Software/Courses/Update_Delete_Media";
import UpdateMedia from "./Pages/Software/Courses/Update_Media";
import UploadMedia from "./Pages/Software/Courses/Upload_Media";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import FAQ from "./Pages/Software/DashBoard/FAQ";
import LoanPayments from "./Pages/Software/DashBoard/LoanPayments";
import Quiz from "./Pages/Software/DashBoard/Quiz";
import EmployeeMaster from "./Pages/Software/EmployeeMaster/EmployeeMaster";
import SopForm from "./Pages/Software/EmployeesJobs/SopForm";
import Login from "./Pages/Software/Login";
import PHPTutorials from "./Pages/Software/PHPTutorials/PHPTutorials";
import Pricing from "./Pages/Software/Pricing";
import Profile from "./Pages/Software/Profile/Profile";
import Setting from "./Pages/Software/Profile/Settings/Setting";
import Resign from "./Pages/Software/Resign/Resign";
import SocialPage from "./Pages/Software/Social/Social";
import SopAndPolicies from "./Pages/Software/Sop&Policies/SopPolicies";
import ToDoList from "./Pages/Software/ToDoList";
import CustomLetters from "./Pages/Management/CustomLetters";
import View from "./Components/CustomLetters/View";
import Training from "./Pages/Training";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/EmergencyContact" element={<EmergencyContact />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/FamilyInformation" element={<FamilyInformation />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/EducationalInformation" element={<EducationalInformation />} />
        <Route path="/soppolicies" element={<SopAndPolicies />} />
        <Route path="/AddCourses" element={<AddCourses />} />
        <Route path="/AddMediaContent" element={<AddMediaContent />} />
        <Route path="/UploadMedia/:course_id" element={<UploadMedia />} />
        <Route path="/UpdateDeleteMedia" element={<UpdateDeleteMedia />} />
        <Route path="/UpdateMedia/:course_id" element={<UpdateMedia />} />
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
        <Route path="/AllLeaves" element={<AllLeaves />} />
        <Route path="/PendingLeaves" element={<PendingLeaves />} />
        <Route path="/ApprovedLeaves" element={<ApprovedLeaves />} />
        <Route path="/RejectedLeaves" element={<RejectedLeaves />} />
        <Route path="/Resignations" element={<Resignations />} />
        <Route path="/AllCases" element={<AllCases />} />
        <Route path="/AllEmployeePerformances" element={<AllEmployeePerformances />} />
        <Route path="/AllQuizzes" element={<AllQuizzes />} />
        <Route path="/MyPerformance" element={<MyPerformance />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/CustomForms" element={<CustomForms />} />
        <Route path="/Responses" element={<Responses />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/CustomLetters" element={<CustomLetters />} />
        <Route path="/View" element={<View />} />
        <Route path="/banktransfer" element={<BankTransfer />} />
        <Route path="/banktransferdetails" element={<BankTransferDetails />} />
        <Route path="/banktransferpayout" element={<BankTransferPayout />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/Employee-master" element={<EmployeeMaster />} />
        <Route path="/phptutorials" element={<PHPTutorials />} />
        <Route path="/loanpayments" element={<LoanPayments />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/AssignQuiz" element={<AssignQuiz />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Resign" element={<Resign />} />
        <Route path="/SocialPage" element={<SocialPage />} />
        <Route path="/LeaveDashboard" element={<LeaveDashboard />} />
        <Route path="/LeaveDetails" element={<LeaveDetails />} />
        <Route path="/ManageLeaveTypes" element={<ManageLeaveTypes />} />
        <Route path="/createcase" element={<CreateCase />} />
        <Route path="/MyPerformance" element={<MyPerformance />} />
        <Route path="/banktransfer" element={<BankTransfer />} />
        <Route path="/banktransferdetails" element={<BankTransferDetails />} />
        <Route path="/banktransferpayout" element={<BankTransferPayout />} />
        <Route path="/homesalary" element={<HomeSalary />} />
      </Routes>
    </>
  );
}

export default App;
