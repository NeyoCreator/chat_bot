import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/home';
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className="pages">
          <Routes>
            <Route 
              path="/home" 
              element={<HomePage />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;