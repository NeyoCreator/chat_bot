import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"

function LocationForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What is your location?</Form.Label>
        <Form.Control type="email" placeholder="Enter location" />
        
      </Form.Group>

     
      <Button onClick={event =>  window.location.href='/device'} variant="primary" type="submit">
        Submit
      </Button>
      {/* <Link to="/device" className="btn btn-primary">Sign up</Link> */}
      
    </Form>
  );
}

export default LocationForm;