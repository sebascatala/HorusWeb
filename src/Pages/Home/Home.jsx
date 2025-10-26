import React from "react";
import NavBar from "../../Components/Organisms/NavBar";
import CardInteractivo from "../../Components/Organisms/CardInteractivo";
//import fondo from "../../assets/principal.png";

//console.log("Ruta del fondo:", fondo);

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
       <div
        className="absolute inset-0 -z-10"
        style={{
        backgroundImage: "url('/horrus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.75)",
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
          secondaryTo="/Unete"
        />
      </div>
    </div>
    
  );
};
export default Home;