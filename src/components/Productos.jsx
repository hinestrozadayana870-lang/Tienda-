const productos = [
  { id: 1, nombre: "Bolso elegante", categoria: "Accesorios", precio: 89000, icono: "👜" },
  { id: 2, nombre: "Set de maquillaje", categoria: "Belleza", precio: 65000, icono: "💄" },
  { id: 3, nombre: "Vela decorativa", categoria: "Hogar", precio: 35000, icono: "🕯️" },
  { id: 4, nombre: "Collar", categoria: "Accesorios", precio: 55000, icono: "📿" },
  { id: 5, nombre: "Espejo compacto", categoria: "Belleza", precio: 28000, icono: "🪞" },
  { id: 6, nombre: "Agenda", categoria: "Hogar", precio: 32000, icono: "📔" },
];

const formatoPrecio = (precio) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(precio);

const Productos = ({ agregarAlCarrito }) => {
  return (
    <section id="productos" className="bg-rose-50 px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-purple-500">Catálogo</p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">Nuestros productos</h2>
          <p className="mt-3 text-gray-600">Elige tus favoritos y agrégalos al carrito.</p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
            <li key={producto.id}>
              <article className="overflow-hidden rounded-[1.5rem] border border-rose-100 bg-white shadow-sm">
                <figure className="flex h-48 items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
                  <p className="text-7xl" aria-hidden="true">{producto.icono}</p>
                  <figcaption className="sr-only">{producto.nombre}</figcaption>
                </figure>
                <section className="p-6">
                  <p className="text-sm font-semibold text-rose-500">{producto.categoria}</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{producto.nombre}</h3>
                  <p className="mt-3 text-2xl font-extrabold text-gray-900">{formatoPrecio(producto.precio)}</p>
                  <button
                    type="button"
                    onClick={() => agregarAlCarrito(producto)}
                    className="mt-5 w-full rounded-full bg-rose-500 px-4 py-3 font-bold text-white hover:bg-rose-600"
                  >
                    Agregar al carrito
                  </button>
                </section>
              </article>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Productos;