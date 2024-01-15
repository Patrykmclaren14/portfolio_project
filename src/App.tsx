import React from "react";
import './App.styles.scss'
import './index.css'
import { Header } from './components/Header'
import { AboutMe } from "./components/AboutMe";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <TechStack />
    </div>
  );
}

export default App;
