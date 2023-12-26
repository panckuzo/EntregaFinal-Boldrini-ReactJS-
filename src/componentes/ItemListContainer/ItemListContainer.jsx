import { useEffect, useState } from "react";
import obtenerProductos from "../Utilidades/Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { categoria } = useParams();
    
    useEffect(() => {
        obtenerProductos
        .then((respuesta) => {
            if (categoria) {
                const productosFiltrados = respuesta.filter(
                    (producto) => producto.categoria === categoria
                );
                setProductos(productosFiltrados);
            } else {
                setProductos(respuesta);;
            }
            })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("finalizo la promesa");
        });
    }, [categoria]);
    
    return (
        <div className="item-list-container">
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
