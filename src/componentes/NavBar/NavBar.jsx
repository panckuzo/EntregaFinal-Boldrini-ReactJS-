import CartWidget from "./CardWidget";
import "./NavBar.css"

const NavBar = () => {
    return (
    <>
    <img id= "banner" src="/img/8TonicasLogo.jpg" alt="" />
    <nav id="navbar">
        <ul>
            <li>
                <a href="">Instrumentos de Cuerda</a>
            </li>
            <li>
                <a href="">Instrumentos de Viento</a>
            </li>
            <li>
                <a href="">Instrumentos de Percusión</a>
            </li>
            <li>
                <a href="">Teclados y Pianos</a>
            </li>
            <li>
                <a href="">Accesorios </a>
            </li>
            <li>
                <a href="">Equipos de Sonido</a>
            </li>

        </ul>
        <CartWidget/>
        
    </nav>
    </>
    )
}

export default NavBar