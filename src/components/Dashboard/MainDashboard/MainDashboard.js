import React from "react";
import { Link, Outlet } from 'react-router-dom';

import "./MainDashboard.css";
import AdminImage from "../../../Images/IMG_7427.jpg";

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-menu">
        <div className="menu-title">
          <h1>ProjectName</h1>
        </div>
        <div className="menu-links">
          <ul>
            <li><Link to="/dashboard/users">Users</Link></li>
            <li><Link to="/dashboard/classes">Classes</Link></li>
            <li><a href="#attendances">Attendances</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </div>
      </div>
      <div className="dashboard-navbar">
        <div className="navbar-container">
          <div className="navbar-container-right">
          <h3><Link className="dashboard-link" to="/dashboard">Dashboard</Link></h3>
            <h3>Users</h3>
            <h3>Setting</h3>
          </div>
          <div className="navbar-container-left">
            <div className="notification"> 
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="logout">
              <h3>Logout</h3>
            </div>
            <div className="image">
              <img
                src={AdminImage}
                alt="Example"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
          </div>
        </div>
        <div className="dashboard-content">
        <Outlet />
      </div>
      </div>

      {/* Render child routes */}
      
    </div>
  );
};

export default MainDashboard;
