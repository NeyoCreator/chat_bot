import Button from 'react-bootstrap/Button';
import { initializeApp } from "firebase/app";
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import firebaseConfig from "../authentication/config"

// import { db } from '../authentication/config';
import { getFirestore, getDoc, collection, query, where, getDocs, doc, setDoc, addDoc } from "firebase/firestore";
import "firebase/compat/firestore"
import firebase from "firebase/compat/app";



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
    // const docRef = doc(db, "cities", "SF");

    const citiesRef = collection(db, "cities");
  
    await setDoc(doc(citiesRef, "LA"), {
      name: "Los Angeles", state: "CA", country: "USA",
      capital: false, population: 3900000,
      regions: ["west_coast", "socal"] });

  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What is your location?</Form.Label>
      </Form.Group>

      {/* <Button onClick={alert("hj")} variant="primary" type="submit">
        Submit
      </Button> */}

      <Button onClick={writeData}>Hello</Button>

    </Form>
  );
}

export default LocationForm;