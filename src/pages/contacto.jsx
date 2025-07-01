import "../css/Contacto.css";

export default function Contacto() {
  return (
 <div style={{ minHeight: "90vh", padding: "4vh 5vw" , marginTop: "15vh"}}>

      <section className="contacto">
      <div className="formulario">
        <div className="line-container">
          <h2>COMUNICATE CON NOSOTROS</h2>
          <span className="line"></span>
        </div>

        <p>
          Ante cualquier consulta no dudes en comunicarte. Dejá tus datos y
          consulta utilizando el formulario a continuación y nos contactaremos a
          la brevedad.
        </p>

        <form>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="asunto">Asunto</label>
          <input type="text" id="asunto" name="asunto" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="6" required></textarea>

          <button type="submit">ENVIAR</button>
        </form>
      </div>

      <div className="redes">
        <div className="line-container">
          <h2>NUESTRAS REDES SOCIALES</h2>
          <span className="line"></span>
        </div>

        <div className="iconos">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
 </div>

  );
}
