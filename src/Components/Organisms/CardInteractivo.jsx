import React from "react";
import ContenidoCard from "../Molecules/ContenidoCard";
import Boton from "../Atoms/Boton";

// CardInteractivo recibe props del Home.jsx
const CardInteractivo = ({ title, text, primaryTo, secondaryTo }) => {
  return (
    <div className="p-6 bg-white bg-opacity-80 rounded-2xl shadow-lg text-center max-w-md">
      {/* Contenido con título y texto */}
      <ContenidoCard title={title} text={text} />

      {/* Botones */}
      <div className="flex justify-center gap-4 mt-4">
        <Boton label="Explorar" to={primaryTo} variant="primary" />
        <Boton label="Contáctanos" to={secondaryTo} variant="secondary" />
      </div>
    </div>
  );
};

export default CardInteractivo;