import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleFolderClick = () => {
    navigate('/folders');
  };

  const handleUploadClick = () => {
    navigate('/upload');
  };

  const handleDownloadClick = () => {
    navigate('/download');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleLogoutClick = () => {
    // handle logout logic here
  };

  const handleInfoClick = () => {
    navigate('/info');
  };

  return (
    <div className="navbar">
      <div className="navbar-item" onClick={handleHomeClick}>
        <i className="fa fa-home"></i>
        <span>Home</span>
      </div>
      <div className="navbar-item" onClick={handleFolderClick}>
        <i className="fa fa-folder"></i>
        <span>Folders</span>
      </div>
      <div className="navbar-item" onClick={handleUploadClick}>
        <i className="fa fa-upload"></i>
        <span>Upload</span>
      </div>
      <div className="navbar-item" onClick={handleDownloadClick}>
        <i className="fa fa-download"></i>
        <span>Download</span>
      </div>
      <div className="navbar-item" onClick={handleSearchClick}>
        <i className="fa fa-search"></i>
        <span>Search</span>
      </div>
      <div className="navbar-item" onClick={handleSettingsClick}>
        <i className="fa fa-cog"></i>
        <span>Settings</span>
      </div>
      <div className="navbar-item" onClick={handleLogoutClick}>
        <i className="fa fa-sign-out"></i>
        <span>Logout</span>
      </div>
      <div className="navbar-item" onClick={handleInfoClick}>
        <i className="fa fa-info"></i>
        <span>Info</span>
      </div>
    </div>
  );
}

export default Navbar;