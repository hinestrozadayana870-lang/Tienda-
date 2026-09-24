import { useState } from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Categorias from "./components/Categorias";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((productosActuales) => [...productosActuales, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);

  return (
    <>
      <Header cantidad={carrito.length} />
      <main>
        <Inicio />
        <Categorias />
        <Productos agregarAlCarrito={agregarAlCarrito} />
        <Carrito productos={carrito} total={total} vaciarCarrito={vaciarCarrito} />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;