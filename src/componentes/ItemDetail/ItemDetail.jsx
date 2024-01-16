// import { useState } from "react";
import "./ItemDetail.css"
// import ItemCount from "../ItemCount/ItemCount";
// import { Link } from "react-router-dom";
// const ItemDetail = ({ producto }) => 
// {
//     const [toggle, setToggle] = useState(false);

//     const agregarAlCarrito = (contador) => {
//         console.log(contador);
//         setToggle(true)
//     };

//     return (
//         <div className="ItemDetail">
//             <img className="imagen" src={producto.imagen} alt="{producto.nombre}" />
//             <div className="detalle"> 
//                 <p className="nombre" > {producto.nombre}</p>
//                 <p className="descripcion"> {producto.descripcion}</p>
//                 <p className="precio">$ {producto.precio}</p>
//                 {toggle ? (
//                     <Link to="/carrito" className="Carrito" >Ir al carrito</Link>
//                     ) : (
//                     <ItemCount
//                     stock={producto.stock}
//                     agregarAlCarrito={agregarAlCarrito}
//                     />
//                 )}
//                 {/* <Link to={`/carrito/${producto.id}`} className="link">Agregar al Carrito </Link> */}
//             </div>
//         </div>
//     )
//     }
    
// export default ItemDetail


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