import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import { addDoc, collection } from "firebase/firestore";

import db from "../../db/db";
import Form from "./Form";

import { ToastContainer, toast, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./Checkout.css"

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: ""
    });
    const [idOrden, setIdOrden] = useState(null);
    const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

    const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const enviarOrder = (event) => {
    event.preventDefault();
    if(datosForm.email === datosForm.emailRepetido){
        const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
        };
        subirOrden(orden);
    }else{      
        toast.warn("Los emails deben ser iguales", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }
    };

    const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
        setIdOrden(respuesta.id)
        borrarCarrito()
    });
    };

    return (
    <div className="checkout">
        {idOrden ? (
        <div className="orden">
            <h2>Orden Generada correctamente!!</h2>
            <p>N° de orden: {idOrden} </p>
            <Link className="boton-orden" to="/">Ver mas productos</Link>
        </div>
        ) : (
        <Form
            datosForm={datosForm}
            guardarDatosInput={guardarDatosInput}
            enviarOrder={enviarOrder}
        />
        )}
        <ToastContainer />
    </div>
    );
};
export default Checkout;