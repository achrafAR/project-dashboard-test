import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import MainDashboard from './components/Dashboard/MainDashboard/MainDashboard';
import Users from './components/Dashboard/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* MainDashboard as the parent layout */}
          <Route path="/dashboard" element={<MainDashboard />}>
            {/* Nested route for Users */}
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
