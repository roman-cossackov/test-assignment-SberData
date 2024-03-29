import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
