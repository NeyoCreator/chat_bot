import logo from './logo.svg';
import BasicCard from './card';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Battery Status:40%</h1>
      <br></br>
      <h1>Next Schedule: 20:30</h1>

      <center><BasicCard></BasicCard></center> 


    </div>
  );
}

export default App;