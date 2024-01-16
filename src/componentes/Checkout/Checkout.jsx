import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";

import "./Checkout.css"
import { Link } from "react-router-dom";

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    });
    const [idOrden, setIdOrden] = useState(null);
    const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

    const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const enviarOrder = (event) => {
    event.preventDefault();
    const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        total: totalPrecio(),
    };

    subirOrden(orden);
    };

    const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
        setIdOrden(respuesta.id)
      //limpiar carrito
        borrarCarrito()
    });
    };

    return (
    <div className="checkout">
        {idOrden ? (
        <div className="orden">
            <h2 className="titulo">Orden Generada correctamente!!</h2>
            <p className="titulo" >N° de orden: {idOrden} </p>
            <Link className="boton-orden" to="/">Ver mas productos</Link>
        </div>
        ) : (
        <Form
            datosForm={datosForm}
            guardarDatosInput={guardarDatosInput}
            enviarOrder={enviarOrder}
        />
        )}
    </div>
    );
};
export default Checkout;