import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
// import fetch from 'node-fetch'
import { fetch } from 'whatwg-fetch';


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

  function getUserData(){

    document.getElementById("chatBot").innerHTML = "New text!";

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
  
  return (
    <div>
      <center>
      <h1>You :</h1>
      <p id = "userVoice">{transcript}</p>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button onClick={SpeechRecognition.startListening}>Start</button>
      {/* <button onClick={SpeechRecognition.stopListening}>Send</button> */}
      <button onClick={getUserData}>Send</button>
      {/* <button onClick={resetTranscript}>Reset</button> */}
      

      <h1>Gugu :</h1>
      <p id = "chatBot"></p>
      </center>

      
    </div>
  );
};
export default Dictaphone;