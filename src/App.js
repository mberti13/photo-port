import React from 'react';

// import components
import About from './components/About';
import Nav from './components/Nav';


import './App.css';
import Gallery from './components/Gallery';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
