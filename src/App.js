// src/App.js
import React, { useState, useEffect } from 'react';
import Logout from './component/logout';
import Login from './component/login';
import { auth } from './component/firebase';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
