import React from "react";
import TSR from "./assets/imgs/TSR.svg";
import './styles/main.scss';

function App() {
  return (
    <div className="home">
      <h1>The Typescript React Template</h1>
      <img src={TSR} alt="Logo" />
    </div>
  );
}

export default App;
