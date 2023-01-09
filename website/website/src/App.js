import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>What do we do ?</h1>
      <h1>Why do we do it ?</h1>
      <p></p>
      <button>Get product</button>
      {/* <Link to="/price">
        <button>Go to Price page</button>
      </Link> */}

      
    </div>
  );
}

function Price() {
  return (
    <div>
      <img src="path/to/image.jpg" alt="Price" />
      <h1>Price</h1>
    </div>
  );
}

function App() {
  return (
    <Home></Home>

  );
}

export default App;