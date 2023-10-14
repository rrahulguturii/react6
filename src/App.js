import React from 'react';
import './App.css';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
