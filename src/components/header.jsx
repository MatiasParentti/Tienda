import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-image">
        <div className="header-logo">
          <h2>
            <span className="bold">TIENDA</span>
            <div>DE CERVEZAS</div>
          </h2>
        </div>
        <nav className="nav-header">
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
