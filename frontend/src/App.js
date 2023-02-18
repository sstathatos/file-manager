import React, { useState } from 'react';
import NavBar from './NavBar';
import FileManager from './FileManager';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='App'>
      {!isLoggedIn ? (
        <div>
          <h1>Welcome to the file manager app!</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <NavBar handleLogout={handleLogout} />
          <FileManager />
        </div>
      )}
    </div>
  );
}

export default App;
