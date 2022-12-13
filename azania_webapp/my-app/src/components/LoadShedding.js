import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";


function ScheduleData() {
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
      <Card.Header>Location : Marshalltown</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Date : {getData.name} {' '}
          </p>
          <footer className="blockquote-footer">
            Next Schedules <cite title="Source Title">{getData.schedule}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ScheduleData;