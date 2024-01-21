import { Link } from "react-router-dom";

import CartWidget from "./CardWidget";

import "./NavBar.css"


const NavBar = () => {
    return (
    <div id="navbar">
        <Link to="/"   className="brand">
            <img src="/img/musica.png" alt="Logo8Tonicas" />
            <h1>8Tonicas</h1>
        </Link>
        <ul>
            <li>
                <Link to="/todos">Todos los Productos</Link>
            </li>
            <li>
                <Link to="/categoria/cuerdas">Cuerdas</Link>
            </li>
            <li>
                <Link to="/categoria/vientos">Vientos</Link>
            </li>
            <li>
                <Link to="/categoria/percusion">Percusión</Link>
            </li>
            <li>
                <Link to="/categoria/teclas">Teclados y Pianos</Link>
            </li>
            {/* <li>
                <Link to="/categoria/accesorios">Accesorios</Link>
            </li> */}
            <li>
                <Link to="/categoria/equipos">Equipos de Sonido</Link>
            </li>
        </ul>
        <CartWidget/> 
    </div>
    
    )
}

export default NavBar