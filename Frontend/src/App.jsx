import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import DonorDashboard from './Components/DonorDashboard';
import RequestForm from './Components/Requestform';
import DonorList from './Components/DonorList';
import AdminDashboard from './Components/AdminDashboard';
import ReceiversList from './Components/ReceiversList';
import AdminRequestForm from './Components/AdminRequestForm';
import UpdateDelete from './Components/UpdateDelete';

function App() {
  const location = useLocation();

  // Check if the current path matches specific routes
  const isDonorDashboard = location.pathname === '/d';
  const isRequestForm = location.pathname === '/r';
  const isDonorList = location.pathname === '/dl';
  const isAdmin = location.pathname === '/ad';
  const isReceiv = location.pathname === '/rl';
  const isAdminRequest = location.pathname === '/arl';
  const isUpdateDelete = location.pathname === '/ud';




  return (
    <>
      {!isDonorDashboard && !isRequestForm && !isDonorList && !isReceiv &&!isAdmin && !isAdminRequest && !isUpdateDelete && <Navbar />} {/* Render Navbar if not on specific routes */}
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/l" element={<Login />} />
          <Route path="/s" element={<Signup />} />
          <Route path="/d" element={<DonorDashboard />} />
          <Route path="/r" element={<RequestForm />} />
          <Route path="/dl" element={<DonorList />} />
          <Route path="/ad" element={<AdminDashboard/>} />
          <Route path="/rl" element={<ReceiversList/>} />
          <Route path="/arl" element={<AdminRequestForm/>} />
          <Route path="/ud" element={  <UpdateDelete/>} />



        </Routes>
      </div>
    </>
  );
}

export default App;
