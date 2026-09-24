const categorias = [
  { nombre: "Tecnología", icono: "💻" },
  { nombre: "Hogar", icono: "🏠" },
  { nombre: "Accesorios", icono: "🎒" },
];

const Categorias = () => {
  return (
    <section id="categorias" className="bg-white px-6 py-20">
      <article className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Categorías</h2>
          <p className="mt-3 text-gray-600">Encuentra diferentes tipos de productos.</p>
        </header>
        <ul className="grid gap-6 md:grid-cols-3">
          {categorias.map((categoria) => (
            <li key={categoria.nombre} className="rounded-2xl border bg-gray-50 p-8 text-center shadow-sm">
              <p className="text-5xl" aria-hidden="true">{categoria.icono}</p>
              <h3 className="mt-4 text-xl font-bold text-gray-900">{categoria.nombre}</h3>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Categorias;