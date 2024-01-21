import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "./Carrito.css";

const Carrito = () => {
    const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

    if (carrito.length === 0) {
    return (
        <div className="carrito-vacio">
        <h2>Ooppss el carrito esta vacio 😢</h2>
        <Link className="button" to="/">
            Volver al inicio
        </Link>
        </div>
    );
    }

    return (
    <div className="carrito">
        <ul className="lista">
        {carrito.map((producto) => (
            <li className="producto" key={producto.id}>
            <img className="imagen" src={producto.imagen} alt={producto.nombre} />
            <p className="texto nombre">{producto.nombre}</p>
            <p className="texto">cantidad: {producto.cantidad}</p>
            <p className="texto">precio c/u: ${producto.precio}</p>
            <button className="borrar" onClick={() => borrarProducto(producto.id)}>Elimnar producto </button>
            </li>
        ))}
        </ul>
        <h3 className="texto">Total a pagar: ${totalPrecio()}</h3>
        <div className="botones" >
            <div >
                <button className="borrar-todo" onClick={borrarCarrito}>Vaciar carrito</button> 
            </div>
            <Link className="link" to="/checkout">
                Continuar con mi compra
            </Link>
            </div>
        </div>
    );
};
export default Carrito;

