
import React from 'react';
import logo from './../logo.svg'

const Navbar = ({message}) => {
    
    return <nav className="navbar primary" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={logo} alt="Malinali B"/>
      </a>
  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>;
};

export default Navbar;