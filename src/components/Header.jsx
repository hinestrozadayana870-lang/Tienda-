const Header = ({ cantidad }) => {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Navegación principal">
        <a href="#inicio" className="text-2xl font-extrabold text-blue-700">
          Tienda
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          <li><a href="#categorias" className="text-gray-700 hover:text-blue-700">Categorías</a></li>
          <li><a href="#productos" className="text-gray-700 hover:text-blue-700">Productos</a></li>
          <li><a href="#carrito" className="text-gray-700 hover:text-blue-700">Carrito ({cantidad})</a></li>
          <li><a href="#contacto" className="text-gray-700 hover:text-blue-700">Contacto</a></li>
        </ul>
        <a href="#carrito" className="rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white md:hidden">
          Carrito: {cantidad}
        </a>
      </nav>
    </header>
  );
};

export default Header;