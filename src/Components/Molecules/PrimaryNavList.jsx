
// src/Components/Molecules/PrimaryNavList.jsx
import NavLink from '../Atoms/NavLink';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/tours', label: 'Tours' },
  { to: '/login', label: 'LogIn' },
  { to: '/signup', label: 'SignUp' },
  { to: '/shop', label: 'Shop' },
];

const PrimaryNavList = ({ isOpen }) => {
  return (
    <nav className={`primary-nav-list ${isOpen ? "open" : ""}`}>
      {navItems.map((item) => (
        <NavLink key={item.label} to={item.to} label={item.label} />
      ))}
    </nav>
  );
};

export default PrimaryNavList;
