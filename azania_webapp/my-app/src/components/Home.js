import Navbar from "./Navbar"
import BasicCard from "./card1"
import BasicCard2 from "./card2"
import MyComponent from "./apicall"
import FavoriteColor from "./apicall"

const Home = () => {
    return (
      <div className="Home">
        {/* <h1>hello {x}</h1> */}
        <br></br>
        <BasicCard></BasicCard>
        <br></br>
        <BasicCard2></BasicCard2>
        <br></br>
        <FavoriteColor></FavoriteColor>
      </div>


    )
  }
  
  export default Home