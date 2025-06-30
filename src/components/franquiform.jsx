import "./franquiform.css";

function Franquiform() {
    // No necesitas hacer nada especial: el atributo tabIndex ya está correctamente asignado en orden ascendente (0, 1, 2, 3, 4, 5).
    // El navegador manejará el enfoque automáticamente al presionar Tab.
    // Solo asegúrate de que ningún otro elemento tenga un tabIndex menor o igual a estos dentro del formulario.

    return (
        <section>
            <div className="main-page-wrapper">
                <div className="page-title wrapper">
                    <div className="entry-message">CONOCÉ TODAS LAS OPCIONES</div>
                    <h4 className="title">CONVERTITE EN FRANQUICIADO</h4>
                    <div className="liner-container"></div>
                    <div className="sub-title">Querés ser parte de este equipo? Dejanos tus datos para recibir mas información, y nos pondremos en contacto para contarte todas las posibilidades de tu próxima franquicia Tienda de Café!</div>
                </div>
                <div className="page-content-wrapper">
                    <form action="" method="post">
                        <div className="form-container">
                            <div className="form-row">
                                <div className="Campo">
                                    <div className="Nombre">
                                    <p><label>Nombre</label></p>
                                    <input type="text" name="Nombre" tabIndex="0"/>
                                    </div>
                                </div>
                                
                                <div className="Campo">
                                    <div className="Apellido">
                                    <p><label>Apellido</label></p>
                                    <input type="text" name="Apellido" tabIndex="1"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="form-row">
                                <div className="Campo">
                                    <div className="Email">
                                        <p><label>E-mail</label></p>
                                        <input type="email" name="Email" tabIndex="2"/>
                                    </div>
                                </div>
                                <div className="Campo">    
                                <div className="Telefono">
                                    <p><label>Teléfono</label></p>
                                    <input type="tel" name="Telefono" tabIndex="3"/>
                                </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="Campo">
                                <div className="ComoLlegaste">
                                    <p><label>¿Como llegaste a nosotros?</label></p>
                                    <input type="text" name="Comollegaste" tabIndex="4"/>
                                </div>
                                </div>
                                <div className="Campo">
                                <div className="EnqueZona">
                                    <p><label>¿En que zona te interesaría instalar la franquicia?</label></p>
                                    <input type="text" name="EnqueZona" tabIndex="5"/>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="enviar">
                            <button type="submit" tabIndex="6">Enviar</button>
                        </div>    
                    </form>
                </div>    
            </div>
        </section>
    );
}
export default Franquiform;