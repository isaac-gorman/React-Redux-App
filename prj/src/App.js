import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Shots from "./components/Shots";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Profile />
      </Route>
      <Route exact path="/shots">
        <Shots />
      </Route>
    </div>
  );
}

export default App;
