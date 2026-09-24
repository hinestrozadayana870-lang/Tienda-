const formatoPrecio = (precio) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(precio);

const Carrito = ({ productos, total, vaciarCarrito }) => {
  return (
    <section id="carrito" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Carrito de compras</h2>
          <p className="mt-3 text-gray-600">Revisa los productos seleccionados.</p>
        </header>

        {productos.length === 0 ? (
          <p className="rounded-2xl border border-dashed p-8 text-center text-gray-500">
            Tu carrito está vacío.
          </p>
        ) : (
          <>
            <ul className="space-y-3">
              {productos.map((producto, indice) => (
                <li key={producto.id + "-" + indice} className="flex items-center justify-between rounded-xl border bg-gray-50 px-5 py-4">
                  <p className="font-semibold text-gray-800">{producto.nombre}</p>
                  <p className="font-bold text-gray-900">{formatoPrecio(producto.precio)}</p>
                </li>
              ))}
            </ul>
            <footer className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-blue-50 p-6 sm:flex-row">
              <p className="text-2xl font-extrabold text-gray-900">Total: {formatoPrecio(total)}</p>
              <button
                type="button"
                onClick={vaciarCarrito}
                className="rounded-xl bg-gray-900 px-5 py-3 font-bold text-white hover:bg-gray-800"
              >
                Vaciar carrito
              </button>
            </footer>
          </>
        )}
      </article>
    </section>
  );
};

export default Carrito;