import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./reducer/reducer";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// STEPS -------
// - 1) Install my dependacies
// - - redux, redux-thunk, react-redux, react-router-dom, redux-logger
// - 2) Install redux, and create a store in the reducer
