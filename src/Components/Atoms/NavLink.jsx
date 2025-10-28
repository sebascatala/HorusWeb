// src/Components/Atoms/NavLink.jsx
import { Link } from "react-router-dom";

const NavLink = ({ to, label }) => {
  return (
    <Link to={to} className="nav-link">
      {label}
    </Link>
  );
};

export default NavLink;
