import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MyButton from './Components/apiButton';
import 'typeface-ubuntu';
// import Button from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';


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

  function startButton(){
    console.log("we are starting")
    SpeechRecognition.startListening();

  }
  
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
      <center>
      <h2 style={{ fontFamily: 'Ubuntu, sans-serif', color:'#888282' }} id = "userVoice">{transcript}</h2>
      <Button variant='light' size='lg'  style={{margin: '10px ',fontFamily: 'Ubuntu, sans-serif'}} onClick={startButton}>Start</Button>
      <MyButton></MyButton>  
      <h2 style={{fontFamily: 'Ubuntu, sans-serif',color :"#0A9B0B"}}  id = "chatBot"></h2>
      
      

      </center>
    </div>
  );
};
export default Dictaphone;