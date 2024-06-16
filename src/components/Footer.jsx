import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 relative'>
      {/* Línea negra */}
      <div className='absolute top-0 left-0 right-0 h-px bg-black transform -translate-y-1/2 mx-auto w-[70%]'></div>
      
      {/* Contenido del footer */}
      <div className='flex flex-col lg:flex-row lg:justify-between items-center text-black'>
        {/* Sección izquierda */}
        <div className='text-center lg:text-left lg:w-2/3 mb-4 lg:mb-0'>
          <h1 className='text-3xl font-bold text-[#FF009C]'>G O P A C K</h1>
          <p className='py-4'>Para más información, mantente al tanto en nuestras redes sociales.</p>
        </div>
        
        {/* Sección derecha (Íconos de redes sociales) */}
        <div className='flex justify-center'>
          <div className='flex items-center'>
            <FaFacebookSquare size={40} className='mx-2' />
            <FaInstagram size={40} className='mx-2' />
            <FaTwitterSquare size={40} className='mx-2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
