import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="company">
        <Analytics />
      </div>
      <div id="resources">
        <Newsletter />
      </div>
      <div id="about">
        <Cards />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
