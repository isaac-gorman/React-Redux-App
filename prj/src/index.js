import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./reducer/reducer";
import "./index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// STEPS -------
// - 1) Install my dependacies
// - - redux, redux-thunk, react-redux, react-router-dom, redux-logger
// - 2) Install redux, and create a store in the reducer
