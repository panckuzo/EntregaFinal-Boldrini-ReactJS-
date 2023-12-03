import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer"


import './App.css'

function App() {


  return (
    <div id="app">
        <NavBar />
        <ItemListContainer saludo="Bienvenido a 8Tonicas - Tu Destino Musical"/>
        <ItemListContainer saludo= "Descubre el mundo de la música en 8Tonicas, tu tienda online de instrumentos musicales. Nos enorgullece ofrecer una amplia selección de instrumentos de alta calidad que se adaptan a todos los estilos y niveles. Desde guitarras y pianos hasta equipos de estudio, aquí encontrarás todo lo que necesitas para llevar tu pasión musical al siguiente nivel"/>
    </div>
    );
  }
  


export default App
