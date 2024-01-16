// import { useEffect, useState } from "react";
// import obtenerProductos from "../Utilidades/Data";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

// import "./ItemListContainer.css"

// const ItemListContainer = () => {
//     const [productos, setProductos] = useState([]);

//     const { categoria } = useParams();
    
//     useEffect(() => {
//         obtenerProductos
//         .then((respuesta) => {
//             if (categoria) {
//                 const productosFiltrados = respuesta.filter(
//                     (producto) => producto.categoria === categoria
//                 );
//                 setProductos(productosFiltrados);
//             } else {
//                 setProductos(respuesta);;
//             }
//             })
//         .catch((error) => {
//             console.log(error);
//         })
//         .finally(() => {
//             console.log("finalizo la promesa");
//         });
//     }, [categoria]);

import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
    setCargando(true)

    let consulta
    const productosRef = collection(db, "productos");

    if(categoria){
      //filtrar data
        consulta = query(productosRef, where("categoria", "==", categoria))
    }else{
      //traer toda la data
        consulta = productosRef
    }

    getDocs(consulta)
        .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
        return { id: producto.id, ...producto.data() };
        });
        setProductos(productosDb)
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))

    }, [categoria]);

    return (
    <>
        {cargando ? (
        <div className="cargando">
            <ScaleLoader color="#000000" />
        </div>
        ) : (
        <div className="item-list-container">
            <ItemList productos={productos} />
        </div>
        )}
    </>
    );
};

export default ItemListContainer;