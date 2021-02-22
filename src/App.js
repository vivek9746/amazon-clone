import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Link,Route} from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header/>
          <h1>Checkout</h1>
        </Route>

        <Route path="/login">
        <Header/>
          <h1>login</h1>
        </Route>

        <Route path="/">
          <Header/>
          <Home/>
        <h1>Hello World</h1>
        </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
