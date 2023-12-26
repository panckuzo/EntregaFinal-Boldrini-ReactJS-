import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Layout from "./componentes/ItemListContainer/Saludo";
import Saludo from "./componentes/ItemListContainer/Saludo";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'


function App() {


  return (
    <div id="app">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="/todos" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    );
  }
  


export default App
