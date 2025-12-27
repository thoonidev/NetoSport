import { useCart } from "../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Carrito.css"; 

const Carrito = () => {
  const { allProducts, total, onDeleteProduct, onCleanCart } = useCart();

  return (
    <div className="carrito-page">
      <h1>Carrito de Compras</h1>
      {allProducts.length ? (
        <>
          <div className="carrito-products">
            {allProducts.map((product) => (
              <div className="carrito-product" key={product.id}>
                <div className="carrito-product-info">
                  <img
                    src={product.img || product.image}
                    alt={product.nameProduct}
                  />
                  <div>
                    <h3>{product.nameProduct}</h3>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio: S/.{product.price}</p>
                    <p>Total: S/.{product.price * product.quantity}</p>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="icon-close"
                  onClick={() => onDeleteProduct(product)}
                />
              </div>
            ))}
          </div>
          <div className="carrito-total">
            <h3>TOTAL: S/.{total}</h3>
            <div className="carrito-buttons">
              <button className="btn-clear-all" onClick={onCleanCart}>
                Vaciar Carrito
              </button>
              <button className="btn-finalizar" onClick={() => { onCleanCart(); alert('Compra exitosa'); }}>
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="cart-empty">El carrito está vacío</p>
      )}
    </div>
  );
};

export default Carrito;
