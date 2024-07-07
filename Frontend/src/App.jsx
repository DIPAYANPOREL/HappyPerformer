import { Route, Routes } from "react-router-dom";
// Landing Pages
import AddSalary from "./Components/Software Components/PayRoll/AddSalary";
import Home from "./Pages/HappyPerformerMain/Home";
import BankTransfer from "./Pages/Management/BankTransfers/BankTransfer";
import BankTransferDetails from "./Pages/Management/BankTransfers/BankTransferDetails";
import BankTransferPayout from "./Pages/Management/BankTransfers/BankTransferPayout";
import CashChequeTransfer from "./Pages/Management/PayrollManagement/CashChequeTransfer";
import HomeSalary from "./Pages/Management/PayrollManagement/HomeSalary";
import Attendance from "./Pages/Software/Attendance/Attendance";
import CreateCase from "./Pages/Software/CaseManagement/CreateCase";
import Add_Courses from "./Pages/Software/Courses/Add_Courses";
import Add_Media_Content from "./Pages/Software/Courses/Add_Media_Content";
import Update_Delete_Media from "./Pages/Software/Courses/Update_Delete_Media";
import Update_Media from "./Pages/Software/Courses/Update_Media";
import Upload_Media from "./Pages/Software/Courses/Upload_Media";
// import EmployeeMaster from "./Pages/Software/EmployeeMaster/EmployeeMaster";
import HomeSal from "./Components/Software Components/PayRoll/HomeSal";
import EmployeeForm from "./Pages/EmployeeForm";
import ITdeclaration from "./Pages/ITdeclaration";
import ApplyforLeave from "./Pages/Leave Management/ApplyforLeave";
import LeaveHistory from "./Pages/Leave Management/LeaveHistory";
import Letters from "./Pages/Letters";
import AllEmployeePerformance from "./Pages/Management/AllEmployeePerformances";
import AssignQuiz from "./Pages/Management/AssignQuiz";
import CustomForms from "./Pages/Management/CustomForms";
import EnrollEmployees from "./Pages/Management/EnrollEmployees";
import FAQView from "./Pages/Management/FAQView";
import AllLeaves from "./Pages/Management/Leave Management/AllLeaves";
import LeaveDashboard from "./Pages/Management/Leave Management/LeaveDashboard";
import LeaveDetails from "./Pages/Management/Leave Management/LeaveDetails";
import ManageLeaveTypes from "./Pages/Management/Leave Management/ManageLeaveTypes";
import MyPerformance from "./Pages/Management/MyPerformance";
import AdhocPayments from "./Pages/Management/PayrollManagement/AdhocPayments";
import ReportingForm from "./Pages/Management/ReportingForm";
import Resignation from "./Pages/Management/Resignations/Resignations";
import SettingsPage from "./Pages/SettingsPage";
import BankDetails from "./Pages/Software/AddDetails/BankDetails";
import DependentDetails from "./Pages/Software/AddDetails/DependentDetails";
import FamilyDetails from "./Pages/Software/AddDetails/FamilyDetails";
import IdentityDetails from "./Pages/Software/AddDetails/IdentityDetails";
import JobDetails from "./Pages/Software/AddDetails/JobDetails";
import Personaldetails from "./Pages/Software/AddDetails/Personaldetails";
import QualificationDetails from "./Pages/Software/AddDetails/QualificationDetails";
import WorkExperience from "./Pages/Software/AddDetails/WorkExperience";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Faq from "./Pages/Software/DashBoard/FAQ";
import LoanPayments from "./Pages/Software/DashBoard/LoanPayments";
import Quiz from "./Pages/Software/DashBoard/Quiz";
import EnrolEmployeeEdit from "./Pages/Software/EnrolEmployeeEdit";
import AddExpense from "./Pages/Software/ExpenseManagements/Addexpense";
import ExpenseReports from "./Pages/Software/ExpenseManagements/Expensereports";
import ManageExpenses from "./Pages/Software/ExpenseManagements/ManageExpenses";
import KRA from "./Pages/Software/KRA/KRA";
import Login from "./Pages/Software/Login";
import PHPTutorials from "./Pages/Software/PHPTutorials/PHPTutorials";
import Pricing from "./Pages/Software/Pricing";
import Register from "./Pages/Software/Register";
import DelUpdateRegistry from "./Pages/Software/RegisterEmployee/DelUpdateRegistry";
import NewEmployeeRegistry from "./Pages/Software/RegisterEmployee/NewEmployeeRegistry";
import Resign from "./Pages/Software/Resign/Resign";
import Social from "./Pages/Software/Social/Social";
import SopPolicies from "./Pages/Software/Sop&Policies/SopPolicies";
import ToDoList from "./Pages/Software/ToDoList";
import Training from "./Pages/Training";
import SopForm from "./Pages/Software/Sop&Policies/SopForm";
import ManagerRating from "./Pages/Software/ManagerRating";
import JDForm from "./Pages/Software/JDForm";


function App() {
  return (
    <Routes>
      {/* Landing Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
      {/* Software */}
      {/* Common */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/social" element={<Social />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="todo" element={<ToDoList />} />
      <Route path="/kra" element={<KRA />} />
      {/* SOP */}
      <Route path="/sop" element={<SopPolicies />} />
      <Route path="/forms" element={<EmployeeForm />} />
      <Route path="/letters" element={<Letters />} />
      <Route path="/allfaq" element={<Faq />} />
      <Route path="/training" element={<Training />} />
      {/* PHP Tuts */}
      <Route path="/phptuts" element={<PHPTutorials />} />

      <Route path="/markattendance" element={<Attendance />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/myperformance" element={<MyPerformance />} />

      {/* Leave */}
      <Route path="/applyforeave" element={<ApplyforLeave />} />
      <Route path="/leavehistory" element={<LeaveHistory />} />

      {/* IT DEC */}
      <Route path="/itdeclaration" element={<ITdeclaration />} />

      {/* Add Details */}
      <Route path="/personaldetails" element={<Personaldetails />} />
      <Route path="/leavedetails" element={<LeaveDetails />} />
      <Route path="/jobdetails" element={<JobDetails />} />
      <Route path="/familydetails" element={<FamilyDetails />} />
      <Route path="/Identitydetails" element={<IdentityDetails />} />
      <Route path="/qualificationdetails" element={<QualificationDetails />} />
      <Route path="/workexperience" element={<WorkExperience />} />
      <Route path="/bankdetails" element={<BankDetails />} />
      <Route path="/dependentdetails" element={<DependentDetails />} />

      <Route path="/banktransfer" element={<BankTransfer />} />
      <Route path="/banktransfer2/:month" element={<BankTransferPayout />} />
      <Route path="/banktransfer1" element={<BankTransferDetails />} />
      <Route path="/homesalary" element={<HomeSalary />} />
      <Route path="/addsalary/:emp_emailid" element={<AddSalary />} />
      <Route path="/homesal" element={<HomeSal />} />
      <Route path="/paysip" element={<CashChequeTransfer />} />
      <Route path="/resign" element={<Resign />} />

      {/* All Employee Performance */}
      <Route
        path="/allemployeeperformance"
        element={<AllEmployeePerformance />}
      />

      <Route path="/assignquiz" element={<AssignQuiz />} />
      <Route path="/enrollemployee" element={<EnrolEmployeeEdit />} />
      <Route path="/enrollemployees" element={<EnrollEmployees />} />
      <Route path="/customforms" element={<CustomForms />} />

      {/* Leave Management */}
      <Route path="/leavedashboard" element={<LeaveDashboard />} />
      <Route path="/manageleavetypes" element={<ManageLeaveTypes />} />
      <Route path="/leaves" element={<AllLeaves />} />

      {/* <Route path="/employeemaster" element={<EmployeeMaster />} /> */}
      <Route path="/createcase" element={<CreateCase />} />
      <Route path="/newemp" element={<NewEmployeeRegistry />} />
      <Route path="/delemp" element={<DelUpdateRegistry />} />
      {/* Courses */}
      <Route path="/addcourse" element={<Add_Courses />} />
      <Route path="/uploadmedia/:course_id" element={<Upload_Media />} />
      <Route path="/addmedia" element={<Add_Media_Content />} />
      <Route path="/updatedeletemedia" element={<Update_Delete_Media />} />
      <Route path="/updatemedia/:course_id" element={<Update_Media />} />
      {/* Resign */}
      <Route path="/resign" element={<Resign />} />
      <Route path="/resignations" element={<Resignation />} />

      {/* Forms and Ratings */}
      <Route path="/jdform" element={<JDForm />} />
      <Route path="/kraform" element={<KRA />} />
      <Route path="/managerrating" element={<ManagerRating />} />
      <Route path="/sopform" element={<SopForm />} />
      {/* FAQ Views */}
      <Route path="/FAQs" element={<FAQView />} />

      {/* Loans */}
      <Route path="/addloan" element={<LoanPayments />} />
      {/* Expense Management */}
      <Route path="/addexpense" element={<AddExpense />} />
      <Route path="/expense-report" element={<ExpenseReports />} />
      <Route path="/manage-expenses" element={<ManageExpenses />} />

      {/* Reports */}
      <Route path="/reporting-form" element={<ReportingForm />} />

      <Route path="/adhoc" element={<AdhocPayments />} />
    </Routes>
  );
}

export default App;
