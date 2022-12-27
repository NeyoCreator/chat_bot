import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
// import fetch from 'node-fetch'
import { fetch } from 'whatwg-fetch';
import MyButton from './Components/apiButton';


const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

   function sendUserData(){
    console.log("Help")
    // console.log("CALLING API======")
    // const res = await fetch('http://localhost:2000/api');
    // console.log(JSON.stringify(res))
  
  
    // const data = await res.json();
  // console.log(JSON.stringify(data))
    
      //REST USER DATA 
    // document.getElementById("userVoice").innerHTML = ""
    // document.getElementById("chatBot").innerHTML = "New text!";


    // let data = {
    //   voice_message :document.getElementById('userVoice')[0].innerHTML
    // }
    // data["voice_message"] = document.getElementById('userVoice')[0].innerHTML;
    // console.log(JSON.stringify({"voice_message":"yes we have it"}))

    
    // fetch('/first_call', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   // body: JSON.stringify(data)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  function startButton(){
    console.log("we are starting")
    SpeechRecognition.startListening();

  }
  
  return (
    <div>
      <center>
      <p id = "userVoice">{transcript}</p>
      <button style={{margin: '10px 0'}} onClick={startButton}>Start</button>
      
      <MyButton></MyButton>  

      
      <p id = "chatBot"></p>
     
      </center>
    </div>
  );
};
export default Dictaphone;