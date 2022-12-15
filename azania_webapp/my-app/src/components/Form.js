import Button from 'react-bootstrap/Button';
import { initializeApp } from "firebase/app";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import firebaseConfig from "../authentication/config"

// import { db } from '../authentication/config';
import { getFirestore, getDoc, collection, query, where, getDocs, doc, setDoc, addDoc } from "firebase/firestore";
import "firebase/compat/firestore"
import firebase from "firebase/compat/app";
import {auth} from "../authentication/config"


function LocationForm() {

  const firebaseConfig = {
    apiKey: "AIzaSyAtnqElXEBRITMZ0bEZEk91POAggC04G8U",
    authDomain: "azania-5295e.firebaseapp.com",
    projectId: "azania-5295e",
    storageBucket: "azania-5295e.appspot.com",
    messagingSenderId: "364416607302",
    appId: "1:364416607302:web:9b7b9c43eff96b17dcd647"
  };

  firebase.initializeApp(firebaseConfig);
  const writeData = async (e) => {
    const db = firebase.firestore();
    //1.GET USER ID
    const user = auth.currentUser;
    const userID=user.uid
    const userName = user["displayName"]

    //2.GET LOCATION
    const user_location = document.getElementById("inputLocation").value

    const userDataRef = collection(db, "user_data");
    await setDoc(doc(userDataRef, userID), {
      user: userName,
      location: user_location,
      batter_status: 66
    });
    console.log("========Datbase Updated==========")
  }



  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What is your location?</Form.Label>
        <Form.Control type="text" placeholder="Enter location" id="inputLocation"/>
      </Form.Group>

      <Button onClick={writeData}>Write Data</Button>
      <br></br>

    </Form>
  );
}

export default LocationForm;