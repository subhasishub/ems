import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login/login_component";
import { Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tedroox</p>
      </header>
    </div>
  );
}

export default App;
