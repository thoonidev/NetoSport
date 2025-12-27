import { useState } from "react";
import Vendidos from "../components/Vendidos/Vendidos";
import { data01 } from "../components/Productos/data01";

import Busqueda from "../components/Busqueda/Busqueda";
import "./Productos.css";

export const Productos = () => {
  
  const [filteredProductList, setFilteredProductList] = useState(data01);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFilterProducts = (filteredProducts) => {
    setFilteredProductList(filteredProducts);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const totalPages = Math.ceil(filteredProductList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProductList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Busqueda
         productList={data01}
        setFilteredProductList={handleFilterProducts}
      />

      <Vendidos
        title="Nuestros Productos"
        description="Ofrecemos productos con la mejor calidad"
        productList={paginatedProducts}
      />

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      )}
    </>
  );
};

export default Productos;
