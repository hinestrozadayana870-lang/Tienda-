const formatoPrecio = (precio) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(precio);

const Carrito = ({ productos, total, eliminarDelCarrito, vaciarCarrito }) => {
  return (
    <section id="carrito" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-4xl">
        <header className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-rose-500">Tu compra</p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">Carrito</h2>
        </header>

        {productos.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-rose-200 bg-rose-50 p-10 text-center text-gray-500">
            🛍️ Tu carrito está vacío.
          </p>
        ) : (
          <>
            <ul className="space-y-3">
              {productos.map((producto, indice) => (
                <li key={producto.id + "-" + indice} className="flex flex-col gap-3 rounded-2xl border border-rose-100 bg-rose-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <section>
                    <p className="font-bold text-gray-900">{producto.nombre}</p>
                    <p className="text-sm text-gray-500">{producto.categoria}</p>
                  </section>
                  <section className="flex items-center justify-between gap-5">
                    <p className="font-bold text-gray-900">{formatoPrecio(producto.precio)}</p>
                    <button
                      type="button"
                      onClick={() => eliminarDelCarrito(indice)}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-600 ring-1 ring-rose-200 hover:bg-rose-50"
                    >
                      Eliminar
                    </button>
                  </section>
                </li>
              ))}
            </ul>

            <aside className="mt-6 rounded-2xl bg-gradient-to-r from-rose-500 to-purple-500 p-6 text-white">
              <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-2xl font-extrabold">Total: {formatoPrecio(total)}</p>
                <button
                  type="button"
                  onClick={vaciarCarrito}
                  className="rounded-full bg-white px-5 py-3 font-bold text-rose-600 hover:bg-rose-50"
                >
                  Vaciar carrito
                </button>
              </section>
            </aside>
          </>
        )}
      </article>
    </section>
  );
};

export default Carrito;