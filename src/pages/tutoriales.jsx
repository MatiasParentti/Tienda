import "../css/tutoriales.css";
import ipa from "../assets/ipa.webp";
import stout from "../assets/stout.jpg";
import rubia from "../assets/rubia.png";
import scotch from "../assets/scotch.jpg";
import weiss from "../assets/weissbier.jpg";

const cervezasData = [
  { nombre: "IPA", imagen: ipa },
  { nombre: "STOUT", imagen: stout },
  { nombre: "LAGER", imagen: rubia },
  { nombre: "WEISSBIER", imagen: weiss },
  { nombre: "SCOTCH", imagen: scotch },
];

const Tutoriales = () => {
  return (
    <div className="cervezas-container">
      <div className="cervezas-texto">
        <p>
          Nuestra intención es que estas guías sirvan como punto de partida. El
          sabor de cada cerveza puede variar según el estilo, el proceso de
          fermentación, el tipo de lúpulo y la temperatura de consumo.
        </p>
        <p>
          Cada estilo tiene sus características únicas. Estas recomendaciones
          están pensadas como guías generales para apreciar mejor cada tipo de
          cerveza.
        </p>
        <p>
          En nuestras recetas encontrarás consejos sobre temperaturas, maridajes
          y tipos de vaso ideales para cada estilo.
        </p>
        <p className="cervezas-tips">
          <em>
            Pequeños tips <br />
            Cuanto más aromática es la cerveza, mejor se aprecia en un vaso
            ancho. <br />
            Servir entre 4°C y 10°C, según el estilo, mejora la experiencia.
          </em>
        </p>
        <p className="cervezas-experimentar">
          <strong>¡Ahora sí, a disfrutar!</strong>
        </p>
      </div>

      <div className="cervezas-grid">
        {cervezasData.map((cerveza, index) => (
          <div
            key={index}
            className="cerveza-card"
            style={{ backgroundImage: `url(${cerveza.imagen})` }}
          >
            <div className="cerveza-overlay">
              <h3>{cerveza.nombre}</h3>
              <a href="#">VER DETALLES &gt;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutoriales;
