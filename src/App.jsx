import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Formacion from "./components/Formacion";
import Habilidades from "./components/Habilidades";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Perfil />
        <Formacion />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;