import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "../components/Productos/data";
import {
  Breadcrumbs,
  EmptyState,
  PageIntro,
  ProductCard,
} from "../components/Shop/Shop";
import "./Productos.css";

const groups = ["Todos", "Zapatillas", "Camisetas", "Balones"];
const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const matchesGroup = (product, group) =>
  group === "Todos" ||
  (group === "Zapatillas"
    ? /Botas|Zapatillas/.test(product.category)
    : product.category.includes(group));

export default function Productos() {
  const [params, setParams] = useSearchParams();
  const query = params.get("buscar") || "";
  const group = groups.includes(params.get("categoria"))
    ? params.get("categoria")
    : "Todos";
  const sort = ["destacados", "menor", "mayor", "nombre"].includes(
    params.get("orden"),
  )
    ? params.get("orden")
    : "destacados";
  const results = useMemo(() => {
    const products = data.filter(
      (product) =>
        matchesGroup(product, group) &&
        normalize(`${product.nameProduct} ${product.category}`).includes(
          normalize(query.trim()),
        ),
    );
    if (sort === "menor") products.sort((a, b) => a.price - b.price);
    if (sort === "mayor") products.sort((a, b) => b.price - a.price);
    if (sort === "nombre")
      products.sort((a, b) => a.nameProduct.localeCompare(b.nameProduct, "es"));
    return products;
  }, [query, group, sort]);
  const pages = Math.ceil(results.length / 6);
  const page = Math.max(
    1,
    Math.min(pages || 1, Number.parseInt(params.get("pagina"), 10) || 1),
  );
  const visible = results.slice((page - 1) * 6, page * 6);
  function update(key, value) {
    const next = new URLSearchParams(params);
    if (value && value !== "Todos") next.set(key, value);
    else next.delete(key);
    if (key !== "pagina") next.delete("pagina");
    setParams(next, { replace: key === "buscar" });
  }
  function changePage(value) {
    update("pagina", String(value));
    document
      .getElementById("ns-results")
      ?.scrollIntoView({ block: "start", behavior: "instant" });
  }

  return (
    <main id="contenido" className="ns-inner-page ns-catalog">
      <Breadcrumbs current="Productos" />
      <PageIntro
        eyebrow="EL EQUIPO QUE TE MUEVE"
        title={
          <>
            Encuentra tu
            <br />
            <em>siguiente nivel.</em>
          </>
        }
        text="De la cancha a la calle. Elige el equipo que va contigo."
      >
        <span className="ns-intro-number" aria-hidden="true">
          08<span>FORMAS DE SALIR A JUGAR</span>
        </span>
      </PageIntro>
      <div className="ns-catalog-toolbar">
        <label className="ns-search">
          <span aria-hidden="true">⌕</span>
          <span className="ns-sr-only">Buscar productos</span>
          <input
            type="search"
            placeholder="Busca tu próximo equipo…"
            value={query}
            onChange={(event) => update("buscar", event.target.value)}
          />
        </label>
        <label className="ns-sort">
          Ordenar por
          <select
            value={sort}
            onChange={(event) => update("orden", event.target.value)}
          >
            <option value="destacados">Destacados</option>
            <option value="menor">Precio: menor a mayor</option>
            <option value="mayor">Precio: mayor a menor</option>
            <option value="nombre">Nombre: A–Z</option>
          </select>
        </label>
      </div>
      <div className="ns-catalog-filters" aria-label="Categorías">
        {groups.map((item) => (
          <button
            type="button"
            key={item}
            className={group === item ? "is-selected" : ""}
            aria-pressed={group === item}
            onClick={() => update("categoria", item)}
          >
            {item}
            <span>
              {data.filter((product) => matchesGroup(product, item)).length}
            </span>
          </button>
        ))}
      </div>
      <div id="ns-results" className="ns-catalog-results">
        <p role="status" aria-live="polite">
          {results.length
            ? `${(page - 1) * 6 + 1}–${Math.min(page * 6, results.length)} de ${results.length} productos`
            : "0 productos"}
        </p>
      </div>
      {visible.length ? (
        <div className="ns-shop-grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Tu equipo aún no aparece."
          text="Prueba otra búsqueda o vuelve a explorar toda la selección."
        >
          <button className="ns-button" onClick={() => setParams({})}>
            Limpiar filtros ↗
          </button>
        </EmptyState>
      )}
      {pages > 1 && (
        <nav className="ns-pagination" aria-label="Páginas de productos">
          <button disabled={page === 1} onClick={() => changePage(page - 1)}>
            ← Anterior
          </button>
          <div>
            {Array.from({ length: pages }, (_, index) => (
              <button
                key={index}
                aria-label={`Página ${index + 1}`}
                aria-current={page === index + 1 ? "page" : undefined}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            disabled={page === pages}
            onClick={() => changePage(page + 1)}
          >
            Siguiente →
          </button>
        </nav>
      )}
      <aside className="ns-catalog-footnote">
        <span aria-hidden="true">✳</span>
        <p>
          ¿No sabes por dónde empezar?{" "}
          <a href="https://wa.me/51935624766" target="_blank" rel="noreferrer">
            Conversemos sobre tu próximo equipo ↗
          </a>
        </p>
      </aside>
    </main>
  );
}
