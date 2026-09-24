const Contacto = () => {
  return (
    <section id="contacto" className="bg-gradient-to-r from-rose-500 to-purple-500 px-6 py-20 text-white">
      <article className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-rose-100">Contacto</p>
        <h2 className="mt-2 text-4xl font-bold">¿Necesitas ayuda con tu compra?</h2>
        <p className="mt-4 leading-7 text-rose-50">
          Aquí puedes agregar el correo, teléfono o redes sociales de la tienda.
        </p>
        <a href="#inicio" className="mt-7 inline-block rounded-full bg-white px-6 py-3 font-bold text-rose-600">
          Volver al inicio
        </a>
      </article>
    </section>
  );
};

export default Contacto;