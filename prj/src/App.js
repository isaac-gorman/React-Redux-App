import React from "react";
import "./App.css";
import loading from "./loading.gif";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Async Redux</h5>
      </header>
      <div>
        <img src={loading} alt="" />
      </div>
    </div>
  );
}

export default App;
