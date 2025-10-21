// Si usas React Router, usarías <Link> en lugar de <a>
const NavLink = ({ to, label }) => {
  return (
    <a href={to} className="nav-link">
      {label}
    </a>
  );
};

export default NavLink;