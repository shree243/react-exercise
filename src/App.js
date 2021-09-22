import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import About from './component/About'
import Home from './component/Home'

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/about">
            <About />
        </Route>
     
      </Switch>
    </div>
  );
}

export default App;
