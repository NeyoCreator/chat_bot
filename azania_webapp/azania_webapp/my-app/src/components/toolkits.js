  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import "bootstrap/dist/css/bootstrap.min.css"
  import { motion } from "framer-motion"
  import { useEffect, useState } from "react";
  import Modal from 'react-bootstrap/Modal';


  function ToolKits() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    return (
      <div className="card-container">
        <Card  className="tool-kit-card" style={{ width: '25rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/736x/67/36/0d/67360d6357f41abd751fef01bcf8bbbe.jpg" />
          <Card.Body>
            <Card.Title>Tool Kits 1</Card.Title>
            <Card.Text>
              This our basic tool kits it manages small apppliances.
              It is our staring range and allows customers to expand
              on their options
            </Card.Text>
            <Button
          className='save-button'
          onClick={handleShow}
        >R5 000
        </Button>

          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Khayelitsha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Performance</h3>
            <ul>
              <li>Lights 24h</li>
              <li>phone 24h</li>
              <li>Laptop 2h</li>
              <li>Television 22 inch 2h</li>
            </ul>

            <h3>Specification</h3>
            <ul>
              <li>Solar Panel</li>
              <li>Gel Battery 33A/h</li>
              <li>Charge Controller 10A</li>
              <li>Inverter 400W</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>


        <br></br>
        <Card  style={{ width: '25rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/564x/6f/d6/f7/6fd6f7a58bf2d015d47e1c96a8647466.jpg" />
          <Card.Body>
            <Card.Title>Tool Kits 2</Card.Title>
            <Card.Text>
              This our basic tool kits it manages small apppliances.
              It is our staring range and allows customers to expand
              on their options
            </Card.Text>
            <Button variant="primary"
            onClick={handleShow1}
            >R 10000</Button>
          </Card.Body>
        </Card>

        <Modal show={show1} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Khayelitsha Pro</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Performance</h3>
            <ul>
              <li>Lights 200h</li>
              <li>phone 240h</li>
              <li>Laptop 24h</li>
              <li>Television 22 inch 16h</li>
              <li>Microwave 4h</li>
              <li>Fridge 6h</li>
            </ul>

            <h3>Specification</h3>
            <ul>
              <li>Solar Panel</li>
              <li>Gel Battery 200A/h</li>
              <li>Charge Controller 50A</li>
              <li>Inverter 1500W</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose1}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>

      </div>



    );
  }

  export default ToolKits;