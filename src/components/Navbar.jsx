import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import navLogo from '../assets/navLogo.png';
import navLogo2 from '../assets/navLogo2.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full fixed top-0 flex justify-between items-center h-24 mx-auto px-4 text-white bg-black z-50'>
      <img src={navLogo} alt="Logo" className='sm:h-[70px] md:h-[70px] xl:h-[80px]' />
      <ul className='hidden md:flex xl:text-[25px] md:text-[20px]'>
        <li className='p-4 hover:text-[#FF009C]'><a href="#home">Inicio</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#about">Nosotros</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#cards">Servicios</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#contact">Contacto</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#contact">Redes</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50' : 'ease-in-out duration-500 fixed left-[-100%] z-50'}>
        <img src={navLogo2} alt="Logo" className={`transition-transform duration-500 ${nav ? 'h-2 ml-[25px]' : 'h-10 mt-5'}`} />
        <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#home" onClick={handleNav}>Inicio</a></li>
        <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#about" onClick={handleNav}>Nosotros</a></li>
        <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#cards" onClick={handleNav}>Servicios</a></li>
        <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#contact" onClick={handleNav}>Contactanos</a></li>
        <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#footer" onClick={handleNav}>Redes</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
