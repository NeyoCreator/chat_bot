import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
// import { getDatabase } from "firebase/database";
import { getDatabase, ref, set } from "firebase/database";




function LocationForm() {
  const database = getDatabase();

  function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: "name",
      email: "email"
      
    });
  }
  


  const handleclick =() =>{
      const userLOcation = document.getElementById("userLocation").value
      console.log('Data has bee writtem')
      writeUserData()
      // window.location.href='/device'
    }


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What is your location?</Form.Label>
        <Form.Control id="userLocation"type="email" placeholder="Enter location" />
      </Form.Group>

     
      <Button onClick={handleclick} variant="primary" type="submit">
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