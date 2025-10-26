import React from "react";
import { useNavigate } from "react-router-dom";

const Boton = ({ label,variant="primary", to  }) => {
 const navigate = useNavigate();

 const handleClick = () =>
    {
        if (to) navigate(to);
    };

    const baseStyle =
    "px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm";

  const variants = {
    primary: `${baseStyle} bg-emerald-800 text-white hover:bg-emerald-900`,
    secondary: `${baseStyle} border border-emerald-800 text-emerald-900 hover:bg-emerald-100`,
  };

  return (
    <button onClick={handleClick} className={variants[variant]}>
      {label}
    </button>
  );
};

export default Boton;
