import Card from 'react-bootstrap/Card';

function BatterStatus() {
  return (
    <Card>
      <Card.Header>Battery status</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            The status of the battry is{' '}
          </p>
          <footer className="blockquote-footer">
            94% of <cite title="Source Title">energy</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default BatterStatus;