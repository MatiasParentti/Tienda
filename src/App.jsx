import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Tienda from "./pages/tienda";
import Tutoriales from "./pages/tutoriales";
import MenuTienda from "./pages/menu-tienda";
import TrabajaEnTDC from "./pages/trabaja-en-tdc";
import Franquicias from "./pages/franquicias";
import Contacto from "./pages/contacto";
import Footer from "./components/footer";
import "./css/App.css";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/tutoriales" element={<Tutoriales />} />
          <Route path="/menu-tienda" element={<MenuTienda />} />
          <Route path="/trabaja-en-tdc" element={<TrabajaEnTDC />} />
          <Route path="/franquicias" element={<Franquicias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
