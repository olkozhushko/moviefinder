import React from 'react';

import './App.css';

import Header from "../../Components/Header/Header";
import MainContent from "../MainContent/MainContent";

function App() {
  return (
    <div className="vw-100 min-vh-100">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
