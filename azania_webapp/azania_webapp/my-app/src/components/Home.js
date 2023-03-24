// import Navbar from "./Navbar"
// import BasicCard from "./card1"
// import BasicCard2 from "./card2"
// import MyComponent from "./apicall"
// import FavoriteColor from "./apicall"
import LocationForm from "./Form"
import ConnectDevice from "./Device"
import BatterStatus from "./BatteryCard"
import ScheduleData from "./LoadShedding"

const Home = () => {
    return (
      <div className="Home">
        
        {/* <h1>hello {x}</h1> */}
        <br></br>
        {/* HOME CALL */}
        {/* <BasicCard></BasicCard>
        <br></br>
        <BasicCard2></BasicCard2>
        <br></br>
        <FavoriteColor></FavoriteColor> */}

        {/* 1.LOCATION FORM */}
        {/* <LocationForm></LocationForm> */}

        {/* 2.DEVICE */}
        {/* <ConnectDevice></ConnectDevice> */}

        {/* 3.DISPLAY */}
        <BatterStatus></BatterStatus>
        <br></br>
        <ScheduleData></ScheduleData>
        
        
      </div>


    )
  }
  
  export default Home