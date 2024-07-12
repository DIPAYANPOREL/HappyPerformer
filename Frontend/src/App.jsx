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
import DisplayDetails from "../src/Components/Software Components/PayRoll/DisplayDetails";
import RevisionHistory from "../src/Components/Software Components/PayRoll/RevisionHistory";
import HomeSal from "./Components/Software Components/PayRoll/HomeSal";
import EmployeeForm from "./Pages/EmployeeForm";
import ITdeclaration from "./Pages/ITdeclaration";
import ApplyforLeave from "./Pages/Leave Management/ApplyforLeave";
import LeaveHistory from "./Pages/Leave Management/LeaveHistory";
import Letters from "./Pages/Letters";
import AllEmployeePerformance from "./Pages/Management/AllEmployeePerformances";
import AssignQuiz from "./Pages/Management/AssignQuiz";
import AttendanceDetails from "./Pages/Management/Attendance Management/AttendanceDetails";
import EmployeeDetails from "./Pages/Management/Attendance Management/EmployeeDetails";
import BulkUpload from "./Pages/Management/BulkUpload";
import CustomForms from "./Pages/Management/CustomForms";
import EnrollEmployees from "./Pages/Management/EnrollEmployees";
import FAQView from "./Pages/Management/FAQView";
import AllLeaves from "./Pages/Management/Leave Management/AllLeaves";
import ApprovedLeaves from "./Pages/Management/Leave Management/ApprovedLeaves";
import LeaveDashboard from "./Pages/Management/Leave Management/LeaveDashboard";
import LeaveDetails from "./Pages/Management/Leave Management/LeaveDetails";
import ManageLeaveTypes from "./Pages/Management/Leave Management/ManageLeaveTypes";
import PendingLeaves from "./Pages/Management/Leave Management/PendingLeaves";
import RejectedLeaves from "./Pages/Management/Leave Management/RejectedLeaves";
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
import AllQuiz from "./Pages/Software/AllQuiz";
import AttendancePunch from "./Pages/Software/AttendancePunch";
import AllCases from "./Pages/Software/CaseManagement/AllCases";
import CreateQuizForm from "./Pages/Software/CreateQuizForm";
import Dashboard from "./Pages/Software/DashBoard/Dashboard";
import Faq from "./Pages/Software/DashBoard/FAQ";
import LoanPayments from "./Pages/Software/DashBoard/LoanPayments";
import Quiz from "./Pages/Software/DashBoard/Quiz";
import JDForm from "./Pages/Software/EmployeesJobs/JDForm";
import ManagerRating from "./Pages/Software/EmployeesJobs/ManagerRating";
import EnrolEmployeeEdit from "./Pages/Software/EnrolEmployeeEdit";
import EnrollForm from "./Pages/Software/EnrollForm";
import AddExpense from "./Pages/Software/ExpenseManagements/Addexpense";
import ExpenseReports from "./Pages/Software/ExpenseManagements/Expensereports";
import ManageExpenses from "./Pages/Software/ExpenseManagements/ManageExpenses";
import KRA from "./Pages/Software/KRA/KRA";
import Login from "./Pages/Software/Login";
import HoldSalary from "./Pages/Software/Payroll Management/HoldSalary";
import LeaveEncashment from "./Pages/Software/Payroll Management/LeaveEncashment";
import OffcyclePayment from "./Pages/Software/Payroll Management/OffcyclePayment";
import Poi from "./Pages/Software/Payroll Management/Poi";
import ViewEncashment from "./Pages/Software/Payroll Management/ViewEncashment";
import PHPTutorials from "./Pages/Software/PHPTutorials/PHPTutorials";
import Pricing from "./Pages/Software/Pricing";
import QuizApp from "./Pages/Software/QuizApp";
import Register from "./Pages/Software/Register";
import DelUpdateRegistry from "./Pages/Software/RegisterEmployee/DelUpdateRegistry";
import NewEmployeeRegistry from "./Pages/Software/RegisterEmployee/NewEmployeeRegistry";
import Resign from "./Pages/Software/Resign/Resign";
import Social from "./Pages/Software/Social/Social";
import {
  default as SopForm,
  default as SopPolicies,
} from "./Pages/Software/Sop&Policies/SopPolicies";
import ToDoList from "./Pages/Software/ToDoList";
import ViewEmployeesPage from "./Pages/Software/ViewEmployeePages";
import Training from "./Pages/Training";
import SalaryDetails from "../src/Components/Software Components/PayRoll/DisplayDetails";

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
      <Route path="/DisplayDetails/:emp_emailid" element={<SalaryDetails />} />
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
      <Route path="/pendingleave" element={<PendingLeaves />} />
      <Route path="/rejectedleave" element={<RejectedLeaves />} />
      <Route path="/approvedleave" element={<ApprovedLeaves />} />

      {/* <Route path="/employeemaster" element={<EmployeeMaster />} /> */}
      <Route path="/createcase" element={<CreateCase />} />
      <Route path="/newemp" element={<NewEmployeeRegistry />} />
      <Route path="/delemp" element={<DelUpdateRegistry />} />
      <Route path="/allcases" element={<AllCases />} />

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
      {/* Payroll management */}
      <Route path="/createleaveencashment" element={<LeaveEncashment />} />
      <Route path="/viewleaveencashment" element={<ViewEncashment />} />
      <Route path="/offcyclepayment" element={<OffcyclePayment />} />
      <Route path="/poi" element={<Poi />} />

      {/* Salary */}
      <Route path="/holdsalary" element={<HoldSalary />} />
      <Route path="/revisionhistory" element={<RevisionHistory />} />
      <Route path="/displaydetails" element={<DisplayDetails />} />

      {/* Attendance Management */}
      <Route path="/employeedetails" element={<EmployeeDetails />} />
      <Route path="/attendancedetails" element={<AttendanceDetails />} />

      {/* Reports */}
      <Route path="/reporting-form" element={<ReportingForm />} />

      {/* BulkUpload */}
      <Route path="/bulkupload" element={<BulkUpload />} />

      <Route path="/adhoc" element={<AdhocPayments />} />

      {/* Quizes */}
      <Route path="/createquiz" element={<CreateQuizForm />} />
      <Route path="/allquiz" element={<AllQuiz />} />

      <Route path="/attendancePunch" element={<AttendancePunch />} />
      <Route path="/enroll" element={<EnrollForm />} />
      <Route path="/viewemployees" element={<ViewEmployeesPage />} />
      <Route path="/enrollform" element={<EnrollForm />} />
      <Route path="/quizz" element={<QuizApp />} />
    </Routes>
  );
}

export default App;
