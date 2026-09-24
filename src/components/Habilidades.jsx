const habilidades = [
  "Puntualidad",
  "Responsabilidad",
  "Dedicación",
  "Trabajo en equipo",
  "Análisis y desarrollo de software",
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="bg-gray-50 px-6 py-16">
      <article className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Habilidades y fortalezas</h2>
        </header>
        <ul className="grid gap-4 sm:grid-cols-2">
          {habilidades.map((habilidad) => (
            <li key={habilidad} className="rounded-xl border bg-white px-5 py-4 font-semibold text-gray-700 shadow-sm">
              {habilidad}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Habilidades;