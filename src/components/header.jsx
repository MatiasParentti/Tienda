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
              <Link onClick={() => setMenuOpen(false)} to="/">Inicio</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/tienda">Nuestras Cervezas</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/#">Locales</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/menu-tienda">Nuestro menú</Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpen(false)} to="/franquicias">Franquicias</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
