import "bootstrap/dist/css/bootstrap.min.css"
import {useEffect,useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const apiKey= "ba4b1a51f3f40deefb6deea7f96befd8"
  const [inputCity,setInputCity] = useState("")
  const [data,setData] = useState({})

  const getWeatherDetails = (cityName) =>{
    if(!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
    axios.get(apiURL).then((res)=>{
      console.log("respose "+res)
      setData(res.data)
    }).catch((err)=>{
      console.log("err "+err)
    })
  }

  const handleChangeInput = (e)=>{
    setInputCity(e.target.value)
  }

  const handleSearch=()=>{
    getWeatherDetails(inputCity)
  }


  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control" 
        value={inputCity}
        onChange={handleChangeInput}/>
        <button className="btn btn-primary" type="button"
        onClick={handleSearch}
        >Search</button>
        </div>
        </div>
        {Object.keys(data).length>0 &&
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">
          <img className="weatherIcon" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="icon" />  

          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>

          </div>
        </div>
}
      
    </div>
  );
}

export default App;
