import React from 'react';
import AboutUs from './components/AboutUs';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="resources">
      <Cards />
        
      </div>
      <div id="company">
      <Contact />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
