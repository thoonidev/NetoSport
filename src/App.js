import { Component, lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./CartContext";
import { data } from "./components/Productos/data";

const Inicio = lazy(() => import("./Pages/Inicio"));
const Nosotros = lazy(() => import("./Pages/Nosotros"));
const Productos = lazy(() => import("./Pages/Productos"));
const Contacto = lazy(() => import("./Pages/Contacto"));
const Carrito = lazy(() => import("./Pages/Carrito"));
const DetalleProducto = lazy(() => import("./Pages/DetalleProducto"));
const NoEncontrado = lazy(() => import("./Pages/NoEncontrado"));
const titles = {
  "/": "Equipamiento deportivo",
  "/inicio": "Equipamiento deportivo",
  "/productos": "Productos",
  "/nosotros": "Nosotros",
  "/contacto": "Contacto",
  "/carrito": "Tu carrito",
};

class PageBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <main id="contenido" className="ns-app-error" role="alert">
          <h1>No pudimos cargar esta página.</h1>
          <p>Comprueba tu conexión y vuelve a intentarlo.</p>
          <button
            className="ns-button"
            onClick={() => window.location.reload()}
          >
            Volver a cargar ↗
          </button>
          <Link to="/inicio">Ir al inicio</Link>
        </main>
      );
    return this.props.children;
  }
}
function PageRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const product = pathname.startsWith("/producto/")
      ? data.find((item) => String(item.id) === pathname.split("/")[2])
      : null;
    document.title = `${product?.nameProduct || titles[pathname] || "Página no encontrada"} | NetoSport`;
  }, [pathname]);
  return (
    <PageBoundary key={pathname}>
      <Suspense
        fallback={
          <main id="contenido" className="ns-route-loading" role="status">
            Cargando tu próximo equipo…
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </Suspense>
    </PageBoundary>
  );
}
export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Menu />
          <PageRoutes />
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}
