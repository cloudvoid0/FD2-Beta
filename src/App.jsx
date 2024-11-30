import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import DonateFood from './components/DonateFood';
import ObtainFood from './components/ObtainFood';
import AdminDashboard from './components/AdminDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        {/* User routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/donate-food" element={<DonateFood />} />
        <Route path="/obtain-food" element={<ObtainFood />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/top-donors" element={<h1>Top Donors Page (To Be Developed)</h1>} />
        <Route path="/get-started" element={<h1>Get Started Page (To Be Developed)</h1>} />
        <Route path="/account" element={<h1>Accounts Page (To Be Developed)</h1>} />

        {/* Admin routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/view-donations" element={<div>View Donations Page</div>} />
        <Route path="/manage-users" element={<div>Manage Users Page</div>} />
        <Route path="/track-analytics" element={<div>Track Analytics Page</div>} />
        <Route path="/settings" element={<div>Settings Page</div>} />

      </Routes>
    </Router>
  );
};

export default App;

