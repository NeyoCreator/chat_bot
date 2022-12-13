import Card from 'react-bootstrap/Card';

function ScheduleData() {
  return (
    <Card>
      <Card.Header>Location : Marshalltown</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            The next schdule will be at{' '}
          </p>
          <footer className="blockquote-footer">
            21:30 <cite title="Source Title"> Please charge your device</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ScheduleData;