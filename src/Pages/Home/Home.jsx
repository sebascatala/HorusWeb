import { useEffect, useState } from "react";
import "../../Styles/pages/Home.css";
import NavBar from "../../Components/Organisms/NavBar";
import CardInteractivo from "../../Components/Organisms/CardInteractivo";

const images = Object.values(
  import.meta.glob("../../assets/imgVideo/*.{png,jpg}", {
    eager: true,
    as: "url",
  })
).sort((a, b) => {
  const getNum = (url) =>
    Number(url.match(/(\d+)\.(png|jpg)$/)[1]);
  return getNum(a) - getNum(b);
});

const DURATION = 1000;
const FRAME_TIME = DURATION / images.length;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);


  useEffect(() => {
    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === images.length) {
          setReady(true);
        }
      };
    });
  }, []);


  useEffect(() => {
    if (!ready) return;

    let current = 0;

    const interval = setInterval(() => {
      current++;

      if (current >= images.length) {
        clearInterval(interval);
        return;
      }

      setIndex(current);
    }, FRAME_TIME);

    return () => clearInterval(interval);
  }, [ready]);

  return (
    <section
      className={`hero ${ready ? "ready" : ""}`}
      style={{
        backgroundImage: ready ? `url(${images[index]})` : "none",
      }}
    >
      <NavBar />

      <div className="hero-content">
        <CardInteractivo
          title="Turismo Transformativo"
          text="Somos tu lugar seguro para soñar y sanar explorando la naturaleza."
          primaryTo="/Tours"
          secondaryTo="/SignUp"
        />
      </div>
    </section>
  );
};

export default Home;
