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
      <div className='sm:flex sm:justify-between items-center lg:grid lg:grid-cols-3 gap-8 text-black'>
        {/* Sección izquierda */}
        <div className='sm:col-span-2'>
          <h1 className='text-3xl font-bold text-[#FF009C]'>G O P A C K</h1>
          <p className='py-4'>Para más información, mantente al tanto de nuestras redes sociales.</p>
        </div>
        
        {/* Sección derecha (Íconos de redes sociales) */}
        <div className='flex justify-center sm:justify-end'>
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
