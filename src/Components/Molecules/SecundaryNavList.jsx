import NavLink from '../Atoms/NavLink';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/treks", label: "Treks" },
  { to: "/products", label: "Products" },
  { to: "/enrolled", label: "Enrolled" },
  { to: "/purchased", label: "Purchased" },
];
const SecundaryNavList = ({ isOpen }) => {
  return (
    <nav className={`primary-nav-list ${isOpen ? "open" : ""}`}>
      {navItems.map((item) => (
        <NavLink key={item.label} to={item.to} label={item.label} />
      ))}
    </nav>
  );
};

export default SecundaryNavList;
