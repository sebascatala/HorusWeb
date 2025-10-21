// src/Components/Organisms/NavBar.jsx
import React, { useState } from "react";
import "../../Styles/organisms/NavBar.css";
import BrandIdentity from "../Molecules/BrandIdentity";
import PrimaryNavList from "../Molecules/PrimaryNavList";

// Importa tus íconos (usa tus archivos reales)
import menuIcon from "../../assets/NavBar/menu-open.png";
import closeIcon from "../../assets/NavBar/menu-close.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Evita el scroll del body cuando el menú está abierto
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  return (
    <nav className="navbar-organism">
      <div className="navbar-content">
        <BrandIdentity />

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt="menu icon"
            className="menu-image"
          />
        </button>

        <PrimaryNavList isOpen={menuOpen} />
      </div>
    </nav>
  );
}
