import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-image">
        <div className="header-logo">
          <h2>
            <span className="bold">TIENDA</span>
            <div>DE CERVEZAS</div>
          </h2>
        </div>

        <div onClick={() => setMenuOpen(!menuOpen)} className="menu">
          &#9776;
        </div>

        <nav className={`nav-header ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/tienda">Nuestras Cervezas</Link>
            </li>
            <li>
              <Link to="/#">Locales</Link>
            </li>
            <li>
              <Link to="/menu-tienda">Nuestro menú</Link>
            </li>
            <li>
              <Link to="/franquicias">Franquicias</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
