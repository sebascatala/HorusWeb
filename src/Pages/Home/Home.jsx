import "../../Styles/pages/Home.css"
import NavBar from "../../Components/Organisms/NavBar";
import CardInteractivo from "../../Components/Organisms/CardInteractivo";

const Home = () => {
  return (
    <div className="hero">
        <NavBar />

        <CardInteractivo
            title="Bienvenido a Horus"
            text="Explora nuestros tours, experiencias y servicios personalizados."
            primaryTo="../Components/Pages/Tours"
            secondaryTo="../Components/Pages/SignUp"
        />
    </div>
  );
};

export default Home;
