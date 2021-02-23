// import logo from './logo.svg';
/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */
      
// import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  //React cannot output booleans or objects.
  const link = "http://www.google.ca";

  return (
    <div className="App">

      <Navbar/>
      
      <div className="content">
        <Home/>
      </div>

      <a href={link}>Site</a>

    </div>
  );
}

export default App;