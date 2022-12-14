import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAtnqElXEBRITMZ0bEZEk91POAggC04G8U",
  authDomain: "azania-5295e.firebaseapp.com",
  projectId: "azania-5295e",
  storageBucket: "azania-5295e.appspot.com",
  messagingSenderId: "364416607302",
  appId: "1:364416607302:web:9b7b9c43eff96b17dcd647",
  databaseURL: "https://azania-5295e.nam5.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
