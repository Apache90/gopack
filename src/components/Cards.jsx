import React from 'react';
import Single from '../assets/1.png';
import Double from '../assets/3.png';
import Triple from '../assets/2.png';

const Cards = () => {
  return (
    <div className='w-full bg-white'>
      <div className='max-w-[1200px] mx-auto grid gap-8 md:grid-cols-3'>
          <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 -mt-12 mb-6 bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center mb-2'>Servicio exprés</h2>
              <div className='text-center font-medium flex-1'>
                  <p className='py-2 border-b mx-8'>Garantiza una entrega rápida en un plazo específico, generalmente dentro de 1-3 días hábiles dependiendo de la ubicación. Es más costoso que el servicio estándar pero ideal para envíos urgentes.</p>
              </div>
              <a href='https://wa.link/gxdvwp' target='_blank' rel='noopener noreferrer'>
                <button className='bg-[#FF009C] w-full md:w-36 h-12 rounded-md font-medium my-4'>CONSULTAR</button>
              </a>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 -mt-12 mb-6 bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center mb-2'>Servicio de almacenamiento y distribución</h2>
              <div className='text-center font-medium flex-1'>
                  <p className='py-2 border-b mx-8'>Ofrecido a empresas que necesitan almacenar inventario y distribuir productos a nivel local o en zona de Cuyo.</p>
              </div>
              <a href='https://wa.link/gxdvwp' target='_blank' rel='noopener noreferrer'>
                <button className='bg-black text-[#FF009C] w-full md:w-36 h-12 rounded-md font-medium my-4'>CONSULTAR</button>
              </a>
          </div>
          <div className='w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 -mt-12 mb-6 bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center mb-2'>Servicios especializados</h2>
              <div className='text-center font-medium flex-1'>
                  <p className='py-2 border-b mx-8'>Como entrega a domicilio, gestión de productos perecederos o delicados, manejo de mercancías peligrosas, entre otros.</p>
              </div>
              <a href='https://wa.link/gxdvwp' target='_blank' rel='noopener noreferrer'>
                <button className='bg-[#FF009C] w-full md:w-36 h-12 rounded-md font-medium my-4'>CONSULTAR</button>
              </a>
          </div>
      </div>
    </div>
  );
};

export default Cards;
