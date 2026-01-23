import React from "react";
import Boton from "../Atoms/Boton";
import "../../Styles/organisms/CardInteractivo.css";

const Form = ({ title, mode }) => {
  const isSignup = mode === "signup";

  return (
    <div className="card-glass">
      <h1 className="title">{title}</h1>

      {/* SOLO SIGNUP */}
      {isSignup && (
        <>
          <label htmlFor="nombre">Nombre completo</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" required />

          <label htmlFor="telefono">Telefono</label>
          <input type="text" id="telefono" name="telefono" required />
        </>
      )}

      {/* LOGIN Y SIGNUP */}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" required />

      {/* SOLO SIGNUP */}
      {isSignup && (
        <>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </>
      )}

      <button type="submit">
        {isSignup ? "Crear cuenta" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default Form;
