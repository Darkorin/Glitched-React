import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/images/glitched-logo.svg";

function NavBar() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand navbar-dark"
      style={{ backgroundColor: "#71cae3" }}>

      <a
        id="nav"
        className="navbar-brand"
        href="/Glitched-React/homepage">
        <img
          src={logo}
          width="auto"
          height="50px"
          className="d-inline-block align-top"
          alt="glitched"
        />
      </a>
  
      <div
        className="collapse navbar-collapse"
        id="navbarNav">
        <ul className="navbar-nav ml-auto">

          <Link to="/Glitched-React/homepage" className={location.pathname === "/homepage" ? "nav-link active" : "nav-link"}>
            <i className="fas fa-home d-inline-block align-top" style={{ width: "30px", height: "30px" }}

            ></i>

            </Link>

            <Link to="/Glitched-React/messages" className={location.pathname === "/messages" ? "nav-link active" : "nav-link"}>
              <i className="far fa-comments d-inline-block align-top" style={{ width: "30px", height: "30px" }}

              ></i>

            </Link>

            <Link to="/Glitched-React/admin" className={location.pathname === "/admin" ? "nav-link active" : "nav-link"}>
              <i className="far fa-user-circle d-inline-block align-top" style={{ width: "30px", height: "30px" }}></i>
            </Link>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar;