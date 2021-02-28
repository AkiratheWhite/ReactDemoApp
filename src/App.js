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
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  //React cannot output booleans or objects.

    return (
        <Router>    
            <div className="App">
                <Navbar/>    
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create/>
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails/>
                        </Route>
                        <Route>
                          <NotFound path="*"/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;