import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import DashboardPage from './pages/DashboardPage';
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-toastify/dist/components';
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/register' element={<RegisterUser />} />
          </Routes>
        </div>

      </Router>
      <ToastContainer />
    </>
  )
}

export default App