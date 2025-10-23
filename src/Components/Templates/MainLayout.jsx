import React from "react";
import NavBar from "../Organisms/NavBar";
import interactiveCard from "../Organisms/CardInteractivo";
import fondo from "../../assets/principal.png";


const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${fondo})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // hace que el fondo sea fijo al hacer scroll
          filter: "brightness(0.75)", // oscurece ligeramente el fondo
        }}
      ></div>

      {/* 🌐 NavBar sobre el fondo */}
      <div className="z-20">
        <NavBar />
      </div>

      {/* 💳 CardInteractivo centrado sobre el fondo */}
      <div className="flex-1 flex justify-center items-center z-10">
        <CardInteractivo
          title="Bienvenido a Horus"
          text="Explora nuestros tours, experiencias y servicios personalizados."
          primaryTo="/tours"
          secondaryTo="/contacto"
        />
      </div>
    </div>
  );
};
export default MainLayout;