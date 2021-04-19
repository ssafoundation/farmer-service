import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mainNav.css";

const MainNavbar = () => {
  return (
    <div className="main-navbar">
      <div className="container p-0">
        <Navbar expand="lg">
          <Navbar.Brand><Link to='/'>কৃষক সেবা</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            
             
             
              <ul>
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                 <li>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                 {/* <li>
                  <Link className="nav-link" to="/client">
                    Client
                  </Link>
                </li> */}
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MainNavbar;
