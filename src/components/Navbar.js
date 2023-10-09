
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
 

  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg " style={{ backgroundColor:'#27445C'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color:'white'}} to="/">NewsApp</Link>
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{color:'#DBE2E9'}} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  style={{color:'#DBE2E9'}} aria-current="true" to="/">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#DBE2E9'}} to="/business">Business</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" style={{color:'#DBE2E9'}} to="/entertainment">Entertainment</Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#DBE2E9'}} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#DBE2E9'}} to="/science">Science</Link>
        </li>
        <li className="nav-item">
                  <Link className="nav-link" style={{color:'#DBE2E9'}} to="/sports">Sports</Link>
                </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#DBE2E9'}} to="/technology">Technology</Link>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar