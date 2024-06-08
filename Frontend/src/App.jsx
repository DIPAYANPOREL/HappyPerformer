import { Route, Routes } from "react-router-dom";
// Landing Pages
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
import Pricing from "./Pages/Software/Pricing";
import Register from "./Pages/Software/Register";
import NewEmployeeRegistry from "./Pages/Software/RegisterEmployee/NewEmployeeRegistry";
import Resign from "./Pages/Software/Resign/Resign";
import Login from "./Pages/Software/Login";
import SopPolicies from "./Pages/Software/Sop&Policies/SopPolicies";



function App() {
  return (
    <Routes>
      {/* Landing Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/markattendance" element={<Attendance />} />
      <Route path="/banktransfer" element={<BankTransfer />} />
      <Route path="/banktransfer1" element={<BankTransferDetails />} />
      <Route path="/banktransfer2" element={<BankTransferPayout />} />
      <Route path="/homesalary" element={<HomeSalary />} />
      <Route path="/paysip" element={<CashChequeTransfer />} />
      <Route path="/resign" element={<Resign />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/employeemaster" element={<EmployeeMaster />} /> */}
      <Route path="/createcase" element={<CreateCase />} />
      <Route path="/newemp" element={<NewEmployeeRegistry />} />
      {/* Courses */}
      <Route path="/addcourse" element={<Add_Courses />} />
      <Route path="/uploadmedia/:course_id" element={<Upload_Media />} />
      <Route path="/addmedia" element={<Add_Media_Content />} />
      <Route path="/updatemedia" element={<Update_Media />} />
      <Route path="/delete-updatemedia" element={<Update_Delete_Media />} />
      <Route path="/newemp" element={<NewEmployeeRegistry />} />
      {/* Resign */}
      <Route path="/resign" element={<Resign />} />
      {/* SOP */}
      <Route path="/sop" element={<SopPolicies />} />
    </Routes>
  );
}

export default App;
