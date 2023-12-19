// src/App.js

import React from 'react';

function NavbarLogin() {
  return (
    <div className="bs-example">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ background: '#337AB7' }}>
        <a href="/" className="navbar-brand">Hospital Management</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="/adminclick" className="nav-item nav-link">Admin</a>
            <a href="/doctorclick" className="nav-item nav-link">Doctor</a>
            <a href="/patientclick" className="nav-item nav-link">Patient</a>
          </div>

          <div className="navbar-nav">
            <a href="/aboutus" className="nav-item nav-link">About Us</a>
            <a href="/contactus" className="nav-item nav-link">Contact Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLogin;
