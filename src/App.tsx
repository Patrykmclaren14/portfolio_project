import React from "react";
import './App.styles.scss'
import {Header} from './components/Header'
import './index.css'
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <div className="home">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
