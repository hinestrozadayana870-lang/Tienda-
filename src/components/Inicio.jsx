const Inicio = () => {
  return (
    <section id="inicio" className="bg-blue-700 px-6 py-24 text-white">
      <article className="mx-auto max-w-6xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-blue-100">Tienda virtual</p>
        <h1 className="text-4xl font-extrabold md:text-6xl">Compra fácil, rápido y seguro</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Explora nuestro catálogo, agrega productos al carrito y revisa tu pedido desde un solo lugar.
        </p>
        <a href="#productos" className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-50">
          Ver productos
        </a>
      </article>
    </section>
  );
};

export default Inicio;