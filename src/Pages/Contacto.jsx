import React, { useState } from "react";
import Menu from "../components/Menu/Menu";
import Formulario from "../components/Formulario/Formulario";

export const Contacto = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <Menu
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />

      <Formulario/>
    </>
  );
};

export default Contacto;
