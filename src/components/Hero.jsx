import React from 'react';
import Typewriter from "typewriter-effect";
import fondo1 from '../assets/fondo1.png';
import traficImage from '../assets/trafic.png';

const Hero = () => {
  const backgroundImage = new Image();
  backgroundImage.src = fondo1;
  const backgroundHeight = backgroundImage.height;

  return (
    <div 
      className='text-white font-lato' 
      style={{ 
        backgroundImage: `url(${fondo1})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: `${backgroundHeight}px` 
      }}
    >
      <div className='max-w-[800px] mx-auto text-center flex flex-col justify-center'>
        <div className='md:text-5xl sm:text-4xl font-bold text-xl mt-36'>
          HACEMOS ENVIOS A TODO CUYO!
        </div>
        <div className="typewriter-container">
          <Typewriter 
            options={{ loop: true }} 
            onInit={(typewriter) => {
              typewriter
                .typeString("MENDOZA")
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(500)
                .typeString("SAN JUAN")
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(500)
                .typeString("SAN LUIS")
                .pauseFor(1500)
                .deleteAll()
                .pauseFor(500)
                .start();
            }} 
          />
        </div>
        <p className='md:text-5xl sm:text-4xl font-bold text-xl mt-36'>
          Hacemos que tu paquete llegue rápido y seguro, siempre .
        </p>
        <a href="#contact" className='bg-[#FF009C] w-[200px] rounded-md my-6 mx-auto py-3 text-black text-center font-bold'>
          Contactanos
        </a>
      </div>
      <div className="relative w-full mt-10">
        <img src={traficImage} alt="Traffic" className="w-full max-w-[2000px] mx-auto animate-move"/>
      </div>
    </div>
  );
};

export default Hero;
