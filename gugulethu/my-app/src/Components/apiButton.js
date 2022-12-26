import React, { useState } from 'react';
// import { json } from 'stream/consumers';

function MyButton() {
  const [response, setResponse] = useState(null);

  async function handleClick() {
    const res = await fetch('http://localhost:2000/api');
    const data = await res.json();
    setResponse(data);
    // console.log(data)
    
    console.log(data)
  }

  return (
    <button onClick={handleClick}>
      Click me to call the API!
    </button>
  );
}

export default MyButton;