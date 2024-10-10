import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './company/login';
import Signup from './company/Signup';
import StudentHome from './student/StudentHome';
import Home from './Home';
import StudentLogin from './student/StudentLogin';
import StudentSignup from './student/StudentSignup';
import CompanyHome from './company/CompanyHome';
import AdminHome from './admin/AdminHome';
import AdminLogin from './admin/AdminLogin';
import AdminSignup from './admin/AdminSignup';
import './App.css'
import WelcomeMsg from './student/WelcomeMsg';
import WelcomeMsgA from './admin/WelcomeMsgA';
import WelcomeMsgC from './company/WelcomeMsgC';
import CStudentInfo from './company/CStudentInfo';
import UploadJob from './company/UploadJob';
import UploadedJob from './company/UploadedJob';
import Opening from './company/Opening';
import AOpening from './admin/AOpening';
import Admin from './admin/Admin';
import Student from './student/Student';
import Company from './company/company';
import AddStudent from './admin/AddStudent';
import AddAdmin from './admin/AddAdmin';
import AddCompany from './admin/AddCompany'


// Create RollNoContext
export const RollNoContext = createContext();
// Create EmailContext
export const EmailContext = createContext();
// Create CompanyEmailContext
export const CEmailContext = createContext();

function App() {
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [cemail, csetEmail] = useState('');

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/addadmin' element={<AddAdmin />} />
        <Route path='/addcompany' element={<AddCompany />} />
      
        {/* Wrap only StudentLogin and StudentSignup with RollNoContext.Provider */}
        <Route
          path='/studentlogin'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <StudentLogin />
            </RollNoContext.Provider>
          }
        />
        <Route
          path='/studenthome'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <StudentHome />
            </RollNoContext.Provider>
          }
        />
        <Route
          path='/studentsignup'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <StudentSignup />
            </RollNoContext.Provider>
          }
        />
          <Route
          path='/opening'
          element={
            <RollNoContext.Provider value={{ rollNo, setRollNo }}>
              <Opening />
            </RollNoContext.Provider>
          }
        />
        {/* Wrap only AdminLogin and AdminSignup with EmailContext.Provider */}
        <Route
          path='/adminlogin'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AdminLogin />
            </EmailContext.Provider>
          }
        />
          <Route
          path='/adminsignup'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AdminSignup />
            </EmailContext.Provider>
          }
        />
          <Route
          path='/adminhome'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AdminHome />
            </EmailContext.Provider>
          }
        />
        <Route
          path='/admin'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <Admin />
            </EmailContext.Provider>
          }
        />
        <Route
          path='/student'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <Student/>
            </EmailContext.Provider>
          }
        />
        <Route
          path='/company'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <Company/>
            </EmailContext.Provider>
          }
        />
         <Route
          path='/aopening'
          element={
            <EmailContext.Provider value={{ email, setEmail }}>
              <AOpening />
            </EmailContext.Provider>
          }
        />

        {/* Wrap only CompanyLogin and CompanySignup with CEmailContext.Provider */}
         <Route
          path='/login'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <Login />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/companyhome'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <CompanyHome />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/signup'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <Signup />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/cstudentinfo'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <CStudentInfo />
            </CEmailContext.Provider>
          }
        />
         <Route
          path='/uploadjob'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <UploadJob />
            </CEmailContext.Provider>
          }
        />
        <Route
          path='/uploadedjob'
          element={
            <CEmailContext.Provider value={{ cemail, csetEmail }}>
              <UploadedJob />
            </CEmailContext.Provider>
          }
        />


        <Route path='/welcomemsg' element={<WelcomeMsg />} />
        <Route path='/welcomemsga' element={<WelcomeMsgA />} />
        <Route path='/welcomemsgc' element={<WelcomeMsgC />} />
      </Routes>
    </Router>
  );
}

export default App;
