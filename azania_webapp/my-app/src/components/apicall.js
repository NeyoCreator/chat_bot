import { useEffect, useState } from "react";


function FavoriteColor() {
  const [getData, setData] = useState([{}])

  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>setData(data)
      
    )
  },[])

  console.log(getData)


  return(
    // <div>
    
  <h1>loading {getData.name}</h1>
   )
}


export default FavoriteColor