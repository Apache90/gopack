import React from "react";
import Typewriter from "typewriter-effect";
import fondo1 from "../assets/fondo1.png";
import traficImage from "../assets/trafic.png";
import { MdTouchApp } from "react-icons/md";

const Hero = () => {
  const backgroundImage = new Image();
  backgroundImage.src = fondo1;

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
        <div className="xl:text-[50px] text-[24px] font-bold mt-[115px]">
          HACEMOS ENVIOS A TODO CUYO!
        </div>
        <div className="typewriter-container xl:text-[100px]">
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
        <div>
          <div className="">
            <p className="xl:text-[50px] text-[24px] font-bold sm:mt-[120px] bg-[#00000042] h-auto">
              ¿Necesitas un envío rápido y seguro?
            </p>
            <a
              href="https://wa.link/5ypebc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF009C] xl:text-[50px] text-[24px] w-auto h-[80px] xl:h-[120px] text-black text-center font-bold flex justify-center items-center"
            >
              C O N T A C T A N O S | <MdTouchApp />
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <img
              src={traficImage}
              alt="Traffic"
              className="xl:max-w-[1300px] sm:max-w-[1300px] mx-auto animate-move"
              style={{ zIndex: "0", height: "auto" }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
