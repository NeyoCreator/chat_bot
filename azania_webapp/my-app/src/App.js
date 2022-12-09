import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicCard from './components/card1';
import BasicCard2 from './components/card2';
import Navbar from './components/Navbar';
import Home from './components/Home'
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
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
