const productos = [
  { id: 1, nombre: "Audífonos", categoria: "Tecnología", precio: 75000, icono: "🎧" },
  { id: 2, nombre: "Teclado", categoria: "Tecnología", precio: 95000, icono: "⌨️" },
  { id: 3, nombre: "Termo", categoria: "Hogar", precio: 45000, icono: "🥤" },
  { id: 4, nombre: "Mochila", categoria: "Accesorios", precio: 85000, icono: "🎒" },
];

const formatoPrecio = (precio) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(precio);

const Productos = ({ agregarAlCarrito }) => {
  return (
    <section id="productos" className="bg-gray-50 px-6 py-20">
      <article className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Productos</h2>
          <p className="mt-3 text-gray-600">Selecciona un producto para agregarlo al carrito.</p>
        </header>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto) => (
            <li key={producto.id} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <figure className="flex h-44 items-center justify-center bg-blue-50">
                <p className="text-7xl" aria-hidden="true">{producto.icono}</p>
                <figcaption className="sr-only">{producto.nombre}</figcaption>
              </figure>
              <article className="p-6">
                <p className="text-sm font-semibold text-blue-700">{producto.categoria}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{producto.nombre}</h3>
                <p className="mt-3 text-2xl font-extrabold text-gray-900">{formatoPrecio(producto.precio)}</p>
                <button
                  type="button"
                  onClick={() => agregarAlCarrito(producto)}
                  className="mt-5 w-full rounded-xl bg-blue-700 px-4 py-3 font-bold text-white hover:bg-blue-800"
                >
                  Agregar al carrito
                </button>
              </article>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Productos;