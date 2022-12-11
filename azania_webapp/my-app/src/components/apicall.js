import { useEffect, useState } from "react";
import Axios from "axios"

function FavoriteColor() {
  const [getData, setData] = useState(null)


  useEffect(() => {
    const fetchData = async ()=>{

      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()
      
      if (response.ok){
        setData(json)

      }
    }
    fetchData()
  },[])

  return(
    <h1>yESS</h1>
  )
}


export default FavoriteColor