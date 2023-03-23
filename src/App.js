import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div className="App">
      <div className="main">
        <Search defaultCity="Kyiv" />
      </div>

      <div className="link-github">
        <a
          href="https://github.com/annaBalabak/weather-app"
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
