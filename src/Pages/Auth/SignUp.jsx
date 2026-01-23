import "../../Styles/pages/SignUp.css"
import NavBar from "../../Components/Organisms/NavBar";
import Form from "../../Components/Organisms/Form";
import loginBg from "../../assets/login.jpg";

const SignUp = () => {
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
          <Form title="Crear cuenta" mode="signup" />

        </div>
    </section>
  );
};

export default SignUp;