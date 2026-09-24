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
    setCarrito((actual) => [...actual, producto]);
  };

  const eliminarDelCarrito = (indice) => {
    setCarrito((actual) => actual.filter((_, posicion) => posicion !== indice));
  };

  const vaciarCarrito = () => setCarrito([]);

  const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

  return (
    <>
      <Header cantidad={carrito.length} />
      <main>
        <Inicio />
        <Categorias />
        <Productos agregarAlCarrito={agregarAlCarrito} />
        <Carrito
          productos={carrito}
          total={total}
          eliminarDelCarrito={eliminarDelCarrito}
          vaciarCarrito={vaciarCarrito}
        />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;