import './App.css';
import { WiDayCloudy} from "react-icons/wi";
import { FaMapMarkerAlt } from "react-icons/fa"


function App() {
  return (
    <div className="container">
      <p className="title">Weather App</p>
      <hr style={{ border:'1px solid black', margin: '20px 0' }} />
      <WiDayCloudy size={100} color="orange" style={{ marginLeft: 200 }} />
      <input className="input" placeholder="Enter city name"/>
      <div className="result">
        <p className="degree">13°C</p>
        <p className="status">Broken Clouds</p>
        <p className="city"><FaMapMarkerAlt size={15} color="black" />London, UKA</p>
      </div>
      <hr style={{ border: '1px solid black', margin: '20px 0' }} /> 
    </div>
  );
}

export default App;
