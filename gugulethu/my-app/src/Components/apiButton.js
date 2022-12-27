import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
            document.getElementById("chatBot").innerHTML = JSON.stringify(data['success']);
        })
        .catch(error => {
        });
        
    console.log("Call made successfully....")
      
  }

  return (
    
    <Button variant="dark" size = "lg" style={{fontFamily: 'Ubuntu, sans-serif'}} onClick={handleClick}>
      Send
    </Button>
  );
}

export default MyButton;