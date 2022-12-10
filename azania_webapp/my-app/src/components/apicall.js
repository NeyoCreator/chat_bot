import React, { useEffect } from 'react'
import {useState} from 'react';


function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c900475e6msh323d593c0c473f4p1bf21cjsnf8d9d965070d',
            'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
        }
    };
    
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=Pretoria",options)
        .then(res => res.json())
        .then(
          (result) => {
            // console.log("yes")
            // setIsLoaded(true);
            // setItems(result);
            // alert("yes")
            alert(JSON.stringify(result))
            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }

export default MyComponent