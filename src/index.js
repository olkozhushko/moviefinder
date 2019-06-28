import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./app/Containers/App/App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import store from "./store";

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </Provider>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById("root")
);


serviceWorker.unregister();
