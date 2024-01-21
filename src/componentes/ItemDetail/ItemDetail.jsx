import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
    const [toggle, setToggle] = useState(false);
    const { añadirProducto } = useContext(CartContext)

    const agregarAlCarrito = (contador) => {
    const productoNuevo = {...producto, cantidad: contador }
    añadirProducto(productoNuevo)
    setToggle(true);
    };

    return (
    <div className="ItemDetail">
        <img className="imagen" src={producto.imagen} alt={producto.nombre} />
        <div className="detalle">
        <h2 className="nombre">{producto.nombre}</h2>
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">${producto.precio}</p>
        {toggle ? (
            <>
            <Link className="Link" to="/carrito">
                Ir al carrito
            </Link>
            <Link className="Link" to="/">
                Seguir comprando
            </Link>
            </>
        ) : (
            <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
            />
        )}
        </div>
    </div>
    );
};
export default ItemDetail;