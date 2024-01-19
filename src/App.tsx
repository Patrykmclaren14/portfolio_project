import React from "react";
import './App.styles.scss'
import './index.css'
import { Header } from './components/Header'
import { AboutMe } from "./components/AboutMe";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
