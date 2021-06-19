import React from 'react'
import { NavLink } from "react-router-dom"
import './style.css'

function Navbar() {

  return (
    <>
      <section className="top_header_area">
        <div className="container">
          <ul className="nav navbar-expand-lg navbar-light top_nav">
            <li><a href="#"><i className="fa fa-phone" />+1 (613) 838 5042</a></li>
            <li><a href="mailto:info@goldiemohrltd.ca" target="_blank" rel="noreferrer"><i className="fa fa-envelope" />info@goldiemohrltd.ca</a></li>
            <li><a href="#"><i className="fa fa-clock" />Mon - Fri 07:00 - 18:00</a></li>
            <li><a target="_blank" href="https://www.facebook.com/GoldieMohr"><i class="fab fa-facebook-f"></i></a></li>
            <li><a target="_blank" href="https://twitter.com/goldiemohrltd"><i class="fab fa-twitter"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/company/goldiemohrltd/"><i class="fab fa-linkedin-in"></i></a></li>
            <li className="ms-auto" id="faUser"><a href="#"></a></li>
          </ul>
        </div>
      </section>
      <nav className="navbar navbar-expand-lg navbar-light header_aera stroke" id="main_navbar">
        <div className="container">
          <NavLink className="nav-link" aria-current="page" to="/" onClick={() => { window.location.href = "/" }} >
            <img src="images/header-logo.png" ></img></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#min_navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="min_navbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" onClick={() => { window.location.href = "/" }} >Home</NavLink>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Our Services   &   Projects   </a>
                <ul class="dropdown-menu">
                  <li> <NavLink className="nav-link" to="./Road-Construction">Road Construction</NavLink></li>
                  <li> <NavLink className="nav-link" to="./Winter-Maintenance">Winter Maintenance   </NavLink></li>
                  <li> <NavLink className="nav-link" to="./Transportation">Transportation</NavLink></li>
                  <li> <NavLink className="nav-link" to="./Equipment-Rental"> Equipment Rental</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="./Product">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./About">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="./Career">Careers</NavLink>
              </li>
              <li className="nav-item contactUs">
                <NavLink className="nav-link " to="./Contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar