import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import './Navbar.css'; // Ensure you have CSS for styling the collapsible nav bar

const NavBar = () => {
  const { currentUser, logout } = useContext(UserContext);
  const [isCollapsed, setIsCollapsed] = useState(true); // Initially collapsed

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`left-navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleCollapse} className="collapse-button">
        {isCollapsed ? '>' : '<'}
      </button>
      {!isCollapsed && (
        <div className="navbar-content">
          <div className="navbar-brand">
            <h3>Apartment Management App</h3>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            {currentUser ? (
              <>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button onClick={() => logout()} className="nav-link">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;