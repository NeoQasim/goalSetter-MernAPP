import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import DashboardPage from './pages/DashboardPage';
import Header from './Components/Header';


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
    </>
  )
}

export default App