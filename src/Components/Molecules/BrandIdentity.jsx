import Logo from '../Atoms/Logo';
import '../../Styles/organisms/NavBar.css'; // asegúrate de importar los estilos si no lo haces en otro lado

const BrandIdentity = () => {
  return (
    <div className="brand-identity">
      <Logo className="brand-logo" />
      <p className="brand-text">HORUS</p>
    </div>
  );
};

export default BrandIdentity;
