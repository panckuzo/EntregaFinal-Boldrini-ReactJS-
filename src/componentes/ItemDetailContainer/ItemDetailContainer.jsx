import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { ScaleLoader } from "react-spinners";

import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../db/db";

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();
    const [productoExiste, setProductoExiste] = useState(false);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const productoRef = doc(db, "productos", id);
        getDoc(productoRef)
            .then((respuesta) => {
                const productoDb = { id: respuesta.id, ...respuesta.data() };

                if (!respuesta.exists()) {
                    setProductoExiste(true);
                }
                setProducto(productoDb);
                setCargando(false);
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            {cargando ? (
                <div className="cargando">
                    <ScaleLoader color="#000000" />
                </div>
            ) : (
                <div className="ItemDetailContainer">
                    {productoExiste ? (
                        <div className="NoExiste">El producto buscado no existe 😢</div>
                    ) : (
                        <ItemDetail producto={producto} />
                    )}
                </div>
            )}
        </>
    );
};

export default ItemDetailContainer;

