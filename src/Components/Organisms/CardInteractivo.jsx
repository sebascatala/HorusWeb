import React from "react";
import CardContent from "../Molecules/ContenidoCard";


const interactiveCard = ({ title, text, primaryTo, secondaryTo }) => {
  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-80 p-6 text-center flex flex-col items-center">
      
      {/* Título */}
      <TituloCard text={title} />

      {/* Texto descriptivo */}
      <TextoCard text={text} />

      {/* Botones */}
      <div className="flex gap-4 mt-4">
        <Boton label="Eplorar Tours" to={primaryTo} variant="primary" />
        <Boton label="Unete" to={secondaryTo} variant="secondary" />
      </div>
    </div>
  );
};

export default interactiveCard;