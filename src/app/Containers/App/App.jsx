import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import store from "../../../store";

import Header from "../../Components/Header";
import MainContent from "../MainContent";

function App() {
  return (
    <Provider store={store}>
      <div className="vw-100 min-vh-100">
        <Header />
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;
