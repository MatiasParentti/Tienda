
import "../css/index.css";
import Header from "../components/header";
import Footer from "../components/footer";  
import { useState } from "react";


function Index() {
   const images = [
        "cervezas.jpeg",
        "Cerveza1.jpeg",
        "Cerveza2.jpeg"
    ];
const [current, setCurrent] = useState(0);

    const nextImage = () => setCurrent((current + 1) % images.length);
    const prevImage = () => setCurrent((current - 1 + images.length) % images.length);


  
  return (
    <>
      <div className="header-container">
      <Header></Header>
      </div>
      <div className="body">
      <div className="body-container">
         <div className="body-background" >
            <img src="/imgfondo.jpg" width="100%" height="100%" alt="background-image" />
            
        </div>
        <div
        className="contenedor-carousel"
        >
        <div className="arrow-left">
          <button className="carousel-arrow left" onClick={prevImage}>&lt;</button>
        </div>
        <div className="carousel-container">
          <div className="carousel">
          <img src={images[current]} height={500} alt={`Imagen ${current + 1}`} />
          </div>
        </div>
        <div className="arrow-right">
          <button className="carousel-arrow right" onClick={nextImage}>&gt;</button>
        </div>
        </div>
      </div>
      </div>
      <div className="footer-container">
      <Footer></Footer>
      </div>
    </>
    );
}

export default Index;
