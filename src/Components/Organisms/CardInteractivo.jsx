import React from "react";
import Boton from "../Atoms/Boton";
import "../../Styles/organisms/CardInteractivo.css";

const CardInteractivo = ({ title, text, primaryTo, secondaryTo }) => {
  return (
    <div className="card-glass">
      <p className="card-welcome">Bienvenido a</p>
      <h1 className="card-title">HORUS</h1>
      <p className="card-subtitle">Turismo Transformativo</p>
      <p className="card-text">
        Somos tu lugar seguro para soñar y sanar explorando la naturaleza
      </p>

      <div className="card-buttons">
        <Boton label="Explorar tours" to={primaryTo} variant="primary" className="btn-primary" />
        <Boton label="Únete" to={secondaryTo} variant="secondary" className="btn-secondary" />
      </div>

    </div>
  );
};

export default CardInteractivo;
