import './App.css';
import Search from "./Search"
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div className="App">
    <div className='container'>

   <Search />
   <div className='main'>
      <h1>Kyiv</h1>
      <h2>Monday, March 20, 2023</h2>
      <h3>Last update:</h3>
      <div className="temp-container" >
        <img src="" alt="" width="100px" />
        <span className="temperature">13 </span> <span className="units"> <a className="active" href="#" >° C</a> | <a href="#">° F</a> </span>  
      </div>
      <div className="discription">
      <p className="conditions">Clouds</p>
      <p className="windspeed">15 km/h</p>
      <p className="temperature-range">
        Min <span class="min">5 </span>° C / Max <span class="max"> 8</span>° C
      </p>
    </div>
      <div>

     </div>
     </div>
    </div>
    <div className="link-github">
        <a href="https://github.com/annaBalabak/weather-app" target="_blank" rel="noreferrer">  Open-source code </a> <span>by Anna Balabak</span>
    </div>
      </div>
  );

  
}
