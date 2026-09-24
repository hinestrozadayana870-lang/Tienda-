const categorias = [
  { nombre: "Belleza", icono: "💄" },
  { nombre: "Accesorios", icono: "👜" },
  { nombre: "Hogar", icono: "🕯️" },
];

const Categorias = () => {
  return (
    <section id="categorias" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-rose-500">Explora</p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">Categorías</h2>
        </header>
        <ul className="grid gap-6 md:grid-cols-3">
          {categorias.map((categoria) => (
            <li key={categoria.nombre}>
              <article className="rounded-[1.5rem] bg-rose-50 p-8 text-center shadow-sm hover:shadow-md">
                <p className="text-5xl" aria-hidden="true">{categoria.icono}</p>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{categoria.nombre}</h3>
              </article>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Categorias;