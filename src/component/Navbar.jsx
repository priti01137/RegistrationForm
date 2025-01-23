import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
         <header class="header">
    <nav class="navbar">
      <h1>Library Management System</h1>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <!-- <li><a href="#Registraion">Registration </a> --> */}
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Registration 
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><a class="dropdown-item" href="#"> Usser Registration </a></li>
                      <li><a class="dropdown-item" href="#">LibraritRegistration</a></li>
                      
                    </ul>
                  </li>
                </ul>
              </div>
        </ul>
    </nav>
  </header>
    </div>
  )
}

export default Nav