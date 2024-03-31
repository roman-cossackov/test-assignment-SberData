import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { UsersContextProvider } from './context/UsersContext';
import { generateRandomUsers } from './utils/generateRandomUsers';

function App() {
  if (!localStorage.usersData) {
    localStorage.usersData = JSON.stringify({ users: generateRandomUsers(20) });
  }

  return (
    <div className="App">
      <UsersContextProvider>
        <CustomNavbar />
        <Main />
        <Footer />
      </UsersContextProvider>
    </div>
  );
}

export default App;
