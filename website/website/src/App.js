import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/home';
import Pricepage from './components/Price';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        {/* HOMEPAGE */}
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage />} 
            />
          </Routes>


          
          <Routes>
            <Route 
              path="/price" 
              element={<Pricepage />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;