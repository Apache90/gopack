import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Importar los archivos GeoJSON
import mendozaGeoJSON from "../cordenadas/provincia.json";
import sanLuisGeoJSON from "../cordenadas/provincia.json";
import sanJuanGeoJSON from "../cordenadas/provincia.json";

// Modal Component
const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>
      <div className="bg-white rounded-lg p-8 z-50 max-w-lg mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Aviso</h2>
        <p className="text-center">{message}</p>
        <button
          className="mt-4 bg-[#FF009C] text-white py-2 px-4 rounded-lg"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  // Estilos del polígono para las provincias
  const polygonStyle = {
    fillColor: "blue",
    color: "blue",
    weight: 2,
    opacity: 0.5,
  };

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="w-full flex items-center justify-center py-20 relative">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <form
            className="w-full max-w-md mx-auto flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl text-[#FF009C] font-bold">
              PEDINOS TU COTIZACION
            </h1>
            <input
              className="px-4 py-1 bg-gray-200 rounded-lg"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="px-4 py-1 bg-gray-200 rounded-lg"
              type="email"
              placeholder="Email"
            />
            <div className="flex gap-4">
              <input
                className="flex-1 px-4 py-1 sm:w-3 bg-gray-200 rounded-lg"
                type="text"
                placeholder="Desde"
              />
              <input
                className="flex-1 px-4 py-1 sm:w-3 bg-gray-200 rounded-lg"
                type="text"
                placeholder="Hasta"
              />
            </div>
            <textarea
              className="px-4 py-1 bg-gray-200 rounded-lg"
              rows="4"
              placeholder="Descripcion de la carga [Kg | Dimensiones]"
            ></textarea>
            <button
              className="bg-[#FF009C] mb-2 text-white font-bold py-2 rounded-lg"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="md:w-1/2 px-4 flex items-center justify-center">
          <div className="relative h-96 w-full">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <MapContainer
                center={[-31.5, -68.5]} // Centro aproximado de la región de Cuyo
                zoom={7}
                style={{ height: "100%", width: "100%", zIndex: 1 }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Agregar capas GeoJSON para las provincias */}
                <GeoJSON data={mendozaGeoJSON} style={polygonStyle} />
                <GeoJSON data={sanLuisGeoJSON} style={polygonStyle} />
                <GeoJSON data={sanJuanGeoJSON} style={polygonStyle} />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          message="Temporalmente no esta funcionando esta sección."
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Contact;
