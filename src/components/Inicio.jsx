const Inicio = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-rose-100 via-white to-purple-100 px-6 py-24">
      <article className="mx-auto max-w-6xl text-center">
        <p className="font-bold uppercase tracking-[0.2em] text-rose-500">Tienda virtual</p>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-6xl">
          Todo lo que buscas, en un solo lugar
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Explora nuestros productos, encuentra tus favoritos y agrégalos al carrito.
        </p>
        <a href="#productos" className="mt-8 inline-block rounded-full bg-rose-500 px-7 py-3 font-bold text-white shadow-md hover:bg-rose-600">
          Ver productos
        </a>
      </article>
    </section>
  );
};

export default Inicio;