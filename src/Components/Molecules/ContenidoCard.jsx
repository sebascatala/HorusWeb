import React from "react";
import TituloCard from "../Atoms/TituloCard";
import TextoCard from "../Atoms/TextoCard";

const ContenidoCard = ({ title, text }) => {
  return (
    <div className="contenido-card text-center">
      <TituloCard title={title} />
      <TextoCard text={text} />
    </div>
  );
};

export default ContenidoCard;
