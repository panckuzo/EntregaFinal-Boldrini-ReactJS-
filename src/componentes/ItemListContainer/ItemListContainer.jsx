import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";

import db from "../../db/db";
import ItemList from "../ItemList/ItemList";

import { ScaleLoader } from "react-spinners";

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
        consulta = query(productosRef, where("categoria", "==", categoria))
    }else{
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