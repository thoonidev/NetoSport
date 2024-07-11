import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Nosotros from "./Pages/Nosotros";
import Productos from "./Pages/Productos";
import Contacto from "./Pages/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route
            exact
            path="/inicio"
            element={
              <Inicio
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                setTotal={setTotal}
              />
            }
          />

          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
