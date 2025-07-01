import React from "react";
import "../css/trabaja-en-tdc.css";

const TrabajaEnTDC = () => {
  return (
    <div className="trabaja-container">
      <h4 className="trabaja-subtitulo">SUMATE A NUESTRO EQUIPO</h4>
      <h1 className="trabaja-titulo">TRABAJÁ EN TDC</h1>
      <p className="trabaja-descripcion">
        Si querés formar parte de Tienda de Cervezas envianos tu datos y adjuntá
        tu CV
      </p>

      <form className="trabaja-formulario">
        <div className="trabaja-row">
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
        </div>
        <div className="trabaja-row">
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Teléfono" required />
        </div>
        <div className="trabaja-row">
          <input
            type="text"
            placeholder="¿Cuál es tu puesto de trabajo?"
            required
          />
          <select required>
            <option value="">Seleccione una sucursal</option>
            <option value="sucursal1">Sucursal 1</option>
            <option value="sucursal2">Sucursal 2</option>
            {/* Agregar más opciones según sea necesario */}
          </select>
        </div>
        <div className="trabaja-row">
          <label className="cv-label">
            Adjuntar CV
            <input type="file" accept=".pdf,.doc,.docx" />
          </label>
        </div>
        <textarea placeholder="Mensaje" rows="5" />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
};

export default TrabajaEnTDC;
