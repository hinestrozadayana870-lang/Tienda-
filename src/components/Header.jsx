const Header = ({ cantidad }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-2xl font-extrabold text-rose-600">
          Tienda <span className="text-purple-500">Bonita</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <li><a href="#inicio" className="text-gray-700 hover:text-rose-600">Inicio</a></li>
          <li><a href="#categorias" className="text-gray-700 hover:text-rose-600">Categorías</a></li>
          <li><a href="#productos" className="text-gray-700 hover:text-rose-600">Productos</a></li>
          <li><a href="#carrito" className="text-gray-700 hover:text-rose-600">Carrito ({cantidad})</a></li>
          <li><a href="#contacto" className="text-gray-700 hover:text-rose-600">Contacto</a></li>
        </ul>

        <a href="#carrito" className="rounded-full bg-rose-500 px-4 py-2 text-sm font-bold text-white hover:bg-rose-600">
          🛍️ {cantidad}
        </a>
      </nav>
    </header>
  );
};

export default Header;