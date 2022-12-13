import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";


function ConnectDevice() {

  //1.GET API DATA
  const [getData, setData] = useState([{}])
  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>setData(data)
      
    )
  },[])

  return (
    <Card>
      <Card.Header>Connect Device</Card.Header>
      <Card.Body>
        <Card.Title>Can you connect </Card.Title>
        <Card.Text>
          your package device with the smartphone, allow bluetooth acces to this device.
        </Card.Text>
        <Button onClick={event =>  window.location.href='/home'} variant="primary">Connect</Button>
      </Card.Body>
    </Card>
  );
}

export default ConnectDevice;