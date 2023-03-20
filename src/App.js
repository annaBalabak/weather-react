import './App.css';
import Search from "./Search"

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <div className='gitLink'>
      <a
        href="https://github.com/annaBalabak/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Open-source code{" "}
      </a>{" "}
      <span>by Anna Balabak</span>
      </div>
    </div>
  );

  
}
