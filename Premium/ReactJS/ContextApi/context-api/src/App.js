import React from 'react';
import HomePage from './Homepage';
import {UserProvider} from './UserContext';
import logo from './logo.svg';
import './App.css';

function App() {
  const user = { name: 'Claude', loggedIn: true};
  
  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  );
}

export default App;
