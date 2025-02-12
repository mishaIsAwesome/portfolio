import logo from './logo.svg';
import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <div class="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}