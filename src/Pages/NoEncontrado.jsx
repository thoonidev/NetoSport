import { Link } from "react-router-dom";
import { Breadcrumbs, EmptyState } from "../components/Shop/Shop";
export default function NoEncontrado() {
  return (
    <main id="contenido" className="ns-inner-page">
      <Breadcrumbs current="Página no encontrada" />
      <EmptyState
        title="Este camino sale de la cancha."
        text="La página que buscas no está disponible. Vuelve a explorar nuestra selección."
      >
        <Link className="ns-button" to="/productos">
          Ver productos ↗
        </Link>
      </EmptyState>
    </main>
  );
}
