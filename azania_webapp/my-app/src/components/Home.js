import Navbar from "./Navbar"
import BasicCard from "./card1"
import BasicCard2 from "./card2"
import MyComponent from "./apicall"

const Home = () => {
  var x = 4
    return (
      <div className="Home">
        {/* <h1>hello {x}</h1> */}
        <br></br>
        <BasicCard></BasicCard>
        <br></br>
        <BasicCard2></BasicCard2>
        <br></br>
        <MyComponent></MyComponent>
      </div>


    )
  }
  
  export default Home