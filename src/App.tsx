import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { userData } from './types/interfaces';

function App() {
  const [curUser, setCurUser] = useState<userData>();

  if (!localStorage.usersData) {
    localStorage.usersData = '{ "users": [] }';
  }

  return (
    <div className="App">
      <CustomNavbar setCurUser={setCurUser} />
      <Main curUser={curUser as userData} />
      <Footer />
    </div>
  );
}

export default App;
