import React from "react";
import Boton from "../Atoms/Boton";
import "../../Styles/organisms/CardInteractivo.css";

const CardInteractivo = ({
  welcome = "Bienvenido a",
  brand = "HORUS",
  title,
  text,
  primaryTo,
  secondaryTo,
  primaryLabel = "Explorar",
  secondaryLabel = "Únete",
}) => {
  return (
    <div className="card-glass">
      
      <p className="card-welcome">{welcome}</p>
      <h1 className="card-title">{brand}</h1>

      {title && <p className="card-subtitle">{title}</p>}
      {text && <p className="card-text">{text}</p>}

      <div className="card-buttons">
        <Boton
          label={primaryLabel}
          to={primaryTo}
          variant="primary"
          className="btn-primary"
        />
        <Boton
          label={secondaryLabel}
          to={secondaryTo}
          variant="secondary"
          className="btn-secondary"
        />
      </div>
    </div>
  );
};

export default CardInteractivo;
