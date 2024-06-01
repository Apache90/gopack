import React from "react";
import Typewriter from "typewriter-effect";
import fondo1 from "../assets/fondo1.png";
import traficImage from "../assets/trafic.png";
import { MdTouchApp } from "react-icons/md";

const Hero = () => {
  const backgroundImage = new Image();
  backgroundImage.src = fondo1;
  const backgroundHeight = backgroundImage.height;

  return (
    <div
      className="text-white font-lato"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="max-w-auto mx-auto text-center flex flex-col justify-center">
        <div className="md:text-[40px] xl:text-[50px] sm:text-4xl text-xl font-bold mt-36">
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
        <p className="md:text-5xl sm:text-4xl text-xl font-bold mt-[120px] sm:pb-[10px] bg-[#00000042] md:text-[40px] xl:text-[50px] h-auto">
          Con nosotros tu paquete viaja rápido y seguro, siempre.
        </p>
        <a
          href="#contact"
          className="bg-[#FF009C] xl:text-[50px] sm:text-[30px] w-auto sm:h-[80px] xl:h-[120px] text-black text-center font-bold flex justify-center items-center"
        >
          C O N T A C T A N O S | <MdTouchApp />
        </a>
      </div>
      <div className="absolute md:mt-[-42px] sm:mt-[-20px] left-0 w-full overflow-hidden">
  <img
    src={traficImage}
    alt="Traffic"
    className="xl:w-full xl:max-w-[1300px] sm:w-auto sm:max-w-[1100px] mx-auto animate-move"
    style={{ zIndex: "0", height: "auto" }}
  />
</div>

    </div>
  );
};

export default Hero;
