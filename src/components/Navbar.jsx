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
    <div className='w-full fixed top-0 flex justify-between items-center h-24 mx-auto px-4 text-white bg-black'>
      <img src={navLogo} alt="Logo" className='h-50' />
      <ul className='hidden md:flex text-xl'>
        <li className='p-4 hover:text-[#FF009C]'><a href="#home">Home</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#company">Nosotros</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#resources">Servicios</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#about">Cotizacion</a></li>
        <li className='p-4 hover:text-[#FF009C]'><a href="#contact">Contacto</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <img src={navLogo2} alt="Logo" className='h-50' />
          <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#home" onClick={handleNav}>Home</a></li>
          <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#company" onClick={handleNav}>Company</a></li>
          <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#resources" onClick={handleNav}>Resources</a></li>
          <li className='p-4 border-b border-gray-600 hover:text-[#FF009C]'><a href="#about" onClick={handleNav}>About</a></li>
          <li className='p-4'><a href="#contact" onClick={handleNav}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
