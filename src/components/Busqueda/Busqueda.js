import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Busqueda.css";

const Busqueda = ({ productList, setFilteredProductList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);

    const filteredProducts = productList.filter((product) =>
      product.nameProduct.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredProductList(filteredProducts);
  };

  return (
    <div className="busqueda">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Busqueda;
