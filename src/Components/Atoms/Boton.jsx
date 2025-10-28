import React from "react";
import { useNavigate } from "react-router-dom";

const Boton = ({ label,variant="primary", to  }) => {
 const navigate = useNavigate();

 const handleClick = () =>
    {
        if (to) navigate(to);
    };

    const baseStyle =
    "Boton";

  const variants = {
    primary: `${baseStyle} primary`,
    secondary: `${baseStyle} secondary`,
  };

  return (
    <button onClick={handleClick} className={variants[variant]}>
      {label}
    </button>
  );
};

export default Boton;
