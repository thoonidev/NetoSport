import React, { useState } from "react";
import Menu from "../components/Menu/Menu";
import Vendidos from "../components/Vendidos/Vendidos";
import { data01 } from "../components/Productos/data01";
import Busqueda from "../components/Busqueda/Busqueda";

export const Productos = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [filteredProductList, setFilteredProductList] = useState(data01);

  const handleFilterProducts = (filteredProducts) => {
    setFilteredProductList(filteredProducts);
  };

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

      <Busqueda
        productList={data01}
        setFilteredProductList={handleFilterProducts}
      />

      <Vendidos
        title="Nuestros Productos"
        description="Ofrecemos productos con la mejor calidad"
        productList={filteredProductList}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />
    </>
  );
};

export default Productos;
