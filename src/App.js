import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Inicio from "./Pages/Inicio";
import Nosotros from "./Pages/Nosotros";
import Productos from "./Pages/Productos";
import Contacto from "./Pages/Contacto";
import Carrito from "./Pages/Carrito";
import DetalleProducto from "./Pages/DetalleProducto";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./CartContext";

function App() {
  
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/inicio" element={<Inicio />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/productos" element={<Productos />} />
            <Route exact path="/contacto" element={<Contacto />} />
            <Route exact path="/carrito" element={<Carrito />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
