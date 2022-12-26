import React, { useState } from 'react';
// import { json } from 'stream/consumers';

function MyButton() {
  const [response, setResponse] = useState(null);

  async function handleClick() {

    //1.GET USER DATA
    console.log("Getting Data")
    const userVoiceData = document.getElementById("userVoice").innerHTML
    console.log("Input : "+ userVoiceData)

    //SEND DATA TO BACKEND
    const zaka = await  fetch('http://localhost:2000/api/data', {
        method: 'POST',
        body: JSON.stringify({ data: userVoiceData}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
            //IF POST WAS SUCCESSFULL 
            console.log(JSON.stringify(data))
        })
        .catch(error => {
        });
        
    console.log("Call made successfully....")
      
      
  }

  return (
    <button onClick={handleClick}>
      Click me to call the API!
    </button>
  );
}

export default MyButton;