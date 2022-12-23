import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



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
    
    const userVoiceData = document.getElementsByTagName('p')[0].innerHTML;
    console.log(userVoiceData)

  }
  



  return (
    <div>
      <center>
      <h1>You :</h1>
      <p id = "userVoice">{transcript}</p>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Send</button>
      <button onClick={getUserData}>call</button>

      {/* <button onClick={resetTranscript}>Reset</button> */}
      

      <h1>Gugu :</h1>
      </center>

      
    </div>
  );
};
export default Dictaphone;