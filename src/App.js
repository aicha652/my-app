import './App.css';
import { WiDayCloudy} from "react-icons/wi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";


function App() {
  return (
    <div className="container">
      <p className="title">Weather App</p>
      <hr style={{ border:'1px solid black', margin: '20px 0' }} />
      <WiDayCloudy size={130} color="orange" style={{ marginLeft: 190 }} />
      <input className="input" placeholder="Enter city name"/>
      <div className="result">
        <p className="degree">13°C</p>
        <p className="status">Broken Clouds</p>
        <p className="city"><FaMapMarkerAlt size={15} color="black" />London, UKA</p>
      </div>
      <hr style={{ border: '1px solid black', margin: '20px 0' }} />
      <div className="informations">
        <div className="feels">
          <div>
            <FaTemperatureHigh style={{ color: "rgb(127, 192, 233)", fontSize: '50px', marginTop:'20px' }}/>
          </div>
          <div>
            <p>17°C</p>
            <p>Feels Like</p>
          </div>
        </div>
        <hr style= {{ color: "black", height: "100px", marginBottom: '0px', marginTop: "0px"}}/>
        <div className="humidity">
          <div>
            <WiHumidity style={{ color: "rgb(127, 192, 233)", fontSize: '70px', marginTop: '13px' }}/>
          </div>
          <div>
            <p>84%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
