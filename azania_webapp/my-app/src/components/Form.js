import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"

import { db } from '../authentication/config';
import { getFirestore, collection, query, where, getDocs, doc, setDoc,addDoc } from "firebase/firestore";




function LocationForm() {
  // const database = getDatabase();
  const writeData = async (e) => {

    console.log(JSON.stringify(collection("energy_data")))

  }


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What is your location?</Form.Label>
        <Form.Control id="userLocation" type="email" placeholder="Enter location" />
      </Form.Group>


      <Button onClick={writeData} variant="primary" type="submit">
        Submit
      </Button>
      {/* <Button onClick={event =>  window.location.href='/device'} variant="primary" type="submit">
        Submit
      </Button> */}
      {/* <Link to="/device" className="btn btn-primary">Sign up</Link> */}

    </Form>
  );
}

export default LocationForm;