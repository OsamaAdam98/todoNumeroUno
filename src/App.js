import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container-full">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about/" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
