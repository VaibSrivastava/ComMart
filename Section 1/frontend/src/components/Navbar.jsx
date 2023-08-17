import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUserContext from "../UserContext";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();

  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const showLoginOption = () => {
    if (loggedIn) {
      return (
        <>
        <li className="nav-item">
          <button onClick={logout} className="btn btn-danger">Logout</button>
        </li>
        <li>
          <img src={"http://localhost:5000/"+currentUser.avatar} className="ms-4 rounded-circle " width={40} alt="" />
        </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link mx-1" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" fs-1  href="#" style={{fontSize: '40px', fontStyle: 'italic', fontWeight: 'bold', color:'orange'}}>
          ComMart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/event">
                Event Handling
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/state">
                Cart
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/manageuser">
                Manage Users
              </Link>
            </li>

            {showLoginOption()}
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;