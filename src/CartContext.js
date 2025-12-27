import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts(products);
    } else {
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
  };

  const onDeleteProduct = (product) => {
    const updatedProducts = allProducts.filter(
      (item) => item.id !== product.id
    );
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(updatedProducts);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <CartContext.Provider
      value={{
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts,
        onAddProduct,
        onDeleteProduct,
        onCleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
