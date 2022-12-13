import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"

function ConnectDevice() {
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