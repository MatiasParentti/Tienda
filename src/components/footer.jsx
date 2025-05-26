import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-logo">
          <h2>
            <span className="bold">TIENDA</span>
            
            <div>DE CERVEZAS</div> 
          </h2>
        </div>
<div>
  
</div>
        <div className="footer-section">
          <h3>CONTENIDOS</h3>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/tienda">Nuestras Cervezas</a>
            </li>
            <li>
              <a href="#">Locales</a>
            </li>
            <li>
              <a href="/menu-tienda">Nuestro menú</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>NECESITÁS AYUDA</h3>
          <ul>
            <li>
              <a href="/tutoriales">Tutoriales</a>
            </li>
            <li>
              <a href="/trabaja-en-tdc">Trabajá en TDC</a>
            </li>
            <li>
              <a href="/franquicias">Franquicias</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>¡SUSCRIBITE PARA RECIBIR DESCUENTOS Y NOVEDADES EXCLUSIVAS!</h3>
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu email" />
          <button>SUSCRIBIRME</button>
          <div className="footer-social">
            <h3>CONECTATE CON NOSOTROS</h3>
           
               <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
           
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © Copyright 2021 Tienda de cerveza - Todos los derechos reservados.
        </div>
        <div>
Todos los logos, productos, marcas y nombres aquí utilizados son
          propiedad registrada.
        </div>
      </div>
    </footer>
  );
}
