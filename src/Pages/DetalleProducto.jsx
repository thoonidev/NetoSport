import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { data } from "../components/Productos/data";
import { data01 } from "../components/Productos/data01";
import "./DetalleProducto.css";

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { onAddProduct } = useCart();

  // Combinar los arrays de productos
  const allProducts = [...data, ...data01];

  // Buscar el producto por id
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    onAddProduct(product);
    // Opcional: mostrar un mensaje o navegar al carrito
  };

  return (
    <div className="detalle-producto container">
      <button onClick={() => navigate(-1)} className="btn-volver">Volver</button>
      <div className="producto-detalle">
        <img src={product.openligthbox || product.img} alt={product.nameProduct} />
        <div className="producto-info">
          <h2>{product.nameProduct}</h2>
          <p className="descripcion">{product.description}</p>
          <p className="precio">S/.{product.price}</p>
          <div className="especificaciones">
            <h3>Especificaciones</h3>
            <ul>
              <li><strong>Material:</strong> Alta calidad</li>
              <li><strong>Disponibilidad:</strong> En stock</li>
              <li><strong>Garantía:</strong> 1 año</li>
              <li><strong>Envío:</strong> Gratis en compras mayores a S/. 500</li>
            </ul>
          </div>
          <button className="btn-agregar" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;