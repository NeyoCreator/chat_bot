import Navbar from "./Navbar"
import BasicCard from "./card1"
import BasicCard2 from "./card2"

const Home = () => {
  var x = 4
    return (
      <div className="Home">
        <h1>hello {x}</h1>
        <br></br>
        <BasicCard></BasicCard>
        <br></br>
        <BasicCard2></BasicCard2>
      </div>
    )
  }
  
  export default Home