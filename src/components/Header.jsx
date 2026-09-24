const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#perfil" className="text-xl font-extrabold text-blue-700">
          Leydi Dayana Hinestroza
        </a>
        <ul className="hidden gap-5 md:flex">
          <li><a href="#perfil" className="text-gray-700 hover:text-blue-700">Perfil</a></li>
          <li><a href="#formacion" className="text-gray-700 hover:text-blue-700">Formación</a></li>
          <li><a href="#habilidades" className="text-gray-700 hover:text-blue-700">Habilidades</a></li>
          <li><a href="#proyectos" className="text-gray-700 hover:text-blue-700">Proyectos</a></li>
          <li><a href="#contacto" className="text-gray-700 hover:text-blue-700">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;