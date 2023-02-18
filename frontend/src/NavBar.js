import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Navbar(handleLogout) {
  return (
    <Router>
      <div className='navbar'>
        <div className='navbar-logo'>FileManager</div>
        <div>
          <ul className='navbar-menu'>
            <Link className='navbar-menu-item' to='/'>
              {' '}
              MyFiles{' '}
            </Link>
            <Link className='navbar-menu-item' to='/logout' onClick={handleLogout}>
              {' '}
              Logout{' '}
            </Link>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
