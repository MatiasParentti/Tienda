
import "./body.css";
import { useState } from "react";

export default function Body() {
    const images = [
        "cervezas.jpeg",
        "Cerveza1.jpeg",
        "Cerveza2.jpeg"
    ];

    const [current, setCurrent] = useState(0);

    const nextImage = () => setCurrent((current + 1) % images.length);
    const prevImage = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="contenedor-carousel">
            <div className="carousel-container" >
            <div className="arrow-left">
                <button className="carousel-arrow left" onClick={prevImage} >&lt;</button>
            </div>
            
            <div className="carousel">
                <img src={images[current]} height={500} alt={`Imagen ${current + 1}`} />
            </div>
            <div className="arrow-right">
                <button className="carousel-arrow right" onClick={nextImage}>&gt;</button>
            </div>
            
        </div>
        </div>
        
    );
}