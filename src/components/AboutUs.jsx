import React from "react";
import TraficGoPack from "../assets/trafic2.png";

const AboutUs = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] sm:w-[400px] xl:w-[800px] mx-auto xl:ml-[-50px]"
          src={TraficGoPack}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#FF009C] font-bold ">QUIENES SOMOS?</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            UNA EMPRESA SERIA Y CONFIABLE
          </h1>
          <p>
            Nos dedicamos a ofrecer soluciones integrales de transporte y
            distribución para satisfacer las necesidades de nuestros clientes en
            el ámbito nacional. Con una fuerte presencia en
            Mendoza, San Juan y San Luis, nos enorgullece contar con un equipo
            de profesionales altamente capacitados y una flota moderna que
            garantizan la entrega segura y puntual de sus envíos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
