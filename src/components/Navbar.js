import React from 'react'
// import React, { useState } from 'react';

export default function Navbar(props) {

 
  return (
    <div>
      <nav className={`navbar navbar-expand -lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>{props.title} </b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#"><b>{props.home}</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#"><b>{props.about}</b></a>
        </li>
      </ul>
      
        <div className={`form-check form-switch text-${props.mode === 'dark'? 'light' : 'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch"onClick={props.toggleMode} id="flexSwitchCheckChecked" />
  
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
