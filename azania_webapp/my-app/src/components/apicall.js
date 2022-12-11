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

  return(
  <h1>Day : {getData.name} & Schedule :{getData.schedule}</h1>

   )
}


export default FavoriteColor