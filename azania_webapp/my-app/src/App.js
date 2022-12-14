import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicCard from './components/card1';
import BasicCard2 from './components/card2';
import Navbar from './components/Navbar';
import Home from './components/Home'
import LocationForm from './components/Form';
import ConnectDevice from './components/Device';
import HomePage from './authentication/homepage'
import SignIn from './authentication/SignIn'
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<LocationForm />} 
              // element={<SignIn/>}
            />
          </Routes>
          
          <Routes>
            <Route 
              path="/device" 
              element={<ConnectDevice />} 
            />
          </Routes>

          <Routes>
            <Route 
              path="/home" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
