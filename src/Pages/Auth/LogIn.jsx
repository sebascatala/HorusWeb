import "../../Styles/pages/LogIn.css";
import loginBg from "../../assets/login.jpg";

import NavBar from "../../Components/Organisms/NavBar";
import Form from "../../Components/Organisms/Form";

const LogIn = () => {
  return (
    <section
      className="login-page"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <NavBar />

      <div className="hero-content">
        <Form title="Iniciar sesión" mode="login" />
      </div>
    </section>
  );
};

export default LogIn;
