import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "./components/Productos/data";

const CartContext = createContext();
const STORAGE_KEY = "netosport-cart-v2";
const clampQuantity = (quantity) =>
  Math.min(99, Math.max(1, Math.floor(Number(quantity) || 1)));
export const useCart = () => useContext(CartContext);

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    const seen = new Set();
    return saved.flatMap((item) => {
      const product = data.find((entry) => entry.id === item?.id);
      if (!product || seen.has(product.id)) return [];
      seen.add(product.id);
      return [{ ...product, quantity: clampQuantity(item.quantity) }];
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [allProducts, setAllProducts] = useState(readCart);
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
          allProducts.map(({ id, quantity }) => ({ id, quantity })),
        ),
      );
    } catch {
      /* The cart remains available when browser storage is disabled. */
    }
  }, [allProducts]);

  const onAddProduct = (product, quantity = 1) => {
    const currentProduct = data.find((item) => item.id === product.id);
    if (!currentProduct) return;
    setAllProducts((previous) => {
      const existing = previous.find((item) => item.id === product.id);
      return existing
        ? previous.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: clampQuantity(
                    item.quantity + clampQuantity(quantity),
                  ),
                }
              : item,
          )
        : [
            ...previous,
            { ...currentProduct, quantity: clampQuantity(quantity) },
          ];
    });
  };
  const onUpdateQuantity = (id, quantity) =>
    setAllProducts((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, quantity: clampQuantity(quantity) } : item,
      ),
    );
  const onDeleteProduct = (product) =>
    setAllProducts((previous) =>
      previous.filter((item) => item.id !== product.id),
    );
  const onCleanCart = () => setAllProducts([]);
  const total = allProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const countProducts = allProducts.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        allProducts,
        total,
        countProducts,
        onAddProduct,
        onUpdateQuantity,
        onDeleteProduct,
        onCleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
