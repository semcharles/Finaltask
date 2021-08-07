import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from './compnents/Login';
import Home from './compnents/Home';
import Contact from './compnents/Contact';
import About from './compnents/About';

function App() {
  return (
    <div className="App">
        <nav>
          
              <Link to="/home" activeClassName="selected" className="navi">Home</Link>
            
              <Link to="/about" activeClassName="selected" className="navi">About</Link>
            
              <Link to="/contact" activeClassName="selected" className="navi">Contact</Link>
            
              <Link to="/login" activeClassName="selected" className="navi">Login</Link>
            
        </nav>

        
        
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        
            
     
      
    </div>
  );
}

export default App;
